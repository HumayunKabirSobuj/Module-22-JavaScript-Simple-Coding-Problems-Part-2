const phonePrice = [10000, 15000, 25000, 20000, 16000, 35000, 5000, 12000];
function cheapPhonePrice(numbers){
    let min=numbers[0];
    for(const number of numbers){
        if(number<min){
            min=number;
        }
    }
    return min;
}
const cheap=cheapPhonePrice(phonePrice);
console.log("Cheapest Price Phone Is : ",cheap);
