const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const passwd = document.getElementById('password');
const passwdConfirm = document.getElementById('password-confirm');

// Email Regex from
// https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
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

  if (username.value === '') {
    showError(username, 'Username is required!');
  } else {
    showSuccess(username);
  }

  if (email.value === '') {
    showError(email, 'Email is required!');
  } else if (!isValidEmail(email.value)) {
    showError(email, 'Email is not valid!');
  } else {
    showSuccess(email);
  }

  if (passwd.value === '') {
    showError(passwd, 'Password is required!');
  } else {
    showSuccess(passwd);
  }

  if (passwdConfirm.value === '') {
    showError(passwdConfirm, 'Password comfirmation is required!');
  } else {
    showSuccess(passwdConfirm);
  }
});
