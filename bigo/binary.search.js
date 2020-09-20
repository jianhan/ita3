const binarySearch = (target, arr) => {
    let [startIndex, endIndex] = [0, arr.length - 1];
    while (startIndex <= endIndex) {
        let middleIndex = Math.floor((startIndex + endIndex) / 2)
        if (arr[middleIndex] === target) {
            return 'found';
        }

        if (target > arr[middleIndex]) {
            startIndex = middleIndex + 1;
        }

        if (target < arr[middleIndex]) {
            endIndex = middleIndex - 1;
        }
    }

    return null;
}


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const found = binarySearch(9, arr)

console.log(found)