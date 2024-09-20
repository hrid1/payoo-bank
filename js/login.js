console.log("Login info");

const loginBtn = document.querySelector("#login-btn");

loginBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const phoneNumber = document.getElementById("phone-num").value;
  const pin = document.getElementById("pin-num").value;

  console.log(phoneNumber, pin);

  if (phoneNumber == 5 && pin == 1234) {
    console.log("welcome");
    window.location.href = "home.html";
  } else {
    alert("Wrong Credinsial !!");
  }
});
