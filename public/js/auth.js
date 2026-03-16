import { togglePassword } from './helperFunctions.js';

const RegisterForm = document.querySelector('#registerForm');
const loginForm = document.querySelector('#loginForm');
// const createAccountBtn = document.querySelector('#create-account-btn');
const inputUsername = document.querySelector('#username');
const inputEmail = document.querySelector('#email');
const inputPassword1 = document.querySelector('#password1');
const inputPassword2 = document.querySelector('#password2');
const errorMessage = document.querySelector('.error-message');
const eyeIcon1 = document.querySelector('.eye-icon1');
const eyeIcon2 = document.querySelector('.eye-icon2');
const togglePassword1 = document.querySelector('.toggle-password1');
const togglePassword2 = document.querySelector('.toggle-password2');

const url = window.location.pathname.split('/').pop();
console.log('Current page:', url);
let page;

if (url === 'createAccount.html') {
  page = 1;
} else if (url === 'login.html') {
  page = 2;
}

eyeIcon1.addEventListener('click', function () {
  togglePassword(togglePassword1, eyeIcon1);
});

if (page === 1) {
  eyeIcon2.addEventListener('click', function () {
    togglePassword(togglePassword2, eyeIcon2);
  });
}

async function createUser(event) {
  event.preventDefault();
  const username = inputUsername.value.trim().toLowerCase();
  const userEmail = inputEmail.value.trim().toLowerCase();
  const userPassword1 = inputPassword1.value.trim();
  const userPassword2 = inputPassword2.value.trim();
  const userPassword = userPassword1;

  if (username.length < 2) {
    errorMessage.textContent = 'Användarnamnet måste vara minst 2 karaktärer';
    return;
  }

  if (username.length > 20) {
    errorMessage.textContent =
      'Användarnamnet får inte vara mer än 20 karaktärer';
    return;
  }

  if (!userEmail.includes('.')) {
    errorMessage.textContent = 'Email behöver innehålla .';
    return;
  }

  if (!userEmail.includes('@')) {
    errorMessage.textContent = 'Email behöver innehålla @';
    return;
  }

  if (userPassword.length < 10) {
    errorMessage.textContent = 'Lösenordet måste vara minst 10 karaktärer';
    return;
  }

  if (!/[a-zåäö]/.test(userPassword1 || userPassword2)) {
    errorMessage.textContent =
      'Lösenordet måste innehålla minst 1 liten bokstav';
    return;
  }

  if (!/[A-ÖÅÄÖ]/.test(userPassword1 || userPassword2)) {
    errorMessage.textContent =
      'Lösenordet måste innehålla minst 1 stor bokstav';
    return;
  }

  if (!/[0-9]/.test(userPassword1 || userPassword2)) {
    errorMessage.textContent = 'Lösenordet måste innehålla minst 1 siffra';
    return;
  }

  if (!/[^A-Za-z0-9ÅÄÖåäö]/.test(userPassword1 || userPassword2)) {
    errorMessage.textContent =
      'Lösenordet måste innehålla minst 1 specialtecken';
    return;
  }

  if (userPassword1 !== userPassword2) {
    errorMessage.textContent = 'Lösenorden matchar inte';
    return;
  }

  try {
    const res = await fetch('http://localhost:3000/api/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ username, userEmail, userPassword }),
    });
    const data = await res.json();
    console.log('data', data);
    window.location.href = 'login.html';
  } catch (err) {
    console.error('Error creating user account', err);
  }
}
if (page === 1) {
  RegisterForm.addEventListener('submit', createUser);
}

async function loginUser(event) {
  event.preventDefault();
  const username = inputUsername.value.trim().toLowerCase();
  const userPassword = inputPassword1.value.trim();

  try {
    const res = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ username, userPassword }),
    });
    const data = await res.json();
    console.log('data', data);
    if (!res.ok && res.status === 401) {
      errorMessage.textContent = 'Fel inloggningsuppgifter';
      return;
    }
    localStorage.setItem('username', JSON.stringify(username));
    localStorage.setItem('userId', JSON.stringify(data.userId));
    window.location.href = 'index.html';
  } catch (err) {
    console.error('Error logging in user', err);
  }
}
if (page === 2) {
  loginForm.addEventListener('submit', loginUser);
}
