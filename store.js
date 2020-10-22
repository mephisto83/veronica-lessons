const commandLineArgs = require('command-line-args');
const readline = require('readline');
var options = commandLineArgs([
    { name: 'fruits', alias: 'f', type: String }
]);


let store = {
    items: []
};


function addItemToStore(name, price) {
    store.items.push({
        name: name,
        price: price
    })
}

function getItemPrice(name) {
    let item = store.items.find(v => v.name === name);
    if (item) {
        return item.price;
    }
    return -1;
}



// "apple;pear;banana" => ["apple", "pear", "banana"]
let fruitNames = options.fruits.split(';');
for (let i = 0; i < fruitNames.length; i++) {
    addItemToStore(fruitNames[i], i + 1);
}

for (let i = 0; i < fruitNames.length; i++) {
    console.log(`The ${fruitNames[i]} price is ${getItemPrice(fruitNames[i])}`);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function runStore() {
    rl.question('What do you want to buy ', (answer) => {
        let price = getItemPrice(answer);
        if (price !== -1) {
            console.log(`Ok: ${answer}`);
            console.log(`it costs ${price}`)
            runStore();
        }
        else if (answer === 'done') {

            rl.close();
        }
        else {
            runStore();
        }
    });
}
runStore();
console.log('the store is closed')

/***
 * 
 *  apple: 2
 *  pear: 1
 *  orange: 3
 * 
 * total = 12;
 * 
 */