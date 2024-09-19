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

  if (pin === "123") {
    updateBalance(addMoney, "deposite");
  } else {
    alert("wroing info");
  }
});

// ----------------switching category----------------------
// document.getElementById("add-money-btn").addEventListener("click", (e) => {
//   const options = document.getElementsByClassName("options");
//   const optionsList = Array.from(options);
//   const hideOptions = optionsList.filter(
//     (option) => option.id !== "add-money-section"
//   );
//   console.log(optionsList);

//   hideOptions.map((option) => option.classList.add("hidden"));
//   document.getElementById("add-money-section").classList.remove("hidden");
// });

// const getElement2 = (elementId) => {

//   };

const switchOption = (btnId, sectionId) => {
  document.getElementById(btnId).addEventListener("click", (e) => {
    const options = document.getElementsByClassName("options");
    const optionsList = Array.from(options);
    const hideOptions = optionsList.filter(
      (option) => option.id !== sectionId
    );
    console.log(optionsList);
    hideOptions.map((option) => option.classList.add("hidden"));
    document.getElementById(sectionId).classList.remove("hidden");
  });
};

switchOption("add-money-btn", "add-money-section");
switchOption("cash-out-btn", "cash-out-section");
