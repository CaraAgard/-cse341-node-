const guy = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name)
    }
};

guy.greet();

//console.log(guy);

//arrays
const hobbies = ['sports', 'cooking'];
// for (let hobby of hobbies) {
//     console.log(hobby);
// }
// console.log(hobbies.map(hobby => {
//     return "hobby: " + hobby;
// }));
//or write
//console.log(hobbies.map(hobby => 'Hobby: ' + hobby));

//console.log(hobbies);

//primitive and reference types. array is a reference type

// hobbies.push('Programming');
// console.log(hobbies);

//rest and spread operators
// const copiedarray = hobbies.slice();
// console.log(copiedarray);

const copiedarray = [...hobbies];
console.log(copiedarray);
//or above you could
//const copiedguy = {...guy};
//console.log(copiedguy);

// const toArray = (arg1, arg2, arg3) => {
//     return [arg1, arg2, arg3];
// };

// console.log(toArray(1, 2, 3));
//for rest

/*
so the three dots ...
are a spread or rest
for spread it pulls out of an aray
for rest it adds to an array function
 */

const toArray = (...args) => {
    return args;
    
};

console.log(toArray(1, 2, 3, 4));


//destructuring
const indv = {
    name: 'Joe',
    age: 56,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};
// const printName = (personData) => {
//     console.log(personData.name);
const printName = ({name}) => {
    console.log(name);

}
printName(indv);

const {girl, aged} = indv;
console.log(girl, aged);