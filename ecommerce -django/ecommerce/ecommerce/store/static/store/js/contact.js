document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Display a confirmation message
    document.getElementById("confirmation").classList.remove("hidden");
    
    // Optionally, reset the form after submission
    event.target.reset();
});