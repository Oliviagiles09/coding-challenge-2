// Task 1
let prices = [10, 20, 30, 40, 50];
prices.push(70);
prices.shift();

consol.log("Updated prices", prices);

// Task 2
let orders = [200, 300, 400, 500, 600];
orders[2] += 5;
let totalOrders = orders.reduce((sum, order) => sum + order, 0);

consol.log("Updated Orders:", orders);
consol.log("Total Order Count:", totalOrders);

// Task 3 
let employee = {
  name: "Natalie",
  role: "Software Engineer",
  preformanceScore: 86,
  isActive: true
};

employee.performanceScore = 96;
employee.promotionEligible = true;

consol.log("Updated employee: ", employee);

// Task 4
let feedbacks = [
  {customerName: "Emma", feedbackText: "Good service", raiting: 4},
  {customerName: "Hailey", feedbackText: "Bad service", raiting: 1},
{customerName: "Ari", feedbackText: "Amazing!!", raiting: 5}
];

 feedback.push({customerName: "Amy", feedbackText: "Great service", raiting: 5});

consol.log("Updated feedbacks: ", feedbacks);

//Task 5
let inventory = {
  itemName: "Picture Frame",
  stockCount: 150,
  price: 10.99,
calculateTotalValue: function() {
  return this.stockCount * this.price;
}
};

consol.log(inventory);
consol.log("Total innventory value: ", inventory.calculateTotalValue());
