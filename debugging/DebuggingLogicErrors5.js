// The value of launchReady assigned in the first if/else block gets changed in the second if/else block. Dangerous waters...
// Since the issue is with launchReady, ONE way to fix the logic error is to use a different variable to store the fuel check result. 
// Refactor the code to do this. Verify that your change works by updating the console.log statements.

 launchReady = false;
 fuelLevel = 17000;
 crewStatus = true;
 computerStatus = 'green';
 fuelCheck = false;

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   fuelCheck = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   fuelCheck = false;
}

console.log("fuelCheck = ", fuelCheck);

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
}

console.log("launchReady = ", launchReady);

if (fuelCheck && launchReady) {
   (console.log("10, 9, 8, 7, 6, 5, 4, 3, 2, 1... Liftoff!"));
} else {
   console.log("Launch scrubbed");
}
let launchReady = false;
let fuelLevel = 17000; 
// let crewStatus = true
// let computerStatus = ' green ';

if ( fuelLevel>= 20000 ) {
   console.log('Fuel level cleared.');launchReady = true;
} else {
   console.log( 'WARNING: Insufficient fuel!');
   launchReady = false 
}
 launchReady = false;
// let fuellevel = 17000
let crewStatus =true;
let computerStatus = 'green' ;

// if (fuelLevel >= 20000) {
// console.log (' Fuel level cleared.');
// launchReady = true;
//  } else {
// console.log ('WARNING: Insufficient fuel!');
// launchReady = false;
// }

if (crewStatus && computerStatus === 'green') {
   console.log('Cew & computer cleared.') ;
   launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false
}

launchReady = false;
fuelLevel = 17000;
crewStatus = true;
computerStatus = 'green' ;

if ( fuelLevel >= 20000) {
   console.log('Fuel Level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}
console.log(launchReady);

if (crewStatus && computerStatus ==='green'){
console.log('Crew & computer cleared');
launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false
}
console.log(launchReady)
launchReady = false;
crewReady = false;
fuelLevel = 17000
crewStatus = true;
computerStatus = 'green' ;

if (fuelLevel>= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}
console.log("launchReady -" , launchReady);

if (crewStatus && computerStatus === 'green')
   {
      console.log('Crew & computer cleared.');
      crewReady = true;
   } else {
      console.log('WARNING: Crew or computer not ready!');
      crewReady = false;
   }
   console.log("crewReady =",crewReady);