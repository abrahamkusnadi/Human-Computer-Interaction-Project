function validationForm(){
    let name = document.getElementById("name-data").value
    let email = document.getElementById("email-data").value
    let password = document.getElementById("password-data").value
    let confirm = document.getElementById("conf-password-data").value
    let dob = document.getElementById("dob-data").value
    let checkbox = document.getElementById("agreement").checked


    let name_check = false
    let email_check = false
    let password_check = false
    let confirm_check = false
    let dob_check = false
    let checkbox_check = false
    
    //nama must be more than 5 characters
    if(name.length < 5){
        document.getElementById("error-name").innerHTML = "Name must be more than 5 characters"
    }else{
        document.getElementById("error-name").innerHTML = ""
        name_check = true
    }

    //email must ends with @gmail.com
    if(!email.endsWith("@gmail.com")){
        document.getElementById("error-email").innerHTML = "Email must ends with @gmail.com"
    }else{
        document.getElementById("error-email").innerHTML = ""
        email_check = true
    }

    //password must be alphanumeric
    if(!alphanumeric(password)){
        document.getElementById("error-password").innerHTML = "Password must be alphanumeric"
    }else{
        document.getElementById("error-password").innerHTML = ""
        password_check = true
    }

    if(confirm != password){
        document.getElementById("error-conf-password").innerHTML = "Confirm password must be the same as the passoword"
    }else{
        document.getElementById("error-conf-password").innerHTML = ""
        confirm_check = true
    }

    //dob < current date
    if(new Date(dob) < new Date()){
        document.getElementById("error-dob").innerHTML = "DOB must be exceed the current date"
    }else{
        document.getElementById("error-dob").innerHTML = ""
        dob_check = true
    }

    //validate the check box
    if(!checkbox){
        alert("You must agree the EULA")
    }else{
        checkbox_check = true
        if(name_check == true && email_check == true && password_check == true && confirm_check == true && dob_check == true && checkbox_check == true){
            alert("You have successfully created your account")
            window.location.href = "Home.html";
        }else{
            alert("You must filled out all of datas")
        }
    }

}

function alphanumeric(password){
    let isAlpha = false
    let isNumeric = false
    for(let i = 0 ; i < password.length ; i++){
        if(isNaN(password[i]) == true){
            isAlpha = true
        }else{
            isNumeric = true
        }
    }

    if(isAlpha == true && isNumeric == true){
        return true
    }else{
        return false
    }
}