var customer = {
    id: 1,
    name: "John Doe",

    order: {
        id: 100,
        amount: 99.99
    }
};

console.log(customer.name + "'s invoice total is $" + customer.order.amount);
console.log("Customer " + customer["id"] + "'s invoice total is $" + customer["order"]["amount"]);