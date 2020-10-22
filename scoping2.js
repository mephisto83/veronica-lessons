var  a = 0;

function afunc() {
    var  a = 1;
    console.log(`inside afunc a == ${a}`);
    (function () {
        var  a = 2;
        console.log(`inside anonymous a == ${a}`);
    })();
}

afunc();

console.log(`a = ${a}`);