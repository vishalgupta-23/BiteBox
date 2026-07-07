function login(){
    let email =document.getElementById("email").value;
    let password =document.getElementById("password").value;
    let error =document.getElementById("error");
    if(email ==="admin@gmail.com" && password === "1234")
    {
        localStorage.setItem("isLoggedIn","true");
        localStorage.setItem("user",email);

        //Redirected
         window.location.href = "index.html";

    }

    else{

    error.innerText="Invalid email or password";
    
    }

}

function togglePassword(){
    let passwordInput = document.getElementById("password");

    if(passwordInput.type === "password")
    {
        passwordInput.type="text";
        

    }
    else{
        passwordInput.type="password";
    }

}

