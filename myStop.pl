#!/usr/bin/perl

#cpan install Proc::ProcessTable 
use Proc::ProcessTable;
use Cwd 'realpath';
use warnings;
use strict;

#web-server.js
#cwd:  /home/noyal/projets/Illustration


	

sub findProcessOnCurrentPath {
	my ($fname, $cwd) = @_;
	print "Recherche de process $fname lancé à partir de $cwd \n";

	my $t = new Proc::ProcessTable;
	
	my $p;
	my @findProcess = ();
	
	PROCESS:foreach $p (@{$t->table}) {
		
		
		my $f;
		my $findCwd = undef;
		my $findFname = undef;
		
		foreach $f ($t->fields){
			next unless( ("cwd" eq $f) || ("fname" eq $f) );
			next unless($p->{$f});
			#print $f, ":  ", $p->{$f}, "\n";
			
			unless( ($findCwd) && ($findFname) )
			{
				if("cwd" eq $f)
				{
					next PROCESS unless($cwd eq $p->{$f});
					$findCwd = 1;
				}
			
				if("fname" eq $f)
				{
					next PROCESS unless($fname eq $p->{$f});
					$findFname = 1;
				}
				if( ($findCwd) && ($findFname) )
				{
					push @findProcess, $p;
				}
			}
		}
	}
	
	my $findProcess = @findProcess;
	print "Recherche : $findProcess process trouvé(s) \n";
	
	return @findProcess;
}

sub displayProcess {
	my (@findProcess) = @_;
	my $t = new Proc::ProcessTable;
	
	my $findProcess = @findProcess;
	if($findProcess != 0)
	{
		print "Affichage des $findProcess process trouvé(s) \n";
	
		my $pr;
		foreach $pr (@findProcess) {
				my $fi;
				foreach $fi ($t->fields){
					next unless($fi);
					print $fi, ":  ", $pr->{$fi}, "\n";
				}
				print "--------------------------------\n";
		}
	}
}

sub killProcess {
	my (@findProcess) = @_;
	my $t = new Proc::ProcessTable;
	
	my $findProcess = @findProcess;
	if($findProcess != 0)
	{
		print "Arrêt des $findProcess process trouvé(s) \n";
	
		my $process;
		foreach $process (@findProcess) {
			$process->kill(9);
		}
	} 
}

my $path = realpath();


my (@findProcess) = &findProcessOnCurrentPath("node", $path);
&displayProcess(@findProcess);
&killProcess(@findProcess);
#fname:  node
#my $cmd = "ps -ef | grep web-server.js";
#my $results = `$cmd`;

exit 1;
