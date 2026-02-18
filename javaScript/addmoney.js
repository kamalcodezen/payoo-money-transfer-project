document.getElementById("add-money-btn")
    .addEventListener("click", function () {

        // Select bank and access and validation
        const addBank = getValueFromInput("add-money-bank").trim();
        if (!addBank || addBank == "Select bank") {
            alert("Please a Select Bank");
            return;
        }

        // Account number access and validation
        const accountNumber = getValueFromInput("add-money-number");
        if (accountNumber.length !== 11 || !/^\d+$/.test(accountNumber)) {
            alert("Please Enter a valid Account Number");
            return;
        }

        // amount add access and validation
        const addAmount = Number(getValueFromInput("add-money-amount"));
        if (isNaN(addAmount) || addAmount <= 0) {
            alert("Please Enter Amount");
            return;
        }

        // calculate money 
        const currentBalance = getBalance();
        let newBalance = currentBalance + addAmount;

        // pin access and check
        const pin = Number(getValueFromInput("add-money-pin"));
        if (isNaN(pin) || pin !== 1234) {
            alert("Incorrect Pin");
            return;
        }

        // money update 
        alert(`Transaction Success 
         Money Added to ${addBank} 
         Amount: Rs.${addAmount}
         New balance: Rs.${newBalance}
         Date: ${new Date().toLocaleString()}`);
        setBalance(newBalance);

    })