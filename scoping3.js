var a = 0;

function afunc() {
    a = 1;
    console.log(`inside afunc a == ${a}`);
    (function () {
        let a = 2;
        console.log(`inside anonymous a == ${a}`);
    })();

    (function () {
        a = 3;
        console.log(`inside anonymous a == ${a}`);
    })()
}

afunc();

console.log(`a = ${a}`);