function validateEmail(){
    let email = document.getElementById("email");
    let emailError=document.getElementById("emailerror")    
    let regexemail = /(^[\w\D\S]{4,20})\@([\w\D\S]{2,20})\.([a-z]{1,3})$/i;
    
      if (regexemail.test(email.value)==true) {
         emailError.innerHTML= "Valid Format"
         emailError.style.color='green'
         return true
      }
      else{
       emailError.innerHTML="Invalid format for Email ID"
       emailError.style.color='red'
       return false
      }
 
 }

 function validatePassword(){
    let password=document.getElementById("password");
    let pwdError=document.getElementById("pwderror")
    let regexpwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;       
     if (regexpwd.test(password.value)==true) {
         pwdError.innerHTML="Valid Format"
         pwdError.style.color='green'
         return true
      }
      else{
       pwdError.innerHTML="Invalid format:Password must contain minimum 8 characters, atleast one uppercase, one lowercase and one number"
       pwdError.style.color='red'
       return false
      }
    }

function validateForm(){
  
        if (validateEmail() && validatePassword()){
           return true
        }
     
        else{
           return false
        }
     }
 