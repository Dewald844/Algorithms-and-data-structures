// Euclidean method is used to compute the Greatest common devisor

const greatest_common_devisor = (a, b) => {
    let x = a;
    let y = b;

    for (let i = 0; i <= (x + y); i++){
        if (a == b){
            break;
        }
        if ( a > b ){
            a = a - b;
        }else{
            b = b - a;
        }
    }

    return a;
}

let expected = 21;

let actual = greatest_common_devisor(252, 105);

console.log((expected == actual) ? "Passed" : "Failed");
