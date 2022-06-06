const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');
const currencyEl_two = document.getElementById('currency-two');
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

let token = config.MY_API_TOKEN;

// Fetch exchange rates and update the dom

function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  fetch(`https://v6.exchangerate-api.com/v6/${token}/latest/${currency_one}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

// Event listeners

currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

calculate();
