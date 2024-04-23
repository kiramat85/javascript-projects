

// Create and assign a miles to Mars variable. You can get the miles to Mars by multiplying the distance to Mars in kilometers by the miles per kilometer.
// let MilestoMars=kiloMetersToMars*milesPerKilometer;
/*
Name of the space shuttle	Determination
Shuttle Speed (mph)	17,500
Distance to Mars (km)	225,000,000
Distance to the Moon (km)	384,400
Miles per kilometer	0.621
*/
let ShuttleName = "determination";
let shuttleSpeed = 17500;
let distanceToMarsInKm= 225000000;

let milesPerKilometer = 0.621;

let milesToMars = distanceToMarsInKm*milesPerKilometer;

let hoursToMars = milesToMars / shuttleSpeed;

let daysToMars = hoursToMars / 24;

console.log(ShuttleName," will take ",daysToMars, "days to reach Mars.")