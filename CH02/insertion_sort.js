const insertionSort = (arr) => {
    for (let j = 1; j < arr.length; j++) {
        const key = arr[j];

        let i = j - 1;
        while (i >= 0 && arr[i] > key) {
            arr[i + 1] = arr[i]
            i--;
        }

        arr[i + 1] = key
    }
}

const arr = [5, 4, 3, 2, 1];
const test = insertionSort(arr)
console.log(arr)