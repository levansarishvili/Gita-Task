"use strict";

// Task 1 - შექმენით ერთ განზომილებიანი მასივი საიდანაც for ციკლის მეშვებოთ დაბეჭდავთ მასივში არსებულ ყველა ელემენტს:

// Solution 1
let clubs = ["AC Milan", "Juventus", "Inter", "Liverpool", "Arsenal", "Napoli"];

for (let club of clubs) {
  console.log(club);
}

// Solution 2
let cars = ["BMW", "Audi", "Ferrari", "Renault", "Toyota"];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

/* Task 2 - პრომპტით შეიყვანე ხელფასი რომელიც უდრის (salary) ამ salary ზე უნდა ადგეთ და
გაუკეთოთ if else კონსტრუქცია სადაც გავიგებთ ხელფასი კაია საშუალოა თუ გააგდე სახლიდან: 
*/

// Solution
let salary = +prompt("How much is your salary");

if (salary < 2000) {
  console.log(`Your salary ${salary}GEL is very low`);
} else if (salary >= 2000 && salary < 4000) {
  console.log(`Your salary ${salary}GEL is very good`);
} else {
  console.log(`Your salary ${salary}GEL is very high`);
}

// მოცემული მასივიდან [ 15,53,22,198,10,28,16,70,33,951 ] დაბეჭდეთ მხოლოდ კენტი რიცხვები:

// Solution
let num = [15, 53, 22, 198, 10, 28, 16, 70, 33, 951];

for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 === 0) {
    console.log(num[i]);
  }
}
