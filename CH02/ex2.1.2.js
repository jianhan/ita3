const insertionSortDesc = arr => {
    for (j = 1; j < arr.length; j++) {
        const key = arr[j]
        let i = j - 1;

        while (i >= 0 && arr[i] < key) {
            arr[i + 1] = arr[i];
            i--;
        }

        arr[i + 1] = key;
    }
}

const input = [111, 222, 19, 23, 90, 2, 5]

insertionSortDesc(input)
console.log(input)
