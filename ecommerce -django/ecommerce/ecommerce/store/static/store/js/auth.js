// auth.js
document.addEventListener("DOMContentLoaded", () => {
    const forms = document.querySelectorAll("form");
    forms.forEach((form) => {
        form.addEventListener("submit", (e) => {
            const inputs = form.querySelectorAll("input[type='text'], input[type='password'], input[type='email']");
            let isValid = true;

            inputs.forEach((input) => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = "red";
                } else {
                    input.style.borderColor = "#ddd";
                }
            });

            if (!isValid) {
                e.preventDefault();
                alert("Please fill out all fields correctly.");
            }
        });
    });
});
