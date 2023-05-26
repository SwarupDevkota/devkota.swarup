const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault(); 
  const fullName = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;


  const signupData = {
    fullName,
    email,
    password,
  };

  console.log(signupData);
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

 
  const loginData = {
    email,
    password,
  };

  console.log(loginData);
});
