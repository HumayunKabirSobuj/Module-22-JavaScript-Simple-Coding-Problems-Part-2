const phones = [
    { name: "samsung", price: 20000, camera: "12mp", color: "black" },
    { name: "xiomi", price: 25000, camera: "12mp", color: "black" },
    { name: "Vivo", price: 18000, camera: "12mp", color: "black" },
    { name: "walton", price: 15000, camera: "12mp", color: "black" },
    { name: "Infinix", price: 40000, camera: "12mp", color: "black" },
];

function getChepestPhone(phones) {
    let min = phones[0];
    for (const phone of phones) {
        if (phone.price < min.price) {
            min = phone;
        }
    }
    return min;
}

const cheap = getChepestPhone(phones);
console.log("The cheapest phone is : ", cheap);