// console.log("")

const getElement = (elementId) => {
  const element = document.getElementById(elementId);
  const elementValue = element.value;
  element.value = " ";
  return elementValue;
};

const updateBalance = (newBalance, type) => {
  const oldBalance = document.getElementById("main-balance");
  const oldBalanceNum = parseInt(oldBalance.innerText);
  let balance;
  // set on Main Balance
  if (type == "deposite") {
    balance = oldBalanceNum + newBalance;
  } else if (type == "withdraw") {
    balance = oldBalanceNum - newBalance;
  }
  oldBalance.innerText = balance;
};

// -------------------------------------for Cash Out
document.getElementById("cashout-btn").addEventListener("click", (e) => {
  e.preventDefault();

  const cashoutAmount = getElement("cashout-amount");
  const pin = getElement("cashout-pin");

  const cashMoney = parseInt(cashoutAmount);

  if (pin === "123") {
    updateBalance(cashMoney, "withdraw");
    updateTransactions("Withdraw", cashMoney);
  } else {
    alert("Wrong Credencial !!");
  }
});
// -------------------------------------for Add Money

document.getElementById("addmoney-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const addmoneyAmount = getElement("addmoney-amount");
  const pin = getElement("addmoney-pin");

  const addMoney = parseInt(addmoneyAmount);
  console.log("add money", addMoney);

  if (pin === "123") {
    updateBalance(addMoney, "deposite");
    updateTransactions("Deposite", addMoney);
  } else {
    alert("wroing info");
  }
});

// ----------------switching category----------------------

const switchOption = (btnId, sectionId) => {
  document.getElementById(btnId).addEventListener("click", (e) => {
    const options = document.getElementsByClassName("options");
    const optionsList = Array.from(options);
    const hideOptions = optionsList.filter((option) => option.id !== sectionId);
    // console.log(optionsList);
    hideOptions.map((option) => option.classList.add("hidden"));
    document.getElementById(sectionId).classList.remove("hidden");
  });
};

switchOption("add-money-btn", "add-money-section");
switchOption("cash-out-btn", "cash-out-section");
switchOption("transfer-btn", "latest-payment-section");

// update Transactions

const updateTransactions = (billName, amount) => {
  const latestPaymentsParent = document.getElementById("latest-payments");
  const item = document.createElement("div");

  item.innerHTML = `
    <div class="flex justify-between items-center bg px-4 py-4 rounded shadow shadow-gray-600">
      <div class="flex gap-2.5 items-center">
        <i class="fa-solid fa-money-bill-transfer text-xl"></i>
        <div>
          <h3>${billName}</h3>
          <p>Total: $ <span class="font-semibold">${amount} </span>Tk </p>
        </div>
      </div>

      <i class="fa-solid fa-ellipsis-vertical text-xl"></i>
    </div>
  `;
  latestPaymentsParent.appendChild(item);
};

// updateTransactions("Shopping", 400);
