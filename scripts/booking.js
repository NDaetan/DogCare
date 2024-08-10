/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let dailyRate = 35;
let dayCounter = 0;
const days = document.querySelectorAll(".day-selector li");
const fullButton = document.getElementById("full");
const halfButton = document.getElementById("half");
const clearButton = document.getElementById("clear-button");
const calculatedCost = document.getElementById("calculated-cost");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

days.forEach(function(day) {
    day.addEventListener("click", function() {
        if (!day.classList.contains("clicked")) {
            day.classList.add("clicked");
            dayCounter++;
            updateCost();
        }
    });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener("click", function() {
    days.forEach(function(day) {
        day.classList.remove("clicked");
    });
    dayCounter = 0;
    updateCost(); 
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfButton.addEventListener("click", function() {
    dailyRate = 20;
    halfButton.classList.add("clicked");
    fullButton.classList.remove("clicked");
    updateCost();
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullButton.addEventListener("click", function() {
    dailyRate = 35;
    fullButton.classList.add("clicked");
    halfButton.classList.remove("clicked");
    updateCost();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function updateCost() {
    calculatedCost.innerHTML = dayCounter * dailyRate;
}