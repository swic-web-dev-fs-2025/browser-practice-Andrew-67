import "./style.css";
let clickCount = 0;

// Get references to HTML elements
const greetingElement = document.getElementById('greeting');
const button = document.getElementById('change-greeting');
const countElement = document.getElementById('click-count');
const resetButton = document.getElementById('reset-click');
const colorButton = document.getElementById('change-color');
const newGreetingButton = document.getElementById('new-greeting');

// Function - same logic as console JavaScript
function updateGreeting() 
{
  clickCount++;
  greetingElement.textContent = 'Hello, Browser JavaScript!';
  countElement.textContent = `Button clicks: ` + clickCount;
}
// Event listener - this is new! Responds to user interaction button.addEventListener('click', updateGreeting);
button.addEventListener('click', updateGreeting);
function resetClicks() {
  clickCount = 0;
  countElement.textContent = `Button clicks: ` + clickCount;
  greetingElement.textContent = 'Hello, Console JavaScript!';
}
resetButton.addEventListener('click', resetClicks);
function colorChange() {
  document.body.style.backgroundColor = 'lightblue' ;
}
colorButton.addEventListener('click', colorChange);
resetButton.addEventListener('click', () => {
  document.body.style.backgroundColor = 'white';
});
function customGreetingInput() {
  const userGreeting = prompt("Enter your custom greeting:");
  if (userGreeting) {
    greetingElement.textContent = userGreeting;
  } else {
    greetingElement.textContent = 'Hello, Browser JavaScript!';
  }
}
newGreetingButton.addEventListener('click', customGreetingInput);