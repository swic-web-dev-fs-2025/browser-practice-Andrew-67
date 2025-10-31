import "./style.css";
let clickCount = 0;

// Get references to HTML elements
const button = document.getElementById('change-count');
const countElement = document.getElementById('click-count');
const resetButton = document.getElementById('reset-click');
const downButton = document.getElementById('decrease-count');

// Function - same logic as console JavaScript
function updateGreeting() 
{
  clickCount++;
  countElement.textContent = `Button clicks: ` + clickCount;
  if (clickCount == 10) {
    document.body.style.backgroundColor = "lightblue";
  }
}
function countDown() {
  clickCount--;
  countElement.textContent = `Button clicks: ` + clickCount;
  if (clickCount < 10) {
    document.body.style.backgroundColor = "white";
  }
  if (clickCount < 0) {
    clickCount = 0;
    countElement.textContent = `Button clicks: ` + clickCount;
  }
}
function resetClicks() {
  clickCount = 0;
  countElement.textContent = `Button clicks: ` + clickCount;
  document.body.style.backgroundColor = "white";
}
// Event listener - this is new! Responds to user interaction button.addEventListener('click', updateGreeting);
button.addEventListener('click', updateGreeting);
downButton.addEventListener('click', countDown);
resetButton.addEventListener('click', resetClicks);