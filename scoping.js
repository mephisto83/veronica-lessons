
let a = 0;

function afunc() {
    let a = 1;
    (function () {
        let a = 2;
    });
}

afunc();
