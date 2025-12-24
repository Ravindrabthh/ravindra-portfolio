document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", async (e) => {
        e.preventDefault(); // Prevents page reload

        const formData = new FormData(form); // Collects form data

        try {
            const response = await fetch("submit.php", { // PHP file to handle form
                method: "POST",
                body: formData
            });

            const resultText = await response.text(); // Get PHP response
            alert(resultText); // Show success/error message
            form.reset(); // Clear the form
        } catch (error) {
            alert("Error submitting form: " + error);
        }
    });
});
