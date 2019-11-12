
     const passwordInput = document.querySelector("#InputPassword");
     const passwordInput2 = document.querySelector("#InputPassword2");
     const error = document.querySelector("#verifyInput");
     const form = document.querySelector("#form");
     const success = document.querySelector(".alert");

const  btn = document.querySelector('#btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    
    if(passwordInput.value === passwordInput2.value){

        success.classList.add('alert' ,'alert-success', 'my-3')
        success.innerHTML= 'You have successfully signed up'
        setTimeout(() => success.remove(), 3000);
    }else{
        error.classList.add('error')
        error.innerHTML= 'please confirm your password'
        setTimeout(() => error.remove(), 3000);
    }
})




