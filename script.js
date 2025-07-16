function registerUser() {
  const username = document.getElementById('regUsername').value;
  const email = document.getElementById('regEmail').value;
  const password = document.getElementById('regPassword').value;
  const confirmPassword = document.getElementById('regConfirmPassword').value;

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return false;
  }

  const user = { username, email, password };
  localStorage.setItem('demoUser', JSON.stringify(user));
  alert("Registration successful!");
  window.location.href = "index.html";
  return false;
}

function loginUser() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  const user = JSON.parse(localStorage.getItem('demoUser'));

  if (!user || user.email !== email || user.password !== password) {
    alert("Invalid credentials.");
    return false;
  }

  localStorage.setItem('sessionUser', JSON.stringify(user));
  window.location.href = "profile.html";
  return false;
}

function loadProfile() {
  const user = JSON.parse(localStorage.getItem('sessionUser'));
  if (!user) {
    alert("Unauthorized. Please log in.");
    window.location.href = "index.html";
  } else {
    document.getElementById('usernameDisplay').textContent = user.username;
  }
}

function logoutUser() {
  localStorage.removeItem('sessionUser');
  window.location.href = "index.html";
}

function resetPassword() {
  const email = document.getElementById('resetEmail').value;
  const newPassword = document.getElementById('newPassword').value;
  const user = JSON.parse(localStorage.getItem('demoUser'));

  if (!user || user.email !== email) {
    alert("Email not found.");
    return false;
  }

  user.password = newPassword;
  localStorage.setItem('demoUser', JSON.stringify(user));
  alert("Password reset successful!");
  window.location.href = "index.html";
  return false;
}
