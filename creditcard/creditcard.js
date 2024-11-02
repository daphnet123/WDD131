document.querySelector('.credit-card-form').addEventListener('submit', function(event) {
    const cardNumber = document.getElementById('card-number').value;
    const cardHolder = document.getElementById('card-holder').value;
    const cvv = document.getElementById('cvv').value;

    if (cardNumber.length < 16) {
        alert("Please enter a valid 16-digit card number.");
        event.preventDefault();
    } else if (cardHolder.trim() === '') {
        alert("Please enter the card holder's name.");
        event.preventDefault();
    } else if (cvv.length < 3) {
        alert("Please enter a valid 3-digit CVV.");
        event.preventDefault();
    }
});
