
const selectionSort = arr => {
    // let smallestIndex = findSmallestNumber(arr.slice(0, arr.length))
    for (let i = 0; i < arr.length - 1; i++) {
        const smallestIndex = findSmallestNumber(i, arr)
        if (smallestIndex > 0) {
            [arr[i], arr[smallestIndex]] = [arr[smallestIndex], arr[i]];
        }
    }
}

const findSmallestNumber = (start, arr) => {

    let smallest = Number.MAX_SAFE_INTEGER
    let smallestIndex = 0;
    for (let i = start; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }

    return smallestIndex;
}

const arr = [5, 4, 3, 2, 1]

selectionSort(arr)
console.log(arr)