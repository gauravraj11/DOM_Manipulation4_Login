const form = document.getElementById("loginForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const loginData = { email, password };
  console.log(loginData);
  

  fetch("http://localhost:9000", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(loginData)
  })
    .then((res) => res.json())
    .then(data => {
      if (data.token) {
        msg.innerText = "Login Successful!";
        msg.style.color = "green";
      } else {
        msg.innerText = "Invalid Credentials";
        msg.style.color = "red";
      }
    })
    .catch(err => {
      msg.innerText = "Server Error";
      msg.style.color = "red";
    });
});
