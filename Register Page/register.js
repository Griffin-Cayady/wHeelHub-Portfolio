function validateData(){
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var confirm = document.getElementById("confirm");
    var male = document.getElementById("gender-man");
    var female = document.getElementById("gender-women");
    var dob = document.getElementById("date");
    var agreement = document.getElementById("checkbox");

    if (username.value.length<8){
        alert("Username length must be at least 8 characters");
    } else if (!email.value.endsWith("@gmail.com")){
        alert("Email must end with @gmail.com");
    } else if (!checkAlphaNum(password.value)){
        alert("Password must be alphanumeric");
    } else if (confirm.value!=password.value){
        alert("Confirm password must be same as password");
    } else if (!male.checked&&!female.checked){
        alert("Gender must be selected");
    } else if (dob.value === ""){
        alert("Date of Birth must be selected");
    } else if (!agreement.checked){
        alert("Agreement must be check");
    } else {
        alert("Success registration");
    }
}

function checkAlphaNum(password){
    var isAlpha = false;
    var isNum = false;
    for (let i = 0; i < password.length; i++) {
        if(isNaN(password[i])){
            isAlpha = true;
        } else {
            isNum = true;
        } 
        
        if (isAlpha&&isNum){
            return true;
        }
    }
    return false;
}