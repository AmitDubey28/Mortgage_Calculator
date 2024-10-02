// Function to compute the loan payment
function computeLoan() {
    const amount = document.querySelector('#amount').value; // P
    const annualInterestRate = document.querySelector('#interest_rate').value; // Annual Interest Rate
    const months = document.querySelector('#months').value; // n

    // Convert annual interest rate to monthly and into decimal form
    const monthlyInterestRate = (annualInterestRate / 100) / 12; // r

    // Calculate the monthly payment using the loan amortization formula
    const payment = (amount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, months)) / 
                    (Math.pow(1 + monthlyInterestRate, months) - 1);

    // Round to two decimal places and add commas for formatting
    const formattedPayment = payment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Display the result
    document.querySelector('#payment').innerHTML = `Monthly payment = ₹${formattedPayment}`;
}

// Function to reset the input fields and the result display
function resetFields() {
    document.querySelector('#amount').value = '';
    document.querySelector('#interest_rate').value = ''; // Resetting to default value
    document.querySelector('#months').value = ''; // Resetting to default value
    document.querySelector('#payment').innerHTML = ''; // Clear the payment display
}

// Adding event listeners to the buttons
document.querySelector('#calculateBtn').addEventListener('click', computeLoan);
document.querySelector('#resetBtn').addEventListener('click', resetFields);



