// machine id - input
function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}

// machine id -- currentBalance 
function getBalance() {
    const currentBalanceElement = document.getElementById("balance");
    let balance = currentBalanceElement.innerText;
    return Number(balance);
}

// machine id -new setBalance
function setBalance(value) {
    let newBalance = document.getElementById("balance");
    newBalance.innerText = value;
}

// click button hide and show id (section)
function showOnly(id) {
    const addMoney = document.getElementById("add-money");
    const cashOut = document.getElementById("cashout");
    const transaction = document.getElementById("transaction-history");
    const couponCode = document.getElementById("get-bonus");
    const transferMoney = document.getElementById("transfer-money");
    const billPay = document.getElementById("pay-bill");



    // hidden id
    addMoney.classList.add("hidden");
    cashOut.classList.add("hidden");
    transaction.classList.add("hidden");
    couponCode.classList.add("hidden");
    transferMoney.classList.add("hidden");
    billPay.classList.add("hidden");


    // show only click id
    const SelectId = document.getElementById(id);
    SelectId.classList.remove("hidden");
}



// all transaction function
function addHistory(type, account, amount, balance, color) {
    const historyDiv = document.getElementById("history");

    let newHistoryDiv = document.createElement("div");
    newHistoryDiv.innerHTML = `
     <div class="w-11/12 bg-base-100 flex rounded-2xl mx-auto gap-5 items-center mt-2 py-2">
            <div>
                <img class="w-[30px] h-[40px]" src="./assets/opt-1.png">
            </div>
          <p class="font-bold ${color}">
          ${type} to ${account} <br>
          Amount: Rs.${amount} <br>
          New Balance: Rs.${balance} <br>
          Date: ${new Date().toLocaleString()}
          </p>

     </div>
    `;

    historyDiv.prepend(newHistoryDiv);

}