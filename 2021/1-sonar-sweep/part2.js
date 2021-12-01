const fs = require('fs');

const inputFile = 'input.txt';

function readInputArray(file) {
    return fs.readFileSync(file).toString().split("\n").map(it => parseInt(it, 10));
}

function countIncreasingDepthsBySlidingWindow(depths) {
    if (depths.length < 4) {
        return 0;
    }

    console.log(depths[0], '(N/A - no previous measurement)')

    let countOfIncreasingDepths = 0;
    for (let i = 3; i < depths.length; i++) {
        const windowIndex = i - 3
        const currentWindowSum = depths[i] + depths[i-1] + depths[i-2];
        const previousWindowSum = depths[i-1] + depths[i-2] + depths[i-3];
        const depthDifference = currentWindowSum - previousWindowSum;
        if (depthDifference > 0) {
            console.log(`${windowIndex}:`, currentWindowSum, '(increased)')
            countOfIncreasingDepths += 1
        } else if (depthDifference < 0) {
            console.log(`${windowIndex}:`, currentWindowSum, '(decreased)')
        } else {
            console.log(`${windowIndex}:`, '(no change)')
        }
    }
    return countOfIncreasingDepths;
}

function main() {
    const inputArray = readInputArray(inputFile);
    console.log('How many sums are larger than the previous sum?');
    console.log('Solution:', countIncreasingDepthsBySlidingWindow(inputArray));
}

main();
