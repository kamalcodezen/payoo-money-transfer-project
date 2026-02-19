document.getElementById("send-btn")
    .addEventListener("click", function () {

        // user number access and validation
        const userNumber = getValueFromInput("user-number");
        if (userNumber.length !== 11 || !/^\d+$/.test(userNumber)) {
            alert("Invalid Account Number");
            return;
        }

        // amount transfer access and validation
        const amountNumber = Number(getValueFromInput("transfer-amount"));
        if (isNaN(amountNumber) || amountNumber <= 0) {
            alert("Wrong Amount Number");
            return;
        }

        // currentBalance access and validation 
        const currentBalance = getBalance();


        // calculate balance
        const newBalance = currentBalance - amountNumber;
        if (newBalance < 0) {
            alert("Insufficient Balance");
            return;
        }

        // pin access and validation
        const pin = Number(getValueFromInput("transfer-pin"));
        if (isNaN(pin) || pin !== 1234) {
            alert("Wrong Pin");
            return;
        }

        // value set 
        alert("Transaction Success");
        setBalance(newBalance);

        // transaction history added and function call
        addHistory("MONEY TRANSFER", userNumber, amountNumber, newBalance, "bg-red-100 text-red-600");

    });

