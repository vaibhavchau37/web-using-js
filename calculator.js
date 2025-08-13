document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll(".btn");

  let currentInput = "";

  buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      if (btn.classList.contains("clear")) {
        currentInput = "";
        display.value = "";
      } else if (btn.classList.contains("equal")) {
        try {
          // Evaluate the expression, avoid using eval in production
          currentInput = eval(currentInput).toString();
          display.value = currentInput;
        } catch {
          display.value = "Error";
          currentInput = "";
        }
      } else {
        currentInput += btn.getAttribute("data-value") || "";
        display.value = currentInput;
      }
    });
  });
});
