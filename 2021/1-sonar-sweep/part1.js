const fs = require('fs');

const inputFile = 'input.txt';

function readInputArray(file) {
    return fs.readFileSync(file).toString().split("\n").map(it => parseInt(it, 10));
}

function countIncreasingDepths(depths) {
    if (depths.length < 2) {
        return 0;
    }

    console.log(depths[0], '(N/A - no previous measurement)')

    let countOfIncreasingDepths = 0;
    for (let i = 1; i < depths.length; i++) {
        const currentDepth = depths[i];
        const previousDepth = depths[i-1];
        const depthDifference = currentDepth - previousDepth;
        if (depthDifference > 0) {
            console.log(currentDepth, '(increased)')
            countOfIncreasingDepths += 1
        } else if (depthDifference < 0) {
            console.log(currentDepth, '(decreased)')
        } else {
            console.log(currentDepth, '(no change)')
        }
    }
    return countOfIncreasingDepths;
}

function main() {
    const inputArray = readInputArray(inputFile);
    console.log('How many measurements are larger than the previous measurement?');
    console.log('Solution:', countIncreasingDepths(inputArray));
}

main();
