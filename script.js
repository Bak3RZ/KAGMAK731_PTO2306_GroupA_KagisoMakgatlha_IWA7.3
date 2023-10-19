const leoName = 'Leo';
const leoSurname = 'Musvaire';
const leoBalance = -9394;

const sarahName = 'Sarah';
const sarahSurname = 'Kleinhans';
const sarahBalance = -4582.2;

const divider = '----------------------------------';

const owed = Math.abs(leoBalance + sarahBalance); // calculated the absolute value, removing the negative value
const leo = `${leoName} ${leoSurname} (Owed: R ${-leoBalance.toFixed(2)})`;
// used string interpolation for leoName + leoSurname + Balance
//added toFixed(2) to round off total to 2 decimal points
const sarah = `${sarahName} ${sarahSurname} (Owed: R ${-sarahBalance.toFixed(2)})`;
// same output as line 12
const total = "Total amount owed: R "; // included "R" 
const result = leo + '\n' + sarah + '\n' + divider + '\n' + total + owed.toFixed(2) + '\n' + divider;
// included \n newline character to move content to the next line

console.log(result);