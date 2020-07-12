function addition() {
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    reg = /[0-9]+$/;
    if (reg.test(a) && reg.test(b)) {
        a = parseInt(a);
        b = parseInt(b);
        document.getElementById("res").value = (a + b);
    }
    else {
        document.getElementById("res").value = "Invalid Input";
    }
}
function subtraction() {
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    reg = /[0-9]+$/;
    if (reg.test(a) && reg.test(b)) {
        a = parseInt(a);
        b = parseInt(b);
        document.getElementById("res").value = (a - b);
    }
    else {
        document.getElementById("res").value = "Invalid Input";
    }
}
function multiplication() {
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    reg = /[0-9]+$/;
    if (reg.test(a) && reg.test(b)) {
        a = parseInt(a);
        b = parseInt(b);
        document.getElementById("res").value = (a * b);
    }
    else {
        document.getElementById("res").value = "Invalid Input";
    }
}
function division() {
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    reg = /[0-9]+$/;
    if (reg.test(a) && reg.test(b)) {
        a = parseInt(a);
        b = parseInt(b);
        document.getElementById("res").value = (a / b);
    }
    else {
        document.getElementById("res").value = "Invalid Input";
    }
}
function validate() {
    var email = document.getElementById("email");
    var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email.value) == true) {
        email.style.background = "#bada55";
    }
    if (reg.test(email.value) == false) {
        email.style.background = "#ff7f50";
    }
}