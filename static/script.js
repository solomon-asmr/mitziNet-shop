 
// shmuel lemlem id:209487594
// solomon kassahun id: 346254824 

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    var data = {
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
        confirmPassword
    };

    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert(data.error);
        } else {
            alert(data.message);
            document.getElementById('registrationForm').reset(); // Clear form values
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

document.getElementById('deleteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('deleteEmail').value;
    var password = document.getElementById('deletePassword').value;

    var data = {
        email,
        password
    };

    fetch('/delete', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert(data.error);
        } else {
            alert(data.message);
            document.getElementById('deleteForm').reset(); // Clear form values
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
