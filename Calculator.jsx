const info = "calculator challange";


function add(a,b){
    let sum = a+b;
    return sum;
}

function Sub(a,b){
    let subtraction = a-b;
    return subtraction;
}

function mul(a,b){
    let multiply = a*b;
    return multiply;
}

function div(a,b){
let division = a/b;
division = division.toFixed(2);
return division;
}


export default info;
export {add , Sub , mul , div };
