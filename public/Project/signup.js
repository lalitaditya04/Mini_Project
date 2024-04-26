// Function to validate the signup form
// Function to validate the signup form using regex
function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    // Regular expressions for email and password validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    var usernameRegex = /^[a-zA-Z][a-zA-Z0-9_-]{2,19}$/;

    // Simple validation for username, email, password, and confirmPassword
    if (username.trim() === "") {
        alert("Please enter a username.");
        return false;
    }
    if (!usernameRegex.test(username)) {
        alert("Please enter a valid username (3-20 characters, alphanumeric, underscores and hyphens allowed, must start with a letter).");
        return false;
    }
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (!passwordRegex.test(password)) {
        alert("Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one digit.");
        return false;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    return true;
}


// Add event listener to the signup form
document.getElementById("signup-form").addEventListener("submit", function(event) {
    // Prevent default form submission
    event.preventDefault();
    // Call the validateForm function
    if (validateForm()) {
        // If the form is valid, submit the form
        this.submit();
    }
});



