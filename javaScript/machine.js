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

    // hidden id
    addMoney.classList.add("hidden");
    cashOut.classList.add("hidden");
    transaction.classList.add("hidden");
    couponCode.classList.add("hidden");

    // show only click id
    const SelectId = document.getElementById(id);
    SelectId.classList.remove("hidden");
}