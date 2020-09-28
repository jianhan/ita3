// O(n2)
const bruteForceMaxSubArrayProblem = arr => {
    let maxSum = Number.MIN_SAFE_INTEGER;
    let [startIndex, endIndex] = [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]

    for (let i = 0; i < arr.length; i++) {
        const targetArr = [arr[i]];
        for (let j = i + 1; j < arr.length; j++) {
            if (i !== j) {
                targetArr.push(arr[j])
                const sum = sumArr(targetArr);
                if (sum > maxSum) {
                    maxSum = sum;
                    [startIndex, endIndex] = [i, j];
                }
            }
        }
    }

    return [startIndex, endIndex];

}

const sumArr = arr => arr.reduce((accumulated, current) => accumulated + current, 0)

console.log(bruteForceMaxSubArrayProblem([1, -200, 3, 4, -100, 5]))


