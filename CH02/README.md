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
Assumption
```javascript
const insertionSort = arr => {
    for (let j = 1; j < arr.length; j++) {
        const key = arr[j];
        let i = j - 1;
        while (i >= 0 && arr[i] > key) {
            arr[i + 1] = arr[i]
            i--;
        }

        arr[i + 1] = key;
    }
}
```