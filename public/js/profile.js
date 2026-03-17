import { togglePassword } from './helperFunctions.js';

// const updateForm = document.querySelector('#updateForm');
// const inputUsername = document.querySelector('#username');
const deleteButton = document.querySelector('#delete-button');
// deleteButton.disabled = true;
// const inputEmail = document.querySelector('#email');
// const inputPassword0 = document.querySelector('#password0');
// const inputPassword1 = document.querySelector('#password1');
// const inputPassword2 = document.querySelector('#password2');
// const errorMessage = document.querySelector('.error-message');
const eyeIcon0 = document.querySelector('.eye-icon0');
const eyeIcon1 = document.querySelector('.eye-icon1');
const eyeIcon2 = document.querySelector('.eye-icon2');
const togglePassword0 = document.querySelector('.toggle-password0');
const togglePassword1 = document.querySelector('.toggle-password1');
const togglePassword2 = document.querySelector('.toggle-password2');

eyeIcon0.addEventListener('click', function () {
  togglePassword(togglePassword0, eyeIcon0);
});

eyeIcon1.addEventListener('click', function () {
  togglePassword(togglePassword1, eyeIcon1);
});

eyeIcon2.addEventListener('click', function () {
  togglePassword(togglePassword2, eyeIcon2);
});

async function deleteUser() {
  const userId = JSON.parse(localStorage.getItem('userId'));
  console.log('userId', userId);
  try {
    const res = await fetch(`http://localhost:3000/api/user/${userId}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    console.log('data', data);
    localStorage.setItem('userId', JSON.stringify(''));
    window.location.href = 'login.html';
  } catch (err) {
    console.error('Error deleting user', err);
  }
}
deleteButton.addEventListener('click', deleteUser);
