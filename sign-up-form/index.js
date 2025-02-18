document.addEventListener('DOMContentLoaded', function() {
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirm-password');
  const passwordError = document.getElementById('password-error');
  
  confirmPassword.addEventListener('input', function() {
    if (password.value !== confirmPassword.value) {
      passwordError.style.display = 'block';  // Show the error
    } else {
      passwordError.style.display = 'none';  // Hide the error
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const hordeButton = document.querySelector('input[value="horde"]');
  const allianceButton = document.querySelector('input[value="alliance"]');
  const backgroundImage = document.querySelector('.background'); // Your image element

  hordeButton.addEventListener('change', function() {
    if (this.checked) {
      backgroundImage.src = "/assets/591051.jpg"; // Update with your Horde image
    }
  });

  allianceButton.addEventListener('change', function() {
    if (this.checked) {
      backgroundImage.src = "/assets/672246.jpg"; // Update with your Alliance image
    }
  });
});

