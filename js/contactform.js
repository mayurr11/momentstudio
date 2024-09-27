document.getElementById("contact-form").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form submission

    var submitButton = document.getElementById("submit");

    // Disable the button and show loading text
    submitButton.disabled = true;
    submitButton.innerHTML = "<span>Sending...</span>";

    // Collect form data
    const formData = new FormData(this);

    try {
        // Send form data to Web3Forms
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const result = await response.json();

        if (response.ok && result.success) {
            // Redirect to custom success page
            window.location.href = "/thank-you/";
        } else {
            throw new Error(result.message || "Failed to submit form.");
        }
    } catch (error) {
        // Re-enable button and show error message
        submitButton.disabled = false;
        submitButton.innerHTML = "Send Messages";
        alert("There was an error: " + error.message);
    }
});