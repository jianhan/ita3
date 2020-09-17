const insertionSort = (arr) => {
    for (let j = 1; j < arr.length; j++) {
        const key = arr[j]; // l3: j == 3, key == 5, arr = [2, 12, 33, 5]

        let i = j - 1; // l3: i = 2
        while (i >= 0 && arr[i] > key) {
            arr[i + 1] = arr[i]
            i--;
        }

        arr[i + 1] = key // arr[1] = 12
    }
}

const arr = [2, 12, 33, 5];
const test = insertionSort(arr)
console.log(arr)