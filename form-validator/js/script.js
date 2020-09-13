const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const passwd = document.getElementById('password');
const passwdConfirm = document.getElementById('password-confirmation');

function makeCapital(input) {
  const text = input.id.charAt(0).toUpperCase() + input.id.slice(1);
  return text.replace(/-/g, ' ');
}

// Email Regex from
// https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(input => {
    if (input.value.trim() === '') {
      showError(input, `${makeCapital(input)} is required!`);
    } else {
      showSuccess(input);
    }
  });
}

// Show input error message
function showError(input, message) {
  const formCtrl = input.parentElement;
  const small = formCtrl.querySelector('small');

  formCtrl.className = 'form-control error';
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formCtrl = input.parentElement;
  formCtrl.className = 'form-control success';
}

form.addEventListener('submit', e => {
  e.preventDefault();

  checkRequired([username, email, passwd, passwdConfirm]);
});
