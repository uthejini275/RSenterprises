// JavaScript for interactive elements

// Show an alert when the page loads
window.onload = function() {
 
};

// Function to validate contact form (for contact.html)
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields!");
        return false; // Prevent form submission
    }


    
    alert("Form submitted successfully!");
    return true;
}
