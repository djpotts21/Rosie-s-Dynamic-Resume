function sendMail(contactForm) {
    emailjs.init("p6r8MY_sIvZDKjVLd");
    emailjs.send("gmail", "rosie", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response)
            document.getElementById("myForm").reset();
            document.getElementById("formresponse").innerHTML = `<h3>Form submitted sucessfully</h3>`;
        },
        function(error) {
            console.log("ERROR", error)
            document.getElementById("formresponse").innerHTML = `<h3>Error, please try again</h3><p>Error Details:<br>${error.text}`;
        }
    )
    return false;
}