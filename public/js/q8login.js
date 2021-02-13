const username=document.getElementById('username');
const password=document.getElementById('Password');
form.addEventListener('submit',(e) => {
   

    var c1=checkInputs();
    if(c1== 1)
    {
        e.preventDefault();
    }
    
});
function checkInputs()
{
    var c=0;
    const usernameValue=username.value.trim();
    const passwordValue=password.value.trim();
    if(usernameValue === '')
     {
        setErrorFor(username,'Username cannot be blank');
        c=1;
        
     }
     else if(!isUsername(usernameValue))
     {
        setErrorFor(username,'Username should not contain Special characters');
        c=1;
     }
     else{
        setSuccessFor(username);
     }
     if(passwordValue === '')
     {
        setErrorFor(password,'password cannot be blank');
        c=1;
     }
     else if(!isPassword(passwordValue))
     {
        setErrorFor(password,'password should contain minimum 8 characters and maximum 12 characters');
        c=1;
     }
     else{
        setSuccessFor(password);
     }
     return c;
     

}
function setErrorFor(input, message)
{
    const formControl= input.parentElement;
    const small= formControl.querySelector('small');

    small.innerText=message;
    formControl.className = 'form-control error';
}
function setSuccessFor(input){
    const formControl=input.parentElement;
    formControl.className = 'form-control success';
}
function isUsername(username)
{
    return /^[A-Za-z0-9 ]+$/.test(username);
}
function isPassword(password)
{
    return /^[A-Za-z0-9]\w{7,12}$/.test(password);
}