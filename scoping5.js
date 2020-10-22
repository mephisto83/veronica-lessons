let b = 0;

let a = 3;

let a = 2;

function afunc() {
    var a = 1;
    console.log(`inside afunc a == ${a}`);
    (function () {
        a = 2;
        console.log(`inside anonymous a == ${a}`);
    })();
}

afunc();

console.log(`a = ${a}`);