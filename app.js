var signup = document.querySelector('.signup');
var login = document.querySelector('.login');
var require = document.querySelector('.require');
var repeatPassword = document.querySelector('.repeat-password')
var showPassword = document.querySelector('.show');
var inputPassword = document.querySelector('.inputpassword');
var inputRepeatPassword = document.querySelector('.inputrepeatpassword');
var loginBtn = document.querySelector('.btn');
var x = 0;
    signup.addEventListener("click", function(){
        login.classList.remove("shows");
        signup.classList.remove("hide");
        login.classList.add("hide");
        signup.classList.add("shows");
        require.innerHTML = "Enter your personal details to create an acount";
        repeatPassword.classList.add("showrepeatpassword");
        showPassword.classList.add('hidepassword');
        inputPassword.type = "password";
        loginBtn.innerHTML = "Sign up";
        x = 1;
        
    });

    login.addEventListener("click", function(){
        login.classList.remove("hide");
        signup.classList.remove("shows");
        signup.classList.add("hide");
        login.classList.add("shows");
        require.innerHTML = "Enter your email and password to sign in";
        repeatPassword.classList.remove("showrepeatpassword");
        showPassword.classList.remove('hidepassword');
        loginBtn.innerHTML = "Login";
        x = 0;
    });

    showPassword.addEventListener("click", function(){
        if(inputPassword.type === "password")
        {
            inputPassword.type = "text";
            showPassword.innerHTML = "Hide";
        }else{
            inputPassword.type = "password";
            showPassword.innerHTML = "Show";
            
        }
    });


    loginBtn.addEventListener('click', function(){
        if(x == 0){
            return;
        }else{
            if(inputPassword.value == inputRepeatPassword.value)
            {
                return;
            }else{
                alert('The repeat password does not match');
            }

        }

    });


