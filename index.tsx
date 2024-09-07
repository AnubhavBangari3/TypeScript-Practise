const menu = [
    {name:"Chicken",price:100},
    {name:"Paneer",price:90},
    {name:"Mushroom",price:80},
    {name:"Veg",price:60},
]

let cashInRegister = 1000
let orderQueue=[];
const nextOrderId=1;

function addNewPizza(pizzaObj){
    menu.push(menu);
}

function placeOrder(pizzaName){
    const selectedPizza=menu.find(i => i.name === pizzaName);
    if (!selectedPizza){
        console.error(`${pizzaName} does not exists`);
        return;
    }
    cashInRegister+=selectedPizza.price;

    const newOrder={id:nextOrderId++,pizza: selectedPizza,status:"Ordered"};
    orderQueue.push(newOrder);
    return newOrder;
}

function completeOrder(orderId){
const order=orderQueue.find(order => order.id === orderId);
order.status="completed";
return order;
}

addNewPizza({name:"Chicken BBQ",cost:112});
addNewPizza({name:"Paneer Pizza",cost:130});

placeOrder("Chicken BBQ");
completeOrder("1");

console.log("Menu:",menu);
console.log("Cash in register:",cashInRegister);
console.log("Order queue:",orderQueue)