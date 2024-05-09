

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

const date = ("Monday 2019-03-18");
const time = ("10:05:34 AM")
const astronautCount = 7;
const astronautStatus = ("ready")
const averageAstronautMassKg = 80.7;
const crewMassKg = astronautCount * averageAstronautMassKg;
const fuelMassKg = 760000;
const shuttleMassKg = 74842.31;
const totalMassKg = crewMassKg +fuelMassKg + shuttleMassKg;
const maximumMassLimit = 850000;
const fuelTempCelsius = -225;
const minimumFuelTemp = -300;
const maximumFuelTemp = -150;
const fuelLevel = "100%";
const weatherStatus = "clear";
const preparedForLift0ff = true;

if (astronautCount <= 7) {
    console.log("Astronaut Count: ", astronautCount);
}

if (astronautStatus === "ready") {
    console.log("Astronaut Status: ", astronautStatus);
}


if (fuelLevel === 100) {
    console.log("Fuel Level: ", fuelLevel);
}

if (weatherStatus === "clear") {
    console.log("Weather Status: ", weatherStatus);
}

console.log(date);
console.log(time);
console.log(astronautCount);
console.log(crewMassKg);
console.log(fuelMassKg);
console.log(shuttleMassKg);
console.log(totalMassKg);
console.log(fuelTempCelsius);
console.log(weatherStatus);

console.log("Have a nice flight!");
