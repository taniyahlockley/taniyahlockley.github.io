//username expression for validation
let usernameExpression = /^[a-z0-9_]{4,12}$/;

//email expression for validation
let emailExpression = /^[^\s@]+@[^\s@]+\.(com|net|org|edu)$/;

//phone expression for validation
let phoneExpression = /^\(\d{3}\)-\d{3}-\d{4}$/;

//password expression for validation
let passwordExpression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{9,}$/;

function message(msg, field, color) {
    return "<p>" + msg + " <b style='color:" + color + "'>" + field + "</b></p>";
}

function validateForm() {
    //recieve info from the form
    let username = document.Info.username.value;
    let email = document.Info.email.value;
    let phone = document.Info.phone.value;
    let password = document.Info.password.value;
    let confirmPassword = document.Info.confirmPassword.value;
    let age = document.Info.age.value;

    let gender = document.Info.gender.value;
    let genderSelected = false;
    
    //check if gender is selected
    for (let i = 0; i < document.Info.gender.length; i++) {
        if (document.Info.gender[i].checked) {
            genderSelected = true;
            break;
        }
    }

    let html = "";
    let valid = true;
    let different = false;

    //validate username
    if (username === "") {
        html += message("Please enter", "Username", "red");
        valid = false;
    } else if (!usernameExpression.test(username)) {
        html += message("Invalid username format", "Username", "orange");
        valid = false;
    }
    
    //validate email
    if (email === "") {
        html += message("Please enter", "Email", "red");
        valid = false;
    } else if (!emailExpression.test(email)) {
        html += message("Invalid email format", "Email", "orange");
        valid = false;
    }

    //validate phone
    if (phone === "") {
        html += message("Please enter", "Phone number", "red");
        valid = false;
    } else if (!phoneExpression.test(phone)) {
        html += message("Invalid phone number format", "Phone number", "orange");
        valid = false;
    }

    //validate password
    if (password === "") {
        html += message("Please enter", "Password", "red");
        valid = false;
    } else if (!passwordExpression.test(password)) {
        html += message("Invalid password format", "Password", "orange");
        valid = false;
    }

    //validate confirm password
    if (confirmPassword === "") {
        html += message("Please enter", "Confirm Password", "red");
        valid = false;
    } else if (password !== confirmPassword && confirmPassword !== "") {
        different = true;
        html += message("Passwords do not match", "Confirm Password", "orange");
        valid = false;
    }

    //validate age
    if (age === "") {
        html += message("Please enter", "Age", "red");
        valid = false;
    }

    //validate gender
    if (!genderSelected) {
        html += message("Please select", "Gender", "red");
        valid = false;
    }

    if (valid) {
        html += message("Form submitted successfully!", "", "green");
    }
    document.getElementById("validation").innerHTML = html;

    if (different) {
        alert("Passwords do not match. Please re-enter your password.");
    }
}
    function clearErrors() {
        document.getElementById("validation").innerHTML = "";
    }