// Finding a element inside of an Array and returning the index of the matching element

const linear_search = (arr, elem) => {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == elem) {
            return i;
        }
    }
    return false;
}

let testArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 17 ];

let expected = 4;
let actual = linear_search(testArr, 5);

console.log((expected == actual) ? "Passed" : "Failed");