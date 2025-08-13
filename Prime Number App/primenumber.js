function checkPrime() {
  const numberInput = document.getElementById("numberInput");
  const result = document.getElementById("result");
  const historyList = document.getElementById("historyList");
  const num = parseInt(numberInput.value);

  if (isNaN(num) || num < 2) {
    result.style.color = "red";
    result.innerText = "❌ Please enter a number greater than 1.";
    return;
  }

  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    result.style.color = "green";
    result.innerText = `✅ ${num} is a Prime Number!`;
    addToList(num, true);
  } else {
    result.style.color = "crimson";
    result.innerText = `❌ ${num} is NOT a Prime Number.`;
    addToList(num, false);
  }

  numberInput.value = ""; // Clear input
  numberInput.focus();
}

function addToList(number, isPrime) {
  const historyList = document.getElementById("historyList");
  const listItem = document.createElement("li");

  listItem.textContent = `${number} → ${isPrime ? "✅ Prime" : "❌ Not Prime"}`;
  listItem.style.color = isPrime ? "green" : "crimson";
  historyList.appendChild(listItem);
}
