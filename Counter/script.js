
let count = 0;

const countDisplay = document.getElementById('display');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');

function updateDisplay() {
    countDisplay.value = count;
}

function Increment() {
    count += 1;
    updateDisplay();
}

function Decrement() {
    if(count>0)
    count--;
    updateDisplay();
}

function Reset() {
    count = 0;
    updateDisplay();
}

incrementBtn.addEventListener('click', Increment);
decrementBtn.addEventListener('click', Decrement);
resetBtn.addEventListener('click', Reset);
