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

        // Transaction history
        // Transaction div access
        const historyDiv = document.getElementById("history");

        // new div create
        let newHistoryDiv = document.createElement("div");
        newHistoryDiv.innerHTML = `
        <div class="w-11/12 bg-base-100 flex rounded-2xl mx-auto gap-4 items-center mt-2 py-2">
          <div>
           <img class="w-[40px] h-[40px] " src="./assets/opt-1.png" alt="">
         </div>
          <p class="text-neutral/50 font-bold">
          Transaction Success Money Credited to ${addBank}
          Amount: Rs.${addAmount}
          <br>
          Date: ${new Date().toLocaleString()}
          </p>
        </div>
        `
        
        historyDiv.prepend(newHistoryDiv);

    })