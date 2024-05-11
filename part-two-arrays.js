let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];

//1) Use bracket notation to replace ‘slinky’ with ‘space tether’. Print the array to confirm the change.
console.log(cargoHold.splice(5, 1, 'space tether'));
console.log(cargoHold);

//2) Remove the last item from the array with pop. Print the element removed and the updated array.
console.log(cargoHold.pop());
console.log(cargoHold);

//3) Remove the first item from the array with shift. Print the element removed and the updated array.
console.log(cargoHold.shift());
console.log(cargoHold);

//4) Unlike pop and shift, push and unshift require arguments inside the (). Add the items 1138 and ‘20 meters’ to the the array - the number at the start and the string at the end. Print the updated array to confirm the changes.
cargoHold.push('20 meters');
cargoHold.unshift(1138);
console.log(cargoHold);

//5) Use a template literal to print the final array and its length.
console.log(`The final array is '${cargoHold}' and it has a length of ${cargoHold.length}`);

let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    ";
let newString = dna.trim();
console.log(dna);
dna = dna.replace('GCT','AGG');
console.log(dna);
console.log(dna.slice(16,19));
console.log(`${dna.slice(4,7).toLowerCase()}o ${dna.slice(dna.indexOf('CAT'),dna.indexOf('CAT')+3).toLowerCase()}`);

