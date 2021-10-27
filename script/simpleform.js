const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input',function(){
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if(nameRegex.test(text.value)){
        textError.textContent="";
    }else{
        textError.textContent="Name is Incorrect";
    }
});
//UC 2 Email validation
const email = document.querySelector('#emailInput');
const emailError = document.querySelector('.email-error');
email.addEventListener('input',function(){
    //debugger;
    let emailRegex = RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$');
    if(emailRegex.test(email.value)){
        emailError.textContent="";
    }else{
        emailError.textContent="Email is Incorrect";
    }
});

//UC 3 phone validation
const phone = document.querySelector('#tel');
const errPhone = document.querySelector('.phone-error');
phone.addEventListener('input',function(){
    let phoneRegex = RegExp('^[1-9]{2}\\s[0-9]{10}$');
    if(phoneRegex.test(phone.value)){
        errPhone.textContent="";
    }else{
        errPhone.textContent="Phone number is incorrect";
    }
});

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function(){
    output.textContent = salary.value;
});