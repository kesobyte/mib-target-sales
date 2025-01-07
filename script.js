document.addEventListener("DOMContentLoaded", function () {
  // Fetch JSON data
  $.getJSON("data.json", function (data) {
    const newLivesValue = data.newlives;
    document.getElementById("current-new-lives").dataset.val = newLivesValue;
    updateValues(newLivesValue);
  });

  function updateValues(currentNewLives) {
    const platinum = parseInt(
      document.getElementById("platinum").textContent.replace(/,/g, "")
    );
    let leftLivesValue = platinum - currentNewLives;

    if (leftLivesValue < 0) {
      leftLivesValue = 0;
    }

    document.getElementById("left-lives").dataset.val = leftLivesValue;

    let valueDisplays = document.querySelectorAll(".num");
    let duration = 10000; // 10 seconds in milliseconds

    valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let increment = endValue / (duration / 100);

      let counter = setInterval(function () {
        startValue += increment;
        valueDisplay.textContent = Math.floor(startValue).toLocaleString();
        if (startValue >= endValue) {
          valueDisplay.textContent = endValue.toLocaleString();
          clearInterval(counter);
        }
      }, 10);
    });

    // Countdown JS
    $(function () {
      FlipClock.Lang.Custom = {
        days: "DAYS ",
        hours: "HOURS",
        minutes: "MINUTES",
        seconds: "SECONDS",
      };
      var opts = {
        clockFace: "DailyCounter",
        countdown: true,
        language: "Custom",
      };
     var countdown = 1762416000 - new Date().getTime() / 1000; // from: 01/07/2025 12:00 am +0800
      countdown = Math.max(1, countdown);
      $(".clock-builder-output").FlipClock(countdown, opts);
    });
  }
});
