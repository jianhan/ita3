# What is Big O Notation
Big O is a notation for measuring the complexity of an algorithm by time and space.
- How to measure: `growth rate`
- What to measure: `time` and `space`
- Time: number of steps
- Space: extra memory consumed

# Measurement
|O|Complexity|Rate of growth|
|--- |--- |--- |
|O(1)|constant|fast|
|O(log n)|logarithmic||
|O(n)|linear time||
|O(n * log n)|log linear||
|O(n^2)|quadratic||
|O(n^3)|cubic||
|O(2^n)|exponential||
|O(n!)|factorial|slow|

O(log n): how many number 2s multiply together to get to n, classic example is binary search. If in algorithm we see a pattern the N was divided in 2
in each iteration, then it is a O (log n) 


# Cheat Sheet
- https://www.bigocheatsheet.com/
- https://cooervo.github.io/Algorithms-DataStructures-BigONotation/