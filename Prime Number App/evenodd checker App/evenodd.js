function checkOddEven() {
  const numberInput = document.getElementById("numberInput");
  const result = document.getElementById("result");
  const historyList = document.getElementById("historyList");
  const num = parseInt(numberInput.value);

  if (isNaN(num)) {
    result.style.color = "red";
    result.innerText = "❌ Please enter a valid number.";
    return;
  }

  const isEven = num % 2 === 0;

  if (isEven) {
    result.style.color = "green";
    result.innerText = `✅ ${num} is an Even Number.`;
    addToList(num, true);
  } else {
    result.style.color = "crimson";
    result.innerText = `❌ ${num} is an Odd Number.`;
    addToList(num, false);
  }

  numberInput.value = "";
  numberInput.focus();
}

function addToList(number, isEven) {
  const historyList = document.getElementById("historyList");
  const listItem = document.createElement("li");

  listItem.textContent = `${number} → ${isEven ? "✅ Even" : "❌ Odd"}`;
  listItem.style.color = isEven ? "green" : "crimson";
  historyList.appendChild(listItem);
}
