


//

// function f1() {
//     console.log("before :: LOG")
//     console.log("f1()");
//     console.log("after :: LOG")

// }

// f1();

// function f2() {
//     console.log("before :: LOG")
//     console.log("f2()")
//     console.log("after :: LOG")
// }

// f2();

/**
 * 
 *  design issues
 * 
 *  ==> code tangling / tight coupling
 *  ==> code scattering / duplication
 */



function f1() {
    console.log("f1()");

}

function f2() {
    console.log("f2()")
}

// Higher-Order-Function ==> HOP i.e function composition
function logWrapper(f) {
    return function () {
        console.log("before :: LOG")
        f();
        console.log("after :: LOG")
    }
}
function doSec(f) {
    return function () {
        console.log("before :: SEC")
        f();
    }
}


let f1WithLog = logWrapper(f1);
// f1WithLog();
let f2WithLog = logWrapper(f2);
// f2WithLog();
let f2WithLogAndSec = doSec(f2WithLog);
f2WithLogAndSec();