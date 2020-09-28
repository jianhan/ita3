

const largestSumLeft = (arr, low, mid) => {
    let leftSum = Number.MIN_SAFE_INTEGER;
    let i = mid;
    let sum = 0;
    let maxLeft = Number.MIN_SAFE_INTEGER;

    if (low === mid) {
        return [arr[low], low]
    }

    while (i >= low) {
        sum = sum + arr[i]
        if (sum > leftSum) {

            leftSum = sum
            maxLeft = i
        }

        i--;
    }

    return [leftSum, maxLeft]
}

const largestSumRight = (arr, mid, high) => {

    let rightSum = Number.MIN_SAFE_INTEGER;
    let sum = 0
    let i = mid;
    let maxRight = Number.MIN_SAFE_INTEGER;

    if (mid === high) {
        return [arr[mid], mid]
    }

    while (i <= high) {
        sum = sum + arr[i];
        if (sum > rightSum) {
            rightSum = sum;
            maxRight = i;
        }
        i++;
    }

    return [rightSum, maxRight];
}

const findMaxSumCrossMid = (arr, low, mid, high) => {
    const [leftSum, maxLeft] = largestSumLeft(arr, low, mid);
    const [rightSum, maxRight] = largestSumRight(arr, mid, high);
    return [leftSum + rightSum - arr[mid], maxLeft, maxRight]
}

// console.log(findMaxSumCrossMid([1, 2, 3, 4, -10, 20, -5, 5]))


// console.log(largestSumRight([1, 2, 3, 4, 5, -100]))

const splitArrayInHalf = arr => {
    const mid = Math.ceil(arr.length / 2)

    return [arr.slice(0, mid), arr.slice(mid, arr.length)]
}

// console.log("HALF OF 1234", splitArrayInHalf([1, 2, 3, 4]))

const solveMaxSubArray = (arr, low, high, meta = "root") => {

    console.log("INPUT META: ", meta, "ARR IS: ", arr, "LOW IS : ", low, " HIGH IS : ", high)
    if (low == high) {
        return [arr[low], low, high];
    }

    let mid = Math.floor((low + high) / 2);


    const [leftSum, leftStart, leftEnd] = solveMaxSubArray(arr, low, mid, "left");
    const [rightSum, rightStart, rightEnd] = solveMaxSubArray(arr, mid + 1, high, "right");
    const [crossSum, crossStart, crossEnd] = findMaxSumCrossMid(arr, low, mid, high);

    if (leftSum >= rightSum && leftSum >= crossSum) {
        return [leftSum, leftStart, leftEnd];
    }

    if (rightSum >= leftSum && rightSum >= crossSum) {
        return [rightSum, rightStart, rightEnd];
    }

    return [crossSum, crossStart, crossEnd];

}

const input = [-1, -2, -3, -4, -10];
// const input = [1, 2, 3, 4];

console.log(solveMaxSubArray(input, 0, input.length - 1))