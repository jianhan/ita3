
const selectionSort = arr => {
    // let smallestIndex = findSmallestNumber(arr.slice(0, arr.length))
    for (let i = 0; i < arr.length - 1; i++) { // c1 * n
        let smallest = Number.MAX_SAFE_INTEGER // c2 * n - 1
        let smallestIndex = 0;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < smallest) {
                smallest = arr[j];
                smallestIndex = i;
            }
        }

        if (smallestIndex > 0) {
            [arr[i], arr[smallestIndex]] = [arr[smallestIndex], arr[i]];
        }
    }
}

const arr = [5, 4, 3, 2, 1]

selectionSort(arr)
console.log(arr)