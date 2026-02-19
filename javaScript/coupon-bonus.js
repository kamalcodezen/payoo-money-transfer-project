
document.getElementById("coupon-btn")
    .addEventListener("click", function () {

        // coupon code access and validation
        const couponCode = getValueFromInput("coupon-number").trim().toUpperCase();
        if (couponCode !== "BONUS50") {
            alert("Invalid Coupon");
            return;
        }
        let bonus = 0
        if (couponCode === "BONUS50")
            bonus = 50;

        // calculate currentBalance to bonus
        const currentBalance = getBalance();

        const newBalance = currentBalance + bonus;

        alert("coupon Added");
        setBalance(newBalance);


        // coupon history added to function call
        addHistory("COUPON", "BONUS50", bonus, currentBalance,"bg-green-100 text-green-600");
    });
