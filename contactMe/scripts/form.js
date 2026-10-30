// Handle the Contact Me form submission

document.getElementById("contactForm").addEventListener("submit", function(e) {

    // Stop the page from reloading
    e.preventDefault();

    // Collect values from the form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;
    const website = document.getElementById("website").value;
    const age = document.getElementById("age").value;
    const dob = document.getElementById("dob").value;
    const time = document.getElementById("time").value;
    const color = document.getElementById("color").value;
    const range = document.getElementById("range").value;
    const topic = document.getElementById("topic").value;
    const message = document.getElementById("message").value;

    // Get the selected radio button
    const contactMethod =
        document.querySelector('input[name="contactMethod"]:checked').value;

    // Get all selected checkboxes
    const services =
        Array.from(
            document.querySelectorAll('input[name="service"]:checked')
        )
        .map(cb => cb.value)
        .join(", ") || "None";

    // Show the submitted form data
    alert(
        `--- CONTACT FORM DATA ---\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Password: ${password}\n` +
        `Phone: ${phone}\n` +
        `Website: ${website}\n` +
        `Age: ${age}\n` +
        `Date of Birth: ${dob}\n` +
        `Preferred Time: ${time}\n` +
        `Favorite Color: ${color}\n` +
        `Interest Level: ${range}\n` +
        `Contact Method: ${contactMethod}\n` +
        `Services Interested In: ${services}\n` +
        `Topic: ${topic}\n` +
        `Message: ${message}`
    );

    // Clear the form after submitting
    this.reset();

    document.getElementById("confirmationMessage").textContent =
    "Message sent successfully!";

});