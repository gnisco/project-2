function sendMail(contact_form) {
    emailjs.send("gmail", "contact_form", {
        "from_name": contact_form.name.value,
        "from_email": contact_form.emailaddress.value,
        "enquiry": contact_form.enquirysummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
}