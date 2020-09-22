const mergeSort = arr => {
    // if length is less than or equal to 1, return directly
    if (arr.length <= 1) {
        return arr
    }

    // split in half
    const [first, last] = splitArrayInHalf(arr)

    // merge sorted first half and second half
    return merge(mergeSort(first), mergeSort(last))
}

const merge = (first, last) => {
    const returnVal = [];
    let [firstIndex, lastIndex, firstLength, lastLength] = [0, 0, first.length, last.length]

    while (firstIndex < firstLength && lastIndex < lastLength) {
        if (first[firstIndex] > last[lastIndex]) {
            returnVal.push(last[lastIndex]);
            lastIndex++;
        }

        if (first[firstIndex] < last[lastIndex]) {
            returnVal.push(first[firstIndex]);
            firstIndex++;
        }

        if (first[firstIndex] == last[lastIndex]) {
            returnVal.push(first[firstIndex]);
            returnVal.push(last[lastIndex]);
            firstIndex++;
            lastIndex++;
        }
    }

    return returnVal.concat(first.slice(firstIndex)).concat(last.slice(lastIndex))
}

const splitArrayInHalf = arr => {
    const middleIndex = Math.ceil(arr.length / 2)
    return [arr.slice(0, middleIndex), arr.slice(middleIndex, arr.length)]
}

console.log(mergeSort([100, 10, 20, 30, 40, 15, 25, 35, 46]))



