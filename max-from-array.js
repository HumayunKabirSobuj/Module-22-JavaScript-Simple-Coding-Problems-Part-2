const height = [10, 15, 25, 20, 16, 35, 5, 12];
function getMax(numbers) {
    let max = numbers[0];
    for (const num of numbers) {
        if (num > max) {
            max = num;
        }

    }
    return max;
}
const max = getMax(height);
console.log("max value of the array is : ", max);