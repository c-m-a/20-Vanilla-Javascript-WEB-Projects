const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const passwd = document.getElementById('password');
const passwdConfirm = document.getElementById('password-confirmation');

// Email Regex from
// https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value.trim()))
    showSuccess(input);
  else
    showError(input, 'Email is not valid');
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `Must be between ${min} and ${max} long!`
    );
  } else {
    showSuccess(input);
  }
}

function checkPasswdsMatch(passwd, passwdConfirm) {
  if (passwd.value !== passwdConfirm.value)
    showError(passwdConfirm, 'Passwords do not match!');
}

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(input => {
    if (input.value.trim() === '') {
      showError(input, 'is required!');
    } else {
      showSuccess(input);
    }
  });
}

// Hide error message when you time
function hideErrorMsg(input) {
  const formCtrl = input.parentElement;
  const msg = formCtrl.querySelector('.form__msg');
  input.className = 'form__input';
  msg.className = 'form__msg';
}

// Show input error message
function showError(input, message) {
  const formCtrl = input.parentElement;
  const msg = formCtrl.querySelector('.form__msg');

  input.className = 'form__input form__input--error';
  msg.className = 'form__msg form__msg--show';
  msg.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formCtrl = input.parentElement;
  const msg = formCtrl.querySelector('.form__msg');
  input.className = 'form__input form__input--success';
  msg.className = 'form__msg';
}

form.addEventListener('submit', e => {
  e.preventDefault();

  checkRequired([username, email, passwd, passwdConfirm]);
  checkEmail(email);
  checkLength(username, 3, 16);
  checkLength(password, 6, 16);
  checkPasswdsMatch(passwd, passwdConfirm);
});
