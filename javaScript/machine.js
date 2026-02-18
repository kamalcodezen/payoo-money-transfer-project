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