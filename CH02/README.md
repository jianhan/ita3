# Insertion Sort Analyzing

## Input Size Can Be Defined As Following:
It depends on the problem we trying to solve, but in general they can be categorized as following:
- Number of items for input parameters
- Total number of bits
- Two numbers depended on data structure we passed in. For instance, if the input to an algorithm is a graph, the input size can be described by the numbers of vertices and
edges in the graph
We shall indicate which input size measure is being used with each problem we study

## Running Time of Algorithm
The running time of an algorithm on a particular input is the number of primitive operations or “steps” executed. Assume that every line of code was executed
will consume a constant "c" 


## Execution Time Analyzing
Following will illustrate how long the algorithm will actually take, just a rough calculation. Comments below shows how many executions/steps
for each line during the entire lifecycle of the algorithm
```javascript
const insertionSort = arr => {
    for (let j = 1; j < arr.length; j++) { // c1 * (arr.length)
        const key = arr[j]; // c2 * (arr.length - 1)
        let i = j - 1; // c3 * (arr.length - 1)
        while (i >= 0 && arr[i] > key) { // best case : 1. worse case: c5 * (arr.length * ((1 + arr.length) / 2) - 1)
            arr[i + 1] = arr[i] // best case : 0. worse case: c6 * (arr.length * ((1 + arr.length) / 2))
            i--; // best case : 0, worse case: c7 * (arr.length * ((1 + arr.length) / 2))
        }

        arr[i + 1] = key; // c4 * (arr.length - 1)
    }
}
```
Assuming `n = arr.length`
Best case the total number of execution cost as following:
```javascript
c1 * n + c2 * (n - 1) + c3 * (n - 1) + 1 + c4 * (n - 1) =
c1 * n + c2 * n - c2 + c3 * n - c3 + 1 + c4 * n - c4 = 
(c1 + c2 + c3 + c4) * n - (c2 + c3 + c4) + 1
// Finally if we replace / simplify all the constants, we get following
a * n + b
```

Worse case the total number of execution cost as following:
```javascript
c1 * n + c2 * (n - 1) + c3 * (n - 1) + 1 + c5 * (n * ((1 + n) / 2) - 1) + c6 * (n * ((1 + n) / 2)) + c7 * (n * ((1 + n) / 2)) + c4 * (n - 1) =
(c1 + c2 + c3 + c4) * n - (c2 + c3 + c4) + 1 + c6 * ((n + n*n) / 2 - 1)  + c7 * ((n + n*n) / 2) = 
(c1 + c2 + c3 + c4) * n - (c2 + c3 + c4) + 1 + c6 * (1/2) * n + c6 * (1/2) * n * n + c7 * (1/2) * n + c7 * (1/2) * n * n + c5 * (1/2) * n + c5 * (1/2) * n * n = 
(c1 + c2 + c3 + c4) * n - (c2 + c3 + c4) + 1 + (c6 * (1/2) + c7 * (1/2) + c5 * (1/2)) * n * n  + () * n = 

(c1 + c2 + c3 + c4 + c6 * (1/2) + c7 * (1/2) + c5 * (1/2)) * n + (c6 * (1/2) + c7 * (1/2) + c5 * (1/2)) * n * n - (c2 + c3 + c4) + 1 = 
// Finally if we replace / simplify all the constants, we get following
a * n + b * (n * n) + c // this is the key
```

### Analyzing Results
- Best Case : O (n)
- Worse Case : O (n2) or O(n * n)