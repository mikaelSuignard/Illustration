#!/usr/bin/perl
use warnings;
use strict;
use File::Spec;
use Cwd 'realpath';
use POSIX qw( :sys_wait_h );

my $cmd2 = join(' ', @ARGV);

sub init {
	my $currentDir = realpath();
	my $dir = File::Spec->catdir( $currentDir, "config" );

	print "\n";
	print "Starting Karma Server (http://karma-runner.github.io)\n";
	print "-------------------------------------------------------------------\n";
	return ($dir);
}

#See https://github.com/karma-runner/karma/blob/master/docs/config/01-configuration-file.md


sub runTest {
	my ($path) = @_;
	my $test = undef;
	my $cmd = "karma start ".$path;
	$cmd .= $cmd2 if($cmd2);
	print "$cmd\n";
	my $results = system "$cmd";
	
	if ( WIFEXITED($results) ) {    # vrai pour une fin normale
		my $status = WEXITSTATUS($?);    # état de sortie
		print "Result Status: [".$status."]\n";
		$test = $status;
	}
	return $test;
}

my $confDir = &init();

my $pathUnitTest = File::Spec->catfile( $confDir, "karma.conf.js" );
my $cr = &runTest($pathUnitTest) if(-e $pathUnitTest);
if($cr == 0) { print "Sucess";}
if($cr == 1) {print "Failure";}

my $pathE2ETest = File::Spec->catfile( $confDir, "karma-e2e.conf.js" );
&runTest($pathE2ETest) if(-e $pathE2ETest);

#To do jenkins.
exit 0;
