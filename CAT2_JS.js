//password validation

function check_password()
{
    var password=document.getElementById("password");
    var error1 = document.getElementById("error1");
    var error2 = document.getElementById("error2");
    var error3 = document.getElementById("error3");

        error1.style.color = "red";
        error1.innerHTML = "Minimum 8 characters";
        error2.style.color = "red";
        error2.innerHTML = "Minimum 3 characters with 1 lower and 1 uppercase character";
        error3.style.color = "red";
        error3.innerHTML = "Minimum 3 characters with 1 number and 1 special character";

        if(/^(.){8,20}$/.test(password.value.trim()))
        {
            error1.style.color = "green";
            error1.innerHTML = "Minimum 8 characters";
        }

        if((password.value.trim().match(/[A-Z]/)) && (password.value.trim().match(/[a-z]/)))
        {
            error2.style.color = "green";
            error2.innerHTML = "Minimum 3 characters with 1 lower and 1 uppercase character";
        }

        if((password.value.trim().match(/[0-9]/)) && (password.value.trim().match(/[\W]/)))
        {
            error3.style.color = "green";
            error3.innerHTML = "Minimum 3 characters with 1 number and 1 special character";
        }

}

//Form fields validation

function invalid_name(event)
    {
        let code=event.which;
        if(code>47 && code<58)
            return false;
        else
            return true;
    }
    
    function validate()
    {
       var username=document.getElementById("name");
       var email=document.getElementById("email");
       var password=document.getElementById("password");
       var address=document.getElementById("address");
       var age=document.getElementById("age");

       const regpass=/^([a-z]+)([A-Z]+)([0-9]+)([a-zA-Z0-9~`!@#\$%\^&\*\(\)-_\+={}\[\]|\;:"<>,.\/?]+)([a-z]+)$/;

       const regemail=/([a-zA-Z0-9\.-]+)@([a-zA-Z]{0,4})\.christuniversity.in$/;
 
       if(username.value.trim()=="")
       {
           alert("Blank Username");
           username.style.border="solid 3px red";
           document.getElementById("erruser").style.visibility="visible";
           return false;
       }
       else{
            username.style.border="solid 5px green";
       }
      
       if(password.value.trim()=="")
       {
           alert("Blank Password");
           password.style.border="solid 3px red";
           return false;
       }
       else if(password.value.trim().length<8)
       {
           alert("Password is too short");
           password.style.border="solid 3px red";
           return false;
       }

       if(!regpass.test(password.value))
        {
            alert("INVALID Password- PassWord should contain minimum of 1 lower case letter [a-z], 1 upper case letter [A-Z] ,1 numeric character [0-9] and 1 special character: ~`!@#$%^&*()-_+={}[]|:<>,./?These character must be EMBEDDED somewhere in the middle lowercase letters");
            password.style.border="solid 3px red";
            return false;
        }
        else{
            password.style.border="solid 5px green";
        }

        if(!regemail.test(email.value))
        {
            alert("Invalid Email ID");
            email.style.border="solid 3px red";
            document.getElementById("lbemail").style.visibility="visible";
            return false;            
        }
        else{
            email.style.border="solid 5px green";
        }

        var number=document.getElementById("phone");
        const regnum=/^[0-9]{10}$/;

        if(!regnum.test(number.value))
           {
                alert("Invalid Phone Number");
                return false;
            }   

        if(address.value.trim()=="")
       {
           alert("Blank Address");
           address.style.border="solid 3px red";
           return false;
       }
       else{
            address.style.border="solid 5px green";
       }

       if(age.value < 0)
       {
            alert("INVALID Age");
            age.style.border="solid 3px red";
            return false;
       }
       else{
            age.style.border="solid 5px green";
        }


        alert("Form Submitted Successfully");
    }


    //cookies, sessions and local storage

    function setCookies()
       {
           username=document.getElementById("username").value;
           document.cookie="username="+username+";expires=Mon,11 April 2022 06:30:15 UTC;";
           email=document.getElementById("email").value;
           document.cookie="email="+email+";expires=Mon,11 April 2022 06:30:15 UTC;";

           phone=document.getElementById("phone").value;
           localStorage.setItem("email=",email);
           localStorage.setItem("phone number=",phone);

           phone=document.getElementById("phone").value;
           sessionStorage.setItem("phone=",phone);
           issue=document.getElementById("issue").value;
           sessionStorage.setItem("issue=",issue);
       }