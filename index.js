// // The initial numbers that must be verified.
// const n1 = 10;
// const n2 = 15;
// const n3 = 20;
// const n4 = 5;

// // Check one: add up to 50
// // This is a fairly simple operation using
// // arithmetic operators and a comparison.
// const isSum50 = (n1 + n2 + n3 + n4) == 50;

// // Check two: at least two odd numbers
// // Here, we use modulus to check if something is odd.
// // Since % 2 is 0 if even and 1 if odd, we can use
// // arithmetic to count the total number of odd numbers.
// const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// // Check three: no number larger than 25
// // This time, we use the OR operator to check
// // if ANY of the numbers is larger than 25.
// const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// // Check four: all unique numbers
// // This is long, and there are more efficient
// // ways of handling it with other data structures
// // that we will review later.
// const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// // Here, we put the results into a single variable
// // for convenience. Note how we negate isOver25 using
// // the ! operator. We could also have tested for
// // "isUnder25" as an alternative.
// const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// // Finally, log the results.
// console.log(isValid);

// // Here's another example of how this COULD be done,
// // but it SHOULD NOT be done this way. As programmers,
// // we break things into small, manageable pieces so that
// // they can be better understood, scaled, and maintained.
// const dontDoThis = ((n1 + n2 + n3 + n4) == 50) &&
//   ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) &&
//   !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) &&
//   (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);
//******************************************************************************/

//Assignment:
//PART 1:

//The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;
const isSum50 = n1 + n2 + n3 + n4 == 50;
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Check five: all numbers divisible by 5
const isDivisibleBy5 =
  n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0;

// Combine all checks
// const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique && isDivisibleBy5;

// console.log(isValid);

// Check six: first number larger than the last
const isFirstLargerThanLast = n1 > n4;

// Combine all checks
const isValid =
  isSum50 &&
  isTwoOdd &&
  !isOver25 &&
  isUnique &&
  isDivisibleBy5 &&
  isFirstLargerThanLast;

console.log(isValid);

// Step 1: Subtract the first number from the second number
const step1Result = n2 - n1;

// Step 2: Multiply the result by the third number
const step2Result = step1Result * n3;

// Step 3: Find the remainder of dividing the result by the fourth number
const finalResult = step2Result % n4;

console.log(finalResult);

//PART 2:
//Calculate the fuel needed for the entire trip at each speed.
// Determine the cost of fuel for the entire trip at each speed.
// Calculate the time taken for the trip at each speed.
// Compare the results and determine which speed makes the most sense for the trip.

//// Constants
const totalDistance = 1500; // miles
const fuelBudget = 175; // $
const averageFuelCost = 3; // $ per gallon

// Fuel efficiency at different speeds
const fuelEfficiency = {
  55: 30, // miles per gallon
  60: 28,
  75: 23,
};

// Function to calculate fuel needed for the entire trip
function calculateFuelNeeded(speed) {
  return totalDistance / fuelEfficiency[speed];
}

// Function to calculate fuel expense for the entire trip
function calculateFuelExpense(speed) {
  const fuelNeeded = calculateFuelNeeded(speed);
  return fuelNeeded * averageFuelCost;
}

// Function to calculate time taken for the trip
function calculateTripTime(speed) {
  return totalDistance / speed;
}

// Calculate results for each speed
const speeds = [55, 60, 75];
speeds.forEach((speed) => {
  const fuelNeeded = calculateFuelNeeded(speed);
  const fuelExpense = calculateFuelExpense(speed);
  const tripTime = calculateTripTime(speed);

  console.log(`Speed: ${speed} mph`);
  console.log(`Fuel Needed: ${fuelNeeded.toFixed(2)} gallons`);
  console.log(`Fuel Expense: $${fuelExpense.toFixed(2)}`);
  console.log(`Trip Time: ${tripTime.toFixed(2)} hours`);

  const budgetEnough = fuelExpense <= fuelBudget;
  console.log(`Is the budget enough: ${budgetEnough ? "Yes" : "No"}`);
});
