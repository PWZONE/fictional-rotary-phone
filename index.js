// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
    // Get the button element by its ID
    const alertButton = document.getElementById('alertButton');

    // Add a click event listener to the button
    alertButton.addEventListener('click', () => {
        // Display an alert message when the button is clicked
        alert('Hello from PatooWorld AI Agent!');
    });
});
