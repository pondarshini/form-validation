const form = document.querySelector('#form')
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword= document.querySelector('#cpassword');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validInputs();
})
function validInputs(){
    const usernameval = username.value.trim()
    const emailval = email.value.trim()
    const passwordval= password.value.trim()
    const cpasswordval= cpassword.value.trim()


    if(usernameval==''){
        seterror(username,'user name is required')
    }
    else{
        setsucess(username)
    }
    if(emailval==''){
        seterror(email,'email is required')
    }
    else{
        setsucess(email);
    }
    if(passwordval==''){
        seterror(password,'password is required')
    }
    else if(passwordval.length<8){
        seterror(password,"password must be atleat 8 charecters")
    }
    else{
        setsucess(password)
    }
    if(cpasswordval==''){
        seterror(cpassword,"confirm password is required")
    }
    else if(cpasswordval!=passwordval){
        seterror(cpassword,"password does not match")
    }
    else{
        setsucess(cpassword)
    }
}
function seterror(element,message){
    const inputgroup = element.parentElement;
    const errorelement = inputgroup.querySelector('.error');
    errorelement.innerText = message;
    inputgroup.classList.add('error');
    inputgroup.classList.remove('sucess');

}
function setsucess(element){
    const inputgroup = element.parentElement;
    const errorelement = inputgroup.querySelector('.error');
    inputgroup.classList.add('sucess');
    inputgroup.classList.remove('error');

}

