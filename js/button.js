const buttons = document.querySelectorAll('#pinPad a');
const userPinInput = document.getElementById('userPinInput');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    userPinInput.value += this.textContent;
  });
});

// Clear button event listener
const clearButton = document.getElementById('btnClear');
clearButton.addEventListener('click', function() {
  userPinInput.value = '';
});