/* Sending results function via EmailJS */
function sendMail(contactForm) {
    emailjs.send("service_ecsqvze", "lindsay", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            document.getElementById('results_send').innerHTML = "message sent";
            return false;
        },
        function(error) {
            console.log("FAILED", error);
            alert ("Oops something happened. Try again later.")
        }   
    );
    return false;  // To block from loading a new page
}