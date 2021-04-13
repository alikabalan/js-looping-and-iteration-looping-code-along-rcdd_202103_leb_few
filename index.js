//No.1

let names = ["Ada", "Brendan", "Ali"];

function writeCards(names , birthday) {
  for (let i = 0; i < names.length; i++) {
console.log(`Thank you, ${names[i]}, for the wonderful ${birthday} gift!`);
}

return names;
}

writeCards(name, 'birthday');




//No.2
let number = 15;

function countDown(number) {
while (number >= 0) {
console.log(number--);
}

return countDown;
}

countDown(number);
