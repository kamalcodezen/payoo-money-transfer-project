
document.getElementById("pay-bill-btn")
    .addEventListener("click", function () {

        // select bank access and validation
        const selectPayBank = getValueFromInput("pay-bill-bank");
        if (!selectPayBank || selectPayBank == "Select bank") {
            alert("Please select a bank");
            return;
        }

        // pay bill account number access and validation
        const BillAccountNumber = Number(getValueFromInput("pay-bill-number"));
        if (!BillAccountNumber || isNaN(BillAccountNumber)) {
            alert("Please Enter Valid Account Number");
            return;
        }


        // amount pay access and validation 
        const billPayAmount = Number(getValueFromInput("pay-bill-amount"));
        if (!billPayAmount || isNaN(billPayAmount) || billPayAmount <= 0) {
            alert("Please Enter a Valid Amount");
            return;
        }

        // current balance access and calculate ,validation 
        const currentBalance = getBalance();
        const newBalance = currentBalance - billPayAmount;
    


    })