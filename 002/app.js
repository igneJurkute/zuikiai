let racoon1 = 'good';
const racoon2 = 'bad';

const racoon3 = {
    what: 'good',
    size: 'small'
}

const racoon4 = {
    what: 'bad',
    size: 'big'
}

// console.log(racoon3 == racoon4);

let fox1 = racoon1; // by value
racoon1 = 'bad';

let fox3 = racoon3; // by reference
// racoon3.what = 'evil';
// fox3.size = '200px';

// console.log(racoon3 == fox3);

let fox4 = {...racoon3, ...racoon4 } // spraed copy
    // racoon4.what = 'evil';
    // fox4.size = '200px';

// console.log('fox:', fox1, 'racoon:', racoon1);
// console.log('fox:', fox3, 'racoon:', racoon3);
// console.log('fox:', fox4, 'racoon:', racoon4);

// console.log(racoon3, racoon4);

/*
const what = racoon3.what;
const size = racoon3.size;
*/

const { what, size } = racoon3; // destructuring 

// console.log(what, size);

const home = [
    'Ieva',
    'Simas',
    'Beaver'
];

home.push('Petras');
home.unshift('Margė');
// home.pop();
// home.shift();

home[1] = 'Fox';

// home[55] = 'Simas';


console.log(home, home[1], home.length);


for (let i = 0; i < home.length; i++) {
    console.log(home[i]);
}