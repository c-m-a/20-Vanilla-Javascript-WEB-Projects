const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const passwd = document.getElementById('password');
const passwdConfirm = document.getElementById('password-confirm');

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(username.value);
  console.log('submit');
});
