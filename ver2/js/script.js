const passwordField = document.getElementById('password-field');
const surepasswordField = document.getElementById('sure-password-field');
const eyeIcon = document.getElementById('eye-icon');

eyeIcon.addEventListener('click', function() {
  if (passwordField.type === 'password') {
    passwordField.type = 'text';
    surepasswordField.type = 'text';

  } else {
    passwordField.type = 'password';
    surepasswordField.type = 'password';

  }
});
