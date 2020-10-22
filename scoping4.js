let b = 0;

function afunc() {
    let a = 1;
    console.log(`inside afunc a == ${a}`);
    (function () {
        a = 2;
        console.log(`inside anonymous a == ${a}`);
    })();
}

afunc();

console.log(`a = ${a}`);