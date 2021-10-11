// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Nav hamburgerburger selections

// const burger = document.querySelector("#burger-menu");
// const ul = document.querySelector("nav ul");
// const nav = document.querySelector("nav");

// burger.addEventListener("click", () => {
//   ul.classList.toggle("show");
// });

// // Close hamburger menu when a link is clicked

// // Select nav links
// const navLink = document.querySelectorAll(".nav-link");

// navLink.forEach((link) =>
//   link.addEventListener("click", () => {
//     ul.classList.remove("show");
//   })
// );

function sendmail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name == "" || email == "" || message == "") {
    alert("Please enter valid input");
    return;
  }

  var Body =
    "Name: " + name + "<br>Email: " + email + "<br>Message: " + message;
  //console.log(name, phone, email, message);
  Email.send({
    SecureToken: "fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
    To: "satyamgupta.er@gmail.com",
    From: "satyamgupta.er@gmail.com",
    Subject: "New message on contact from " + name,
    Body: Body,
  }).then((message) => {
    //console.log (message);
    if (message == "OK") {
      alert("Congratulations..!! We have received your enquiry request.");
    } else {
      console.error(message);
      alert("There is error at sending message. ");
    }
  });
}
