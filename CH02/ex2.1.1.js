const insertionSort = arr => {
    for (let j = 1; j < arr.length; j++) {
        const key = arr[j];
        let i = j - 1;
        while (i >= 0 && arr[i] > key) {
            arr[i + 1] = arr[i]
            i--;
        }

        arr[i + 1] = key;
    }
}

const arr = [31, 41, 59, 26, 41, 58];

insertionSort(arr)

console.log(arr)

// [31, 41, 59, 26, 41, 58] loop 1, key is 41
// [31, 41, 59, 26, 41, 58] loop 2, key is 59
// [31, 41, 59, 26, 41, 58] ->  loop 3, key is 26
// [25, 31, 41, 59, 41, 58] ->  loop 4, key is 41
// [25, 31, 41, 41, 59, 58] ->  loop 5, key is 58
// [25, 31, 41, 41, 58, 59] ->  loop 5, key is 58