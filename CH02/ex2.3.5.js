/*
 * Referring back to the searching problem (see Exercise 2.1-3), observe that if the
 * sequence A is sorted, we can check the midpoint of the sequence against  and
 * eliminate half of the sequence from further consideration. The binary search algorithm repeats this procedure, halving the size of the remaining portion of the
 * sequence each time. Write pseudocode, either iterative or recursive, for binary
 * search. Argue that the worst-case running time of binary search is O(lgn)
 */

const binarySearch = (arr, target) => {
    // array already sorted
    let [startIndex, endIndex] = [0, arr.length]
    while (startIndex <= endIndex) {
        const middleIndex = Math.ceil(startIndex + endIndex / 2)
        if (arr[middleIndex] === target) {
            return true;
        }

        if (target > arr[middleIndex]) {
            startIndex = middleIndex + 1;
        }
        else {
            endIndex = middleIndex - 1;
        }
    }

    return false;
}

// worse case demo

// [1,2,3,4,5,6,7,8,9,10]
// [1,2,3,4,5] ,[6,7,8,9,10] 
// [1,2,3][4,5]