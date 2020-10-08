// Language: Javascript

// Declaration
let bees;
console.log(`bees: ${bees}`);
// var camel;
// Variables 

let apples = 5;
console.log(`apples: ${apples}`);
let dog = apples;
console.log(`dog: ${dog}`);
apples = 6;
console.log('changed apples to 6.');
console.log(`dog: ${dog}`);
console.log(`apples: ${apples}`);
console.log('---------------------------------------------------------------')
// {} = object
let camelInformation = { value: 1 };
console.log(`camelInformation.value: ${camelInformation.value}`);
camelInformation.value = camelInformation.value + 5;
console.log(`camelInformation.value: ${camelInformation.value}`);
console.log('------------------------------ camel information changing stuff---------------------------------')

let houseInformation = camelInformation;
console.log(`houseInformation.value: ${houseInformation.value}`);
console.log(`camelInformation.value: ${camelInformation.value}`);
houseInformation.value = houseInformation.value + 2;
console.log(`houseInformation.value: ${houseInformation.value}`);
console.log(`camelInformation.value: ${camelInformation.value}`);


let catInformation = {
    hair: {
        long: true
    },
    legs: {
        count: 4,
        hairy: true
    }
};
let dogInformation = catInformation;
catInformation.hair.long = false;
dogInformation.hair.long // print false;


console.log('------------------ list ----------------------')
let list = [1, 2, 3, 4, 5];
console.log(list);
let someValue = list[4];


list = ['a', 'b', 'c'];
console.log(list);
let anotherValue = list[1];

list = [1, 2, 'a', 'b']
console.log(list);
let justToMakeSure = list[3];

list = [{ value: { asdf: { asdf: {} } } }, {}, 1, 2, 3, true, false, 'a'];
console.log(list);
let happy = list[0]

// Types

// Value vs Reference
// Number, Boolean, String, undefined = "Value Types"
//  Object, Array = "Reference Types" 

// Function
function add(a, b) {
    
    let result = a + b;

    return result;
}

let addResult = add(15, 14);
console.log(addResult);
addResult = add;
console.log(addResult);
console.log(addResult(12, 12));
console.log(add);
console.log(add.toString());

// Defining Functions

