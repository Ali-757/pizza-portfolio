let breadTypes = ["Yupqa", "O'rtacha", "Qalin"];
let sizes = [25, 30, 35];
let toppings = ["Pomidor", "Tuzlangan bodring", "Kurka go'shti", "Qo'ziqorin", "Zaytun", "Qazi"];
let addl = ["Achchiq", "Sosiskali"];

let elPizzaForm = document.querySelector(".js-pizza-form");
let elBreadSelect = elPizzaForm.querySelector(".js-bread-select");
let elSizeRadioWrapper = elPizzaForm.querySelector(".js-size-radio-wrapper");
let elToppingsWrapper = elPizzaForm.querySelector(".js-toppings-wrapper");
let elAddlWrapper = elPizzaForm.querySelector(".js-addl-wrapper");

let elOrderState = document.querySelector(".js-order-state");
let elOrderBread = elOrderState.querySelector(".js-order-bread");
let elOrderSize = elOrderState.querySelector(".js-order-size");
let elOrderToppings = elOrderState.querySelector(".js-order-toppings");
let elOrderAddl = elOrderState.querySelector(".js-order-addl");

let fjgvt = [];
let orderAddls = [];

let renderToppings = function() {
  elOrderToppings.innerHTML = "";

  for (let i = 0; i < fjgvt.length; i++) {
    let elNewOrderLi = document.createElement("li");
    elNewOrderLi.textContent = fjgvt[i];
    elOrderToppings.appendChild(elNewOrderLi);
  }
};

let renderAddls = function() {
  elOrderAddl.innerHTML = "";

  for (let i = 0; i < orderAddls.length; i++) {
    let elNewAddlLi = document.createElement("li");
    elNewAddlLi.textContent = orderAddls[i];
    elOrderAddl.appendChild(elNewAddlLi);
  }
};

for (let i = 0; i < breadTypes.length; i++) {
  let elBreadOption = document.createElement("option");
  elBreadOption.value = breadTypes[i];
  elBreadOption.textContent = breadTypes[i];
  elBreadSelect.appendChild(elBreadOption);
}

for (let i = 0; i < sizes.length; i++) {
  let elSizeLabel = document.createElement("label");
  let elSizeInput = document.createElement("input");
  let elSizeText = document.createElement("span");

  elSizeInput.classList.add("size-radio", "js-size-radio");
  elSizeInput.type = "radio";
  elSizeInput.name = "size";
  elSizeInput.value = sizes[i];
  elSizeText.classList.add("me-2");
  elSizeText.textContent = `${sizes[i]} sm`;

  elSizeInput.addEventListener("change", function() {
    elOrderSize.textContent = this.value;
  });

  elSizeLabel.append(elSizeInput, elSizeText);
  elSizeRadioWrapper.appendChild(elSizeLabel);
}

for (let i = 0; i < toppings.length; i++) {
  let elToppingsLabel = document.createElement("label");
  let elToppingsInput = document.createElement("input");
  let elToppingsSpan = document.createElement("span");

  elToppingsInput.classList.add("topping-checkbox", "js-topping-checkbox");
  elToppingsInput.name = "topping";
  elToppingsInput.type = "checkbox";
  elToppingsInput.value = toppings[i];

  elToppingsSpan.classList.add("me-2");
  elToppingsSpan.textContent = toppings[i];

  elToppingsLabel.append(elToppingsInput, elToppingsSpan);
  elToppingsWrapper.appendChild(elToppingsLabel);

  elToppingsInput.addEventListener("change", function() {
    if (fjgvt.includes(this.value)) {
      let indextopish = fjgvt.indexOf(this.value);
      fjgvt.splice(indextopish, 1);
    } else {
      fjgvt.push(this.value);
    }
    renderToppings();
  });
}

for (let i = 0; i < addl.length; i++) {
  let elAddlLabel = document.createElement("label");
  let elAddlInput = document.createElement("input");
  let elAddlSpan = document.createElement("span");

  elAddlInput.classList.add("addl-ingredient", "js-addl-ingredient");
  elAddlInput.name = "topping";
  elAddlInput.type = "checkbox";
  elAddlInput.value = addl[i];

  elAddlSpan.classList.add("me-2");
  elAddlSpan.textContent = addl[i];

  elAddlLabel.append(elAddlInput, elAddlSpan);
  elAddlWrapper.appendChild(elAddlLabel);

  elAddlInput.addEventListener("change", function() {
    if (orderAddls.includes(this.value)) {
      let indexAddl = orderAddls.indexOf(this.value);
      orderAddls.splice(indexAddl, 1);
    } else {
      orderAddls.push(this.value);
    }
    renderAddls();
  });
}

let updateBreadType = function() {
  elOrderBread.textContent = elBreadSelect.value;
};

updateBreadType();
elBreadSelect.addEventListener("change", updateBreadType);
