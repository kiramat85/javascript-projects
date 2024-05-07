
let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let shuttleSpeed = 15000;
let computerStatusCode = 200;

let fuelLevel;
let engineTemperature; 
let commandOverride = true; 
if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}


if(crewStatus){
   console.log("Crew Ready");

 }else{
console.log("Crew Not Ready")
}

if(shuttleSpeed> 17500){
   console.log("ALERT: Escape velocity reached!")
}else if (shuttleSpeed<8000){
   console.log("ALERT: Cannot maintain orbit!")

}else{
   console.log("Stable Speed.")

}

// 4. The code below does produce the same results 
if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
   console.log("all systems go");
} else {
   console.log("WARNING. Not ready");
}

if (!crewStatus || computerStatusCode !== 200 || !spaceSuitsOn) {
   console.log("WARNING. Not ready");
} else {
   console.log("all systems go");
}



// if (fuelLevel>20000 && engineTemperature <2500){
//    console.log("Full tank. Engines good.");
// }
// if (fuelLevel>10000 && engineTemperature <2500){
//    console.log("Fuel level above 50%. Engines good.");
// }
// if (fuelLevel>5000 && engineTemperature <2500){
//    console.log("Fuel level above 25%. Engines good.");
// }
// if (fuelLevel<5000 || engineTemperature >3500|| engineIndicatorLight==="red blinking"){
//    console.log("ENGINE FAILURE IMMINENT!");
// }else{
//    console.log("Fuel and engine status pending…")
// }
if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === "red blinking"){
   console.log("ENGINE FAILURE IMMINENT!");
 } else if (fuelLevel <= 5000 || engineTemperature > 2500){
   console.log("Check fuel level. Engines running hot.");
 } else if (fuelLevel > 20000 && engineTemperature <= 2500){
   console.log("Full tank. Engines good.");
 } else if (fuelLevel > 10000 && engineTemperature <= 2500){
   console.log("Fuel level above 50%. Engines good.");
 } else if (fuelLevel > 5000 && engineTemperature <= 2500){
   console.log("Fuel level above 25%. Engines good.");
 } else {
   console.log("Fuel and engine status pending...");
 }

 

if(commandOverride=== false&& fuelLevel>20000 ||fuelLevel>10000|| fuelLevel>5000 &&engineIndicatorLight === "green"){
   console.log("cleared for Take Off");
}else if(commandOverride=== true){
   console.log("All systems are good. Cleared for Take Off")
}

if(fuelLevel >= 20000 && engineIndicatorLight!="NOT red blinking"|| commandOverride=== true){
   console.log("Cleared to launch!”")
}else{
   console.log("Launch scrubbed!")
}