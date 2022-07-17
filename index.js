let billInput = document.getElementById("bill_input");
let numOfPeopleInput = document.querySelector("#people_input");
let tipPerPerson = document.getElementById("tipAmount");
let totalPerPerson = document.getElementById("totalAmount");
let tipPersent = document.querySelectorAll(".percent_number");
let tipCustom = document.getElementById("last_button");
let resetButton = document.getElementById("resetBtn");

billInput.addEventListener("input", billInputFunction);
numOfPeopleInput.addEventListener("input", numOfPeopleInputFunction);
tipPersent.forEach(function(element) {

    element.addEventListener('click' , handleclick);
});
tipCustom.addEventListener('input', tipInputFunction);
resetButton.addEventListener('click', reset);



billInput.value= '0';
numOfPeopleInput.value = '0';
tipPerPerson.innerHTML= "$"+(0.00).toFixed(2);
totalPerPerson.innerHTML= "$"+(0.00).toFixed(2);

let billValue = 0;
let peopleValue = 1;
let tipValue = 0.15;

function billInputFunction(){
billValue= parseFloat(billInput.value);
calculatetips();
}
function numOfPeopleInputFunction(){
    peopleValue= parseFloat(numOfPeopleInput.value);
    calculatetips();
}
function tipInputFunction(){
    tipValue=parseFloat(tipCustom.value/100);
    calculatetips();
}

function handleclick(nika){
    tipValue=parseFloat(nika.target.innerHTML)/100;
    calculatetips();
}
function calculatetips(){
    if(peopleValue>=1){
       let tipAmounts = (billValue * tipValue)/peopleValue;
       let totals = (billValue + tipAmounts)/peopleValue;
       tipPerPerson.innerHTML= "$" + tipAmounts.toFixed(2);
       totalPerPerson.innerHTML= "$" + totals.toFixed(2);
    }
}
function reset(){
    billInput.value= '0';
    billInputFunction()
    numOfPeopleInput.value = '0';
    numOfPeopleInputFunction()
    tipCustom.value = ""
}







let errorText = document.querySelector(".error_text");

numOfPeopleInput.addEventListener("input", (event)=>{
    let numOfPeople = event.target.value
    if(numOfPeople<=0){
        numOfPeopleInput.classList.add("errorInput");
        
        errorText.classList.remove("hidden");

    } else{
        numOfPeopleInput.classList.remove("errorInput");
        errorText.classList.add("hidden");
    }
    
})

