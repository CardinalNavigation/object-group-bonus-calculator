// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ', employees);


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! 
// Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test 
// to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

//how do we calculate an employee bonus?
// whats the function?
// starting small!
// // atticus's info:
// {
//   name: 'Atticus',
//   employeeNumber: '2405',
//   annualSalary: '47000',
//   reviewRating: 3
// },

// this has two components
// what is the rating
// what is the bonus calculation (did they earn it?)
// for atticus, his rating is 3 so his bonus is 4% of 47,000.00 
// the total would be $1,880.00

// This function will calculate 1 employee's bonus!


function calculateIndividualEmployeeBonus(staffName) {
  // your logic here
  for (let aEmployee of employees) {

    console.log(aEmployee.name);

    let bonusPercentage = 0;
    let totalBonus = aEmployee.annualSalary * bonusPercentage;
    let totalCompensation = aEmployee.annualSalary + totalBonus;
    for (i = 0; i < aEmployee.length; i++) {

      if (aEmployee.name === staffName && aEmployee.reviewRating === 3) {
        bonusPercentage = 0.04;
      }
    }
    console.log(totalCompensation);
    console.log(totalBonus);
  }

  // return new object with bonus results
}

console.log(calculateIndividualEmployeeBonus("Atticus"));
// console.log(calculateIndividualEmployeeBonus("Atticus"));

  // employees[0]
  // console.log(employees[0]);

  // if (employees.name === "atticus" && employees.reviewRating === 3) {
  //   return employees.annualSalary *= 0.04

  // }

// we need to run the function with just atticus first to see if it works

// employee.name= atticus
// review rating= 3
// then {}