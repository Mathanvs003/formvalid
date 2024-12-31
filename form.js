const form=document.querySelector("#form");
const username=document.getElementById('name');
const email=document.getElementById('email');
const pass=document.getElementById("pass");
const cpass=document.getElementById("cpass");

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    validates();
    validates1();
    validates2();
    validates3();
})

function validates(){

    // alert(email.value);

    if(username.value.length==0){
      document.querySelector('.error').style.display='block'; 
    }
    else{
        var letters=/^[A-Za-z]+$/;
        if(!username.value.match(letters))
        {
            document.querySelector(".string").style.display="block";
            document.querySelector('.error').style.display='none'; 

        }
        else{
            document.querySelector(".string").style.display="none";
            document.querySelector('.error').style.display='none'; 

        }
    }
  
}

function validates1(){
    if(email.value.length==0){
        document.querySelector('.error1').style.display='block'; 
    }
    else{
        var letters='@gmail.com';
        if(!email.value.match(letters))
        {
            document.querySelector(".mail").style.display="block";
            document.querySelector('.error1').style.display='none'; 
        }
        else{
            document.querySelector(".mail").style.display="none";
            document.querySelector('.error1').style.display='none'; 
        }
    }
}

function validates2(){
    if(pass.value.length==0){
        document.querySelector('.error2').style.display='block'; 
     }
     else{
         if(pass.value.length<8)
         {
             document.querySelector(".pass1").style.display="block";
             document.querySelector('.error2').style.display='none'; 
         }
         else{
             document.querySelector(".pass1").style.display="none";
             document.querySelector('.error2').style.display='none'; 
         }
       }
}

function validates3(){
    if(cpass.value.length==0){
        document.querySelector('.error3').style.display='block'; 
     }
     else{
         if(cpass.value.match(pass.value))
         {
             document.querySelector(".pass2").style.display="none";
             document.querySelector('.error3').style.display='none'; 
             window.location.href="https://mathanvs003.github.io/xbi4clone/";
             document.getElementById("form").reset();
         }
         else{
             document.querySelector(".pass2").style.display="block";
             document.querySelector('.error3').style.display='none'; 
            }
         }
        }
