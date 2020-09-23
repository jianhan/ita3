const recursiveInsertionSort = arr => {
    if (arr.length === 1) {
        return arr;
    }

    const subArr = arr.slice(0, arr.length - 1);
    const lastElement = arr[arr.length - 1];

    const result = insertIntoSorted(recursiveInsertionSort(subArr), lastElement)

    return result;
}


const insertIntoSorted = (sortedArr, element) => {
    if (sortedArr.length === 1) {
        return sortedArr[0] >= element ? [element, sortedArr[0]] : [sortedArr[0], element];
    }

    if (element <= sortedArr[0]) {
        return [element, ...sortedArr];
    }

    if (element >= sortedArr[sortedArr.length - 1]) {

        return [...sortedArr, element];
    }

    let index = 0;
    while (index < sortedArr.length) {
        if (element <= sortedArr[index]) {
            return [element, ...arr]
        }
        else if (element >= sortedArr[index] && element < sortedArr[index + 1]) {
            return [...sortedArr.slice(0, index + 1), element, ...sortedArr.slice(index + 1, sortedArr.length)]
        }

        index++;
    }
}


// console.log(insertIntoSorted([4, 5], 3))
console.log(recursiveInsertionSort([5, 4, 3, 2, 100, 1000, -100]))