// var myName;
// var myTotal = 140;
// var store;
// var store2;
// var text;
// var text2;
//  myName = prompt();
//  text = myName.slice(0,141);
//  text2 = text.length;
//  store = myName.length;
//  store2 = myTotal - store;
//  alert("You type " + store + " characters " + store2 + " characters left.");

// var name;
// var firstLetter;
// var firstLetterUpperCase;
// var afterLetter;
// var afterLetterLowerCase;
// name = prompt("What is your name");
// firstLetter = name.slice(0,1);
// afterLetter = name.slice(1,name.length);
// afterLetterLowerCase = afterLetter.toLowerCase();
// firstLetterUpperCase = firstLetter.toUpperCase();
// alert("Hello " + firstLetterUpperCase + afterLetterLowerCase);

// var dogAge = prompt("What is your dog age.")
// var humanAge = ((dogAge - 2)* 4) + 21;
// alert("Your dog age = " + dogAge + ", Human = " + humanAge + " years old.");

// var bottlesOfMilk = prompt("Enter your money to buy a bottles of milk");
// var amountBottlesOfMilk = Math.floor(calMilk(bottlesOfMilk));

// alert("This is your amount of bottles of milk " + amountBottlesOfMilk);

// function calMilk(money) {
//     var amount;
//     amount = money/1.5;
//     return amount;
// }

// function lifeInWeeks(age) {

// /************Don't change the code above************/    
// var ninetyDays = 90 * 365;
// var ninetyWeeks = 90 * 52;
// var ninetyMonth = 90 * 12;
// var calDays = age * 365;
// var calWeeks = age * 52;    
// var calMonth = age * 12;
// console.log("You have " + (ninetyDays - calDays) + " days, " + (ninetyWeeks - calWeeks) + " weeks, and " + (ninetyMonth - calMonth) + " months left.")
// /*************Don't change the code below**********/
// }
// lifeInWeeks(56);
/* function bmiCalculate(weight, height) {
    var bmi = weight / (height * height);
    return Math.floor(bmi);
} */
/* var weight = prompt("Enter your name");
var height = prompt("Enter your lovers"); */
console.log("This is your percent of love " + loverCalculator() + "%");

function loverCalculator() {
    var n = Math.random();
    n = n * 100;
    return Math.floor(n);
}

function bmiCalculate(weight, height) {
    var bmi = weight / (height * height);
    bmi = Math.floor(bmi);
    if (bmi < 18.5) {
        return ("Your BMI is " + bmi + ", so you are underweight.");
    } else if ((bmi >= 18.5) && (bmi <= 24.9)) {
        return ("Your BMI is " + bmi + ", so you have a normal weight.");
    } else {
        return ("Your BMI is " + bmi + ", so you are overweight.");
    }
}