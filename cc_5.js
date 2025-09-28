// Coding Challenge 05

let employees = [
    {name: 'James Bond', hourlyRate: 75, hoursWorked: 35},
    {name: 'Bob Dylan', hourlyRate: 40, hoursWorked: 20},
    {name: 'Paul Tall', hourlyRate: 90, hoursWorked: 92},
    {name: 'Ranbir Kapoor', hourlyRate: 15, hoursWorked: 67}
];

function calculateBasePay(rate, hours) {
    let baseHours = Math.max(0, Math.min(hours, 40));
    return rate*baseHours;
}

function calculateOvertimePay(rate, hours) {
    let overtimeWorked = Math.max(0, hours - 40);
    return overtimeWorked*rate*1.5;
}

function calculateTaxes(grossPay) {
    const taxRate = 0.15;
    return grossPay*(1-taxRate);
}

function processPayroll(employee) {
    let basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    let overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    let grossPay = basePay + overtimePay;
    let netPay = calculateTaxes(grossPay);
    return {
        name: employee.name,
        basePay: basePay,
        overtimePay: overtimePay,
        grossPay: grossPay,
        netPay: netPay
    };  

}


let payrollObject = employees.map(processPayroll);

for (let p of payrollObject) {
    console.log(
        `Name: ${p.name}
        Base Pay: $${p.basePay}
        Overtime Pay: $${p.overtimePay}
        Gross Pay: $${p.grossPay}
        Net Pay: $${p.netPay}`

    );
}