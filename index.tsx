type Pizza = {
    name: string;
    price: number;
}

type Order = {
    id: number;
    pizza: Pizza;
    status: "ordered" | "completed"; // Ensure status matches the defined literals
}

const menu: Pizza[] = [
    { name: "Chicken", price: 100 },
    { name: "Paneer", price: 90 },
    { name: "Mushroom", price: 80 },
    { name: "Veg", price: 60 },
]

let cashInRegister = 1000;
let orderQueue: Order[] = [];
let nextOrderId = 1;

function addNewPizza(pizzaObj: Pizza) {
    menu.push(pizzaObj);
}

function placeOrder(pizzaName: string) {
    const selectedPizza = menu.find(i => i.name === pizzaName);
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist`);
        return;
    }
    cashInRegister -= selectedPizza.price; // Deducting price from cash in register

    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" };
    orderQueue.push(newOrder);
    return newOrder;
}

function completeOrder(orderId: number) {
    const order = orderQueue.find(order => order.id === orderId);
    if (!order) {
        console.error(`Order with ID ${orderId} does not exist`);
        return;
    }
    order.status = "completed"; // Ensure status matches defined literals
    return order;
}

addNewPizza({ name: "Chicken", price: 100 });
addNewPizza({ name: "Paneer Pizza", price: 130 });

placeOrder("Chicken BBQ");
completeOrder(1);

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);
