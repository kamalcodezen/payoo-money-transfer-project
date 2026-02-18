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

        // transaction history
        const transactionHistory = document.getElementById("history");

        let history = document.createElement("div");
        history.innerHTML = `
        <div class="w-11/12 bg-base-100 flex rounded-2xl mx-auto gap-4 items-center mt-2 py-2">
          <div>
          <img class="w-[30px] h-[40px] " src="./assets/opt-1.png" alt="">
         </div>
         <p class="text-neutral/50 font-bold">
         Money Sent to ${userNumber} <br>
         Amount Rs.${amountNumber}<br>
         New Balance: Rs.${newBalance} <br>
         Date: ${new Date().toLocaleString()}
         </p>
        </div>
        `
        transactionHistory.prepend(history);

    })

