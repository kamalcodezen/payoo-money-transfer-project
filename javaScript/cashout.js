

document.getElementById("cashout-btn")
    .addEventListener("click", function () {

        // agent number access and validation
        let agentNumber = getValueFromInput("agent-number");
        if (agentNumber.length !== 11 || !/^\d+$/.test(agentNumber)) {
            alert("Invalid account Number");
            return;
        }

        // amount access and validation 
        let amountNumber = Number(getValueFromInput("cashout-amount"));
        if (isNaN(amountNumber) || amountNumber <= 0) {
            alert("Invalid Amount");
            return;
        }

        // currentBalance access and validation 
        let currentBalanceElement = getBalance();

        // calculate balance and validation
        let balance = currentBalanceElement - amountNumber;
        if (balance < 0) {
            alert("Invalid Amount");
            return;
        }

        // pin access and validation
        let pin = Number(getValueFromInput("cashout-pin"));
        if (isNaN(pin) || pin !== 1234) {
            alert("Wrong pin");
            return;
        }

        // set new balance
        alert("Transaction Success");
        setBalance(balance);

        // Transaction history
        // Transaction div access
        const historyDiv = document.getElementById("history");

        // new div create
        let newHistoryDiv = document.createElement("div");
        newHistoryDiv.innerHTML = `
        <div class="w-11/12 bg-base-100 flex rounded-2xl mx-auto gap-4 items-center mt-2 py-2">
          <div>
          <img class="w-[30px] h-[40px] " src="./assets/opt-1.png" alt="">
         </div>
         <p class="text-neutral/50 font-bold">
         Transaction Success Money Withdraw Rs.${amountNumber}
         <br>
         Total Amount: Rs.${balance} <br>
         Date: ${new Date().toLocaleString()}
         </p>
        </div>
        `
        

        historyDiv.prepend(newHistoryDiv);

        document.getElementById("cashout-pin").value = "";
    })



/*
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

    */