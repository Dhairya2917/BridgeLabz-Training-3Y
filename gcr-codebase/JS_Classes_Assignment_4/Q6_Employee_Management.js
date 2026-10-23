// Q6: Employee Management System (Classes + Object Methods)
class Employee {
  constructor(id, name, department, monthlySalary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.monthlySalary = monthlySalary;
  }

  getAnnualSalary() {
    return this.monthlySalary * 12;
  }

  applyBonus(percent) {
    if (percent < 0) throw new Error("Bonus cannot be negative.");
    this.monthlySalary += this.monthlySalary * (percent / 100);
  }
}

const employees = [
  new Employee(1, "Aarav", "IT", 50000),
  new Employee(2, "Meera", "HR", 42000),
  new Employee(3, "Kabir", "Finance", 60000),
  new Employee(4, "Anaya", "Marketing", 45000),
  new Employee(5, "Rohan", "IT", 55000)
];

employees[0].applyBonus(10);

employees.forEach(employee => {
  console.log(`${employee.name} (${employee.department}) - Annual salary: ₹${employee.getAnnualSalary().toFixed(2)}`);
});

const totalAnnualPayout = employees.reduce(
  (total, employee) => total + employee.getAnnualSalary(), 0
);
console.log(`Total annual company payout: ₹${totalAnnualPayout.toFixed(2)}`);
