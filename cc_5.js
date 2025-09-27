// Coding Challenge 05

let employees = [
    {name: 'James Bond', hourlyRate: 75, hoursWorked: 35},
    {name: 'Bob Dylan', hourlyRate: 40, hoursWorked: 20},
    {name: 'Paul Tall', hourlyRate: 90, hoursWorked: 92},
    {name: 'Ranbir Kapoor', hourlyRate: 15, hoursWorked: 67}
];

function calculateBasePay(rate, hours) {
    let baseHours = (0, hours, 40);
    return rate*baseHours;
}