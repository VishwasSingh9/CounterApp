const countValue = document.querySelector('#counter');

function decrement() {
    // Get the value from UI
    let value = parseInt(countValue.innerText);
    // parseInt will convert the string value in integer value.

    // Update the value
    value = value - 1;

    // Set the value onto UI
    countValue.innerText = value;
};

function increment() {

    // Get the value from UI
    let value = parseInt(countValue.innerText);

    // Update the value
    value = value + 1;

    // Set the value onto UI
    countValue.innerText = value;
};