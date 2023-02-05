function validateName(){
    let name = document.getElementById("name");
    let nameError=document.getElementById("nameerror")    
    let regexName = /^[a-z A-Z]{4,10}$/i;
    
      if (regexName.test(name.value)==true) {
         nameError.innerHTML= "Valid Format"
         nameError.style.color='green'
         return true
      }
      else{
       nameError.innerHTML="Invalid format:Enter alphabets alone"
       nameError.style.color='red'
       return false
      }
 
 }
 
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
 
 function validatePhone(){
    let phoneNo=document.getElementById("phone");
    let phoneError=document.getElementById("phoneerror") 
    let regexphone = /^\d{3}[\s\-\.]?\d{3}[\s\-\.]?\d{4}$/;
 
      if (regexphone.test(phoneNo.value)) {
         phoneError.innerHTML="Valid Format"
         phoneError.style.color='green'
         return true
      }
      else{
       phoneError.innerHTML=  "Invalid format:Enter numbers alone and number of digits should be 10"
       phoneError.style.color='red'
       return false
      }
 
 }
 
 function validatePassword(){
    let password=document.getElementById("password");
    let pwdError=document.getElementById("pwderror")
    let regexpwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    let regexpwd1 =  /(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.*[0-9])(?=.{8,})/;       
     if (regexpwd.test(password.value)==true) {
         pwdError.innerHTML="Valid Format"
         pwdError.style.color='green'
         return true
      }
      else if(regexpwd1.test(password.value)==true) {
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

   function PasswordStrength(){
    let password=document.getElementById("password");
    let regexpwdstrong = /(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.*[0-9])(?=.{12,})/;
    let regexpwdmedium = /(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.*[0-9])(?=.{8,})/;
    let regexpwdweak = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/; 

    if (regexpwdstrong.test(password.value)==true) {
      passwordstrength.innerHTML="Password Strength:Strong"
      passwordstrength.style.color='green'
      return true
   }
   else if(regexpwdmedium.test(password.value)==true){
    passwordstrength.innerHTML="Password Strength:Medium"
    passwordstrength.style.color='Orange'
      return true
   }
   else if(regexpwdweak.test(password.value)==true){
    passwordstrength.innerHTML="Password Strength:Weak"
    passwordstrength.style.color='Red'
      return true
   }

   }
 
 function validateForm(){
   
    if (validateName() && validateEmail() && validatePhone() && validatePassword()){
       return true
    }
 
    else{
       return false
    }
 }
 
 
  