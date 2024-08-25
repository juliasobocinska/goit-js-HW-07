const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", e => {
    e.preventDefault();
    const email = loginForm.elements.email.value.trim();
    const pswd = loginForm.elements.password.value.trim();
    
    if(email  === "" || pswd === "") {
        return alert("All form fields must be filled");
    }
    
    console.log(`Email: ${email}, Password: ${pswd}`);
    loginForm.reset();
});