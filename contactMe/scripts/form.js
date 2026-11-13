// Handle the Contact Me form submission

document.getElementById("contactForm").addEventListener("submit", function(e) {

    // Prevent the page from reloading
    e.preventDefault();


    // Collect all form field values

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


    // Get the selected contact method

    const contactMethod =
        document.querySelector('input[name="contactMethod"]:checked').value;


    // Get all selected services

    const services =
        Array.from(
            document.querySelectorAll('input[name="service"]:checked')
        )
        .map(cb => cb.value)
        .join(", ") || "None";


    // Create an array containing each field and its submitted value

    const formData = [
        ["Name", name],
        ["Email", email],
        ["Password", password],
        ["Phone", phone],
        ["Website", website],
        ["Age", age],
        ["Date of Birth", dob],
        ["Preferred Time", time],
        ["Favorite Color", color],
        ["Interest Level", range],
        ["Contact Method", contactMethod],
        ["Services Interested In", services],
        ["Topic", topic],
        ["Message", message]
    ];


    // Find the results container and table body

    const resultContainer =
        document.getElementById("resultContainer");

    const resultBody =
        document.querySelector("#resultTable tbody");


    // Clear any previous table entries

    resultBody.innerHTML = "";


    // Make the results section visible

    resultContainer.style.display = "block";


    // Create a new table row for each submitted field

    formData.forEach(([key, value]) => {

        const row = document.createElement("tr");

        row.innerHTML =
            `<td>${key}</td><td>${value}</td>`;

        resultBody.appendChild(row);

    });


    // Reset the form after submission

    this.reset();


    // Keep the Lab Echo extra-credit confirmation message

    document.getElementById("confirmationMessage").textContent =
        "Message sent successfully!";

});