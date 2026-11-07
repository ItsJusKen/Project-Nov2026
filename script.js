const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const fullname = document.getElementById("fullname");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  let valid = true;

  if (fullname.value.trim() === "") {
    valid = false;
    fullname.style.border = "2px solid red";
  } else {
    fullname.style.border = "";
  }

  if (email.value.trim() === "" || !email.checkValidity()) {
    valid = false;
    email.style.border = "2px solid red";
  } else {
    email.style.border = "";
  }

  if (subject.value.trim() === "") {
    valid = false;
    subject.style.border = "2px solid red";
  } else {
    subject.style.border = "";
  }

  if (message.value.trim() === "") {
    valid = false;
    message.style.border = "2px solid red";
  } else {
    message.style.border = "";
  }

  if (valid) {
    alert("Form submitted successfully!");
    form.submit(); 
  }
});

