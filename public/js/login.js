const form = document.querySelector('form');
const inputUsername = document.querySelector('#username');
const inputPassword = document.querySelector('#password');
// const errorMessage = document.querySelector('#error-message');

async function loginUser(event) {
  event.preventDefault();
  let username = inputUsername.value;
  console.log('username', username);
  let userPassword = inputPassword.value;
  console.log('password', userPassword);

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
    if (!res.ok) {
      console.log('data.error', data.error);
      return;
    }
    localStorage.setItem('username', JSON.stringify(username));
    window.location.href = 'index.html';
  } catch (err) {
    console.error('Error logging in user', err);
  }
}
form.addEventListener('submit', loginUser);
