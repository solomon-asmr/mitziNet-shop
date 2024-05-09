
// שמואל למלם תז 209487594
// סלמון קסהון תז 346254824 

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirmPassword');
    var valid = true;

    // Clear existing errors
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';

    if (!email.value) {
        document.getElementById('emailError').textContent = 'Email is required.';
        email.style.border = '1px solid red';
        valid = false;
    } else {
        email.style.border = '';
    }

    if (!password.value) {
        document.getElementById('passwordError').textContent = 'Password is required.';
        password.style.border = '1px solid red';
        valid = false;
    } else if (password.value.length < 8) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters.';
        password.style.border = '1px solid red';
        valid = false;
    } else {
        password.style.border = '';
    }

    if (password.value !== confirmPassword.value) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        confirmPassword.style.border = '1px solid red';
        valid = false;
    } else {
        confirmPassword.style.border = '';
    }

    if (valid) {
        alert('Registration successful!');
        // Here you could actually submit the form or handle the data as needed
    }
});
