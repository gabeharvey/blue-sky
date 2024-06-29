console.log('This is our family');

let memberOne = 'Gabe';
console.log(memberOne + ' is in our family');

const hobbyOne = "Playing World of Warcraft";
console.log('Hello my name is ' + memberOne + ' and I like ' + hobbyOne);

let one = 42;
let two = false;

console.log(typeof one);
console.log(typeof two);

let three = 50;
let four = '50';

console.log(three === four);
console.log(three == four);
console.log(three !== four);

const family = ['Gabe', 'Laura', 'Mary', 'Cora', 'Henry'];
console.log(family[0]);
console.log(family[1]);
console.log(family[2]);
console.log(family[3]);
console.log(family[4]);

console.log(family.length);
for (let i=0; i<family.length; i++) {
    console.log(family[i] + ' is in the Harvey Family');
}