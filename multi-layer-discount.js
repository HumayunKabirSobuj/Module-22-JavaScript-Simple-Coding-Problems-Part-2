/*
objective:::\
1 to 100 price per pics==100
100 to 200 price per pics==90
above 200 price per pics== 70
*/

function layerDiscount(quantity){
    const first100Price=100;
    const second100Price=90;
    const above200price=70;
    if(quantity <= 100){
        const total =quantity*first100Price;
        return total;
    }
    else if(quantity <=200){
        const first100Total=100*first100Price;
        const remainingQueantity=quantity-100;
        const remainingTotal=remainingQueantity*90;
        const total=first100Total+remainingTotal;
        return total;
    }
    else{
        const first100Total=100*first100Price;
        const second100Total=100*second100Price;
        const remainingQueantity=quantity-200;
        const remainingTotal=remainingQueantity*above200price;
        const total=first100Total+second100Total+remainingTotal;
        return total;
    }

}
const quantity=layerDiscount(250);
console.log("to added discount total price is : ",quantity);