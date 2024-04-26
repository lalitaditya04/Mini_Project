// Function to validate the product registration form
function validateRegistrationForm() {
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zip = document.getElementById("zip").value;
    var modelName = document.getElementById("model-name").value;
    var modelId = document.getElementById("model-id").value;
    var purchasedFrom = document.getElementById("purchased-from").value;
    var purchaseDate = document.getElementById("purchase-date").value;

    // Regular expressions for validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phoneRegex = /^\+\d{2} \d{10}$/;
    var zipRegex = /^\d{6}$/;
    var modelIdRegex = /^\d{8}$/;
    var nameRegex = /^[a-zA-Z]+$/;
    var addressRegex = /^[a-zA-Z0-9\s,.'-]+$/;
    var modelNameRegex = /^[a-zA-Z0-9\s-]+$/;

    // Validation for all fields
    if (!nameRegex.test(firstName)) {
        alert("Please enter a valid first name.");
        return false;
    }
    if (!nameRegex.test(lastName)) {
        alert("Please enter a valid last name.");
        return false;
    }
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (!phoneRegex.test(phone)) {
        alert("Please enter a valid phone number in the format (+00) 000-0000 or (+00)0000000000.");
        return false;
    }
    if (!addressRegex.test(address)) {
        alert("Please enter a valid address.");
        return false;
    }
    if (!nameRegex.test(city)) {
        alert("Please enter a valid city.");
        return false;
    }
    if (!nameRegex.test(state)) {
        alert("Please enter a valid state/province.");
        return false;
    }
    if (!zipRegex.test(zip)) {
        alert("Please enter a valid 6-digit postal/zip code.");
        return false;
    }
    if (!modelNameRegex.test(modelName)) {
        alert("Please enter a valid model name.");
        return false;
    }
    if (!modelIdRegex.test(modelId)) {
        alert("Please enter a valid 8-digit model ID.");
        return false;
    }
    return true;
}

// Add event listener to the registration form
document.getElementById("registration-form").addEventListener("submit", function(event) {
    // Prevent default form submission
    event.preventDefault();
    if (validateRegistrationForm()) {
        // If the form is valid, submit the form
        this.submit();
        // Optional: Show success message or redirect to a thank you page
        alert("Product registered successfully!");
        // Optional: Reset the form fields
        this.reset();
    }
});