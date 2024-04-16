const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');

password.addEventListener('input', () => {
    if (password.value != confirmPassword.value) {
        password.setCustomValidity('Passwords do not match');
        confirmPassword.setCustomValidity('Passwords do not match');
    } else {
        password.setCustomValidity('');
        confirmPassword.setCustomValidity('');
    }
});

confirmPassword.addEventListener('input', () => {
    if (password.value != confirmPassword.value) {
        password.setCustomValidity('Passwords do not match');
        confirmPassword.setCustomValidity('Passwords do not match');
    } else {
        password.setCustomValidity('');
        confirmPassword.setCustomValidity('');
    }
});

function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    const jsonString = JSON.stringify(formProps, null, 2);

    // Create a new Blob object containing the JSON data
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    // Open the new JSON data in a new browser tab
    window.open(url, '_blank');
}
