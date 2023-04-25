const billInput = document.querySelector(".price")
const tipCustom = document.querySelector(".custom");
const peopleInput = document.querySelector(".people");
const tipAmount = document.getElementById("tipAmount");
const totalAmount = document.getElementById("totalAmount");
const tips = document.querySelectorAll(".btn");
const resetBtn = document.querySelector(".resetButton");
const error = document.querySelector(".error");


billInput.addEventListener("input", billInputFun);
peopleInput.addEventListener("input", peopleInputFun);

tips.forEach(function (val){
    val.addEventListener("click", handleClick);
});

tipCustom.addEventListener("input", tipInputFun);
resetBtn.addEventListener("click", reset);

let billValue = 0.0;
let peopleValue = 0.0;
let tipValue = 0.0;


function billInputFun(){
    billValue = parseFloat(billInput.value);
    calculateTip();
}

function peopleInputFun(){    
    peopleValue = parseFloat(peopleInput.value);

        if (peopleValue < 1) {
            error.style.display = "flex";
            peopleInput.style.border = "2px solid #E17052";
        } else {
            error.style.display = "none";
            peopleInput.style.border = "none";
            calculateTip();
        }
}

function tipInputFun(){
    tipValue = parseFloat(tipCustom.value / 100);
    tips.forEach(function(val) {
        val.classList.remove("active-tip");
    })
    calculateTip();
}


function handleClick(event){
        tips.forEach(function(val){
        val.classList.remove("active-tip");
        if(event.target.innerHTML == val.innerHTML){
            val.classList.add("active-tip");
            tipValue = parseFloat(val.innerHTML) / 100;
        }
    });
    calculateTip();
}

function calculateTip() {
    if (peopleValue >= 1) {
        let tipPrice = (billValue * tipValue) / peopleValue;
        let total = (billValue / peopleValue) + tipPrice;
        tipAmount.innerHTML = "$" + tipPrice.toFixed(2);
        totalAmount.innerHTML = "$" + total.toFixed(2);        
    }
}

function reset () {
    billInput.value = "";
    billInputFun();
    tipAmount.innerHTML = "$" + (0.00).toFixed(2);
    totalAmount.innerHTML = "$" + (0.00).toFixed(2);
    peopleInput.value = "";
    peopleInputFun();
    tipCustom.value = "";
}