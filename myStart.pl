#!/usr/bin/perl
use warnings;
use strict;

my $cmd = "./scripts/web-server.js 8001 &";

print("Lancement du site Illustration sur le port 8001 \n");
print("http://localhost:8001/app/Illustration.html \n");

print("Pour arrêter avec ./myStop.pl \n");
print("Pour lancer les tests avec karma ./myTest.pl\n");
print("GITHUB");


system "$cmd";

exit 1;
