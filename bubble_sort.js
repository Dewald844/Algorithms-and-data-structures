// Step 1 : Create a swop function

const swap_elements = (arr, i, j) => {
    let x = arr[j];
    arr[j] = arr[i];
    arr[i] = x;
    return arr;
}