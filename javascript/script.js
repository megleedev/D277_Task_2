// Assigns variables to email related labels
document.addEventListener('DOMContentLoaded', function() {
    let emailInput = document.getElementById('emailAddress');
    let emailConfirmInput = document.getElementById('emailConfirm');
    let emailMatchMessage = document.getElementById('emailMatchError');

    // Hides the email mismatch error message on load
    emailMatchMessage.classList.add('hidden');

    // Checks the input for both email fields to determine if they match
    emailConfirmInput.addEventListener('input', function() {
        if (emailConfirmInput.value.includes('.com') && emailInput.value !== emailConfirmInput.value) {
            emailMatchMessage.classList.remove('hidden');
        }

        else {
            emailMatchMessage.classList.add('hidden');
        }
    });
});