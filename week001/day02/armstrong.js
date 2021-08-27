//Armstrong number



let sum = 0;
const number = prompt('Enter a three-digit positive integer: ');
let temp = number;
while (temp > 0) {
    let rem = temp % 10;

    sum += rem * rem * rem;
    temp = parseInt(temp / 10);
}
if (sum == number) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}