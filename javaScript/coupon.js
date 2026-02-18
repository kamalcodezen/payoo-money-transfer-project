
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

        // history coupon
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
         Added Coupon Amount: Rs.${bonus} 
         <br>
         Total Amount: Rs.${newBalance} <br>
         Date: ${new Date().toLocaleString()}
         </p>
        </div>
        `
        historyDiv.prepend(newHistoryDiv);

    })