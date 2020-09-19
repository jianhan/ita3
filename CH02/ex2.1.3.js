const linearSearch = (target, arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (target === arr[i]) {
            return i;
        }
    }

    return null;
}

const target = 123;

const input = [1, 2, 3, 4, 5, 121];

console.log(linearSearch(target, input))