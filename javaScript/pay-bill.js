
document.getElementById("pay-bill-btn")
    .addEventListener("click", function () {

        // select bank access and validation
        const selectPayBank = getValueFromInput("pay-bill-bank");
        if (!selectPayBank || selectPayBank == "Select bank") {
            alert("Please select a bank");
            return;
        }

        // pay bill account number access and validation
        const billAccountNumber = getValueFromInput("pay-bill-number");
        if (billAccountNumber.length !== 11 || !/^\d+$/.test(billAccountNumber)) {
            alert("Please Enter Valid Account Number");
            return;
        }


        // amount pay access and validation 
        const billPayAmount = Number(getValueFromInput("pay-bill-amount"));
        if (isNaN(billPayAmount) || billPayAmount <= 0) {
            alert("Please Enter a Valid Amount");
            return;
        }

        // current balance access and calculate ,validation 
        const currentBalance = getBalance();
        const newBalance = currentBalance - billPayAmount;
        if (newBalance < 0) {
            alert("Insufficient Balance");
            return;
        }

        // pin access and validation
        const pin = Number(getValueFromInput("pay-bill-pin"));
        if (isNaN(pin) || pin !== 1234) {
            alert("Wrong Pin!");
            return;
        }

        // setBalance 
        alert("Bill Pay Success");
        setBalance(newBalance);


        // transaction history transfer ----
        // history div access and create new div inside and add prepend call function ----
        addHistory("Bill Paid", billAccountNumber, billPayAmount, newBalance, "text-red-500");

    })