$(document).ready(function () {
  $(".navbar .nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        700,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

// navbar toggle
$("#nav-toggle").click(function () {
  $(this).toggleClass("is-active");
  $("ul.nav").toggleClass("show");
});

function sendMail() {
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

 

  emailjs
    .send("service_1rchdu6", "template_dl445wb", parms)
    .then(alert("Email sent successfully!"))
    .catch(function (error) {
      alert("Failed to send email. Please try again later.");
      console.error("Email sending failed:", error);
    });
}
document
  .querySelector(".contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    sendMail();
  });


  
