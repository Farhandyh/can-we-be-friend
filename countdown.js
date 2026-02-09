// Valentine's Day Countdown Timer
// Target date: February 14, 2026 00:00:00

const valentineDay = new Date("2026-02-14T00:00:00").getTime();

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const messageElement = document.getElementById("message");
const nextBtn = document.getElementById("nextBtn");

// Add leading zero to single digit numbers
function padZero(num) {
  return num < 10 ? "0" + num : num;
}

// Update countdown every second
function updateCountdown() {
  const now = new Date().getTime();
  const distance = valentineDay - now;

  // If countdown is finished
  if (distance < 0) {
    clearInterval(countdownInterval);

    daysElement.textContent = "00";
    hoursElement.textContent = "00";
    minutesElement.textContent = "00";
    secondsElement.textContent = "00";

    messageElement.innerHTML =
      '<p style="font-size: clamp(1.5rem, 4vw, 2.5rem); color: var(--primary-cyan);">Happy Valentine\'s Day!</p>';

    // Show next button with animation
    setTimeout(() => {
      nextBtn.style.display = "inline-flex";
    }, 500);

    return;
  }

  // Calculate time units
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update DOM with smooth transition
  updateElement(daysElement, padZero(days));
  updateElement(hoursElement, padZero(hours));
  updateElement(minutesElement, padZero(minutes));
  updateElement(secondsElement, padZero(seconds));
}

// Update element with fade effect
function updateElement(element, value) {
  if (element.textContent !== value) {
    element.style.opacity = "0.5";
    setTimeout(() => {
      element.textContent = value;
      element.style.opacity = "1";
    }, 150);
  }
}

// Add transition to countdown numbers
const countdownNumbers = document.querySelectorAll(".countdown-number");
countdownNumbers.forEach((num) => {
  num.style.transition = "opacity 0.3s ease";
});

// Start countdown
const countdownInterval = setInterval(updateCountdown, 1000);

// Initial call
updateCountdown();

// Next button click handler
nextBtn.addEventListener("click", () => {
  // Add fade out animation before navigation
  document.querySelector(".content").style.animation = "fadeOut 0.5s ease-out";

  setTimeout(() => {
    window.location.href = "greeting.html";
  }, 500);
});

// Add fade out animation
const style = document.createElement("style");
style.textContent = `
  @keyframes fadeOut {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-30px);
    }
  }
`;
document.head.appendChild(style);
