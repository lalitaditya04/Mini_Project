// Function to validate the login form
function validateLoginForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Regular expression for email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum eight characters, at least one letter and one number

    // Simple validation for email and password
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (!passwordRegex.test(password)) {
        alert('Password must be minimum eight characters, at least one letter and one number.');
        return false;
    }
    return true;
}

// Add event listener to the login form
document.getElementById("login-form").addEventListener("submit", function(event) {
    // Prevent default form submission
    event.preventDefault();
    // Call the validateLoginForm function
    if (validateLoginForm()) {
        // If the form is valid, submit the form
        this.submit();
    }
});
