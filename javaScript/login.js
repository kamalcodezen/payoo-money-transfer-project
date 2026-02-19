const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", function () {

    // number input access with value
    const inputNumber = document.getElementById("input-number");
    let number = inputNumber.value.trim();
    // console.log(number);

    // pin input access with value
    const inputPin = document.getElementById("input-pin");
    let pin = inputPin.value.trim();
    // console.log(pin);

    // check the number & pin (true :: go the next   page  || false :: return login failed);
    if (!number || !pin) {
        alert("Please fill all fields");
        return;
    }
    if (number === "1234567890" && pin === "1234") {
        alert("login Success");
        inputNumber.value = "";
        inputPin.value = "";
        window.location.assign("/home.html");
        return;
    } else {
        alert("oops login failed");
        inputPin.value = "";
        return;
    }

});