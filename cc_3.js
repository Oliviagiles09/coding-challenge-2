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
