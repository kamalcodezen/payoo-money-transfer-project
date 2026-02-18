

document.getElementById("cashout-btn")
    .addEventListener("click", function () {
        //agent number access and validation
        let accountNumberInput = document.getElementById("agent-number");
        let accountNumber = accountNumberInput.value.trim();
        if (accountNumber.length !== 11 || !/^\d+$/.test(accountNumber)) {
            alert("Invalid agent Number");
            return;
        }

        // amount access and validation
        let amountNumberInput = document.getElementById("cashout-amount");
        let amountNumber = Number(amountNumberInput.value);
        if (isNaN(amountNumber) || amountNumber <= 0) {
            alert("Wrong Amount Number");
            return;
        }

        // currentBalance access and validation
        let currentBalanceElement = document.getElementById("balance");
        let newBalance = Number(currentBalanceElement.innerText);

        // calculate balance 
        let balance = newBalance - amountNumber;
        if (balance < 0) {
            alert("Invalid Amount");
            return;
        }

        // pin access and validation
        let cashOutPinInput = document.getElementById("cashout-pin");
        let pin = Number(cashOutPinInput.value);
        if (isNaN(pin) || pin !== 1234) {
            alert("Wrong Pin");
            return;
        }
        alert("Transaction Success");
        currentBalanceElement.innerText = balance;
        cashOutPinInput.value = ""
    })