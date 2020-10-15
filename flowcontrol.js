

// if statement
// for loop
// while loop

function GiveMeRightPrice(drink) {
    if (drink === 'milk') {
        return 3;
    }
    else if (drink === 'lemonade') {
        return 1;
    }
    else if (drink === 'orange juice') {
        return 4;
    }
    else {
        return 0;
    }
}

let price = GiveMeRightPrice('milk');

// console.log(`price = ${price} which should be 3`);

let items = ['milk', 'lemonade', 'orange juice', 'pineapple juice'];

let numberOfItems = items.length;

for (let i = 0; i < numberOfItems; i = i + 1) {
    // the stuff here is going to repeat
    let item = items[i];
    let theItemsPrice = GiveMeRightPrice(item);
    console.log(`The ${item}'s price is ${theItemsPrice}`);
}

function getSomeCost(a_list) {
    let total = 0;
    for (let i = 0; i < a_list.length; i = i + 1) {
        total = total + someValue(a_list[i]);
    }

    return total;
}
// goes to the next thing