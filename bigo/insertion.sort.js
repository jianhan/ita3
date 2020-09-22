const insertionSort = arr => {

    for (let j = 1; j < arr.length; j++) {
        // define a key
        const key = arr[j]

        // initialize the element before key
        let i = j - 1;

        // compare backwards one at a time
        while (i >= 0 && arr[i] > key) {
            arr[i + 1] = arr[i]
            i--;
        }

        arr[i + 1] = key
    }

    return arr;
}

console.log(insertionSort([100, 22, 1, 23, 15]))
