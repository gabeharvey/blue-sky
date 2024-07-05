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

function isEqual(one, two) {
    if (one === two) {
        console.log("They are equal in type and value");
    } else if (one == two) {
        console.log('They are equal in value');
    } else {
        console.log('They are not equal');
    } return;
}

isEqual (10, '10');

family.unshift('Blackberry');
console.log(family);

console.log(family.length);
for (let i=0; i<family.length; i++) {
    console.log(family[i] + ' is in the Harvey Family');
}

console.log(family[2]);
console.log(family[3]);

console.log(window);
console.log(window.document);
console.log(document.documentElement);
console.log(document.head);

console.log(this);
function helloThis() { 
    console.log("Inside this function, this is " + this); 
}

helloThis();

let titleEl = $('<p>');
titleEl.text('Blackberry and Frost');
let h1El = $('<h1>');
h1El.append(titleEl);