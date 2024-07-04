let valueDisplays = document.querySelectorAll(".num");
let duration = 10000; // 3 seconds in milliseconds

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let increment = endValue / (duration / 100); // Calculate the increment per 100ms

  let counter = setInterval(function () {
    startValue += increment;
    valueDisplay.textContent = Math.floor(startValue);
    if (startValue >= endValue) {
      valueDisplay.textContent = endValue; // Ensure the final value is correct
      clearInterval(counter);
    }
  }, 10);
});
