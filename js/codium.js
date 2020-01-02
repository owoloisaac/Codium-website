
     const passwordInput = document.querySelector("#InputPassword");
     const passwordInput2 = document.querySelector("#InputPassword2");
     const error = document.querySelector("#verifyInput");
     const form = document.querySelector("#form");
     const success = document.querySelector(".alert");

const  btn = document.querySelector('#btn');

btn.addEventListener('click', (e) => {
  e.preventDefault();
    
   if(passwordInput.value.length === 0){
        error.classList.add('error')
        error.innerHTML= 'please input your password'
        setTimeout(() => error.remove(), 3000);
    }else if(passwordInput2.value.length === 0){
        error.classList.add('error')
        error.innerHTML= 'please confirm your password'
        setTimeout(() => error.remove(), 3000);
    }else if(passwordInput.value != passwordInput2.value){
        error.classList.add('error')
        error.innerHTML= 'please confirm your password'
        setTimeout(() => error.remove(), 3000);
    }
    else{
        success.classList.add('alert')
        success.classList.add('alert-success')
        success.innerHTML= 'Thank you for signing into Codium!'
        setTimeout(() => success.remove(), 3000);
    }
})




