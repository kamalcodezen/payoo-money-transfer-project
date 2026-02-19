
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
        if (newBalance < 0) {
            alert("Insufficient Balance");
            return;
        }

        // pin access and validation
        const pin = Number(getValueFromInput("pay-bill-pin"));
        if (!pin || isNaN(pin) || pin !== 1234) {
            alert("Wrong Pin!");
            return;
        }

        alert("Bill Pay Success");
        setBalance(newBalance);

        // transaction history transfer ----
        // history div access and create new div inside and add prepend ----
        const historyDiv = document.getElementById("history");
        const newHistoryDiv = document.createElement("div");
        newHistoryDiv.innerHTML = `
         < div class="w-11/12 bg-base-100 flex    rounded-2xl mx-auto gap-4 items-center mt-2  py-2" >
         <div>
           <img class="w-[30px] h-[40px] " src="./assets/opt-1.png" alt="">
         </div>
         <p class="text-neutral/50 font-bold">
            Money Sent to ${BillAccountNumber} <br>
            Amount Rs.${billPayAmount}<br>
            New Balance: Rs.${newBalance} <br>
            Date: ${new Date().toLocaleString()}
         </p>
        <div/>
        `
        newHistoryDiv.prepend(historyDiv);


    })