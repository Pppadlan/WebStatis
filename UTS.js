function updateClock() {
    const clockElement = document.getElementById('clock');
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const timeString = hours + ':' + minutes + ':' + seconds;
    clockElement.textContent = timeString;
}

setInterval(updateClock, 1000);

document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registration-form');
    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match. Please try again.');
        } else {
            // You can add registration logic here, e.g., sending data to a server.
            alert('Registration successful!'); // Replace this with actual registration code.
        }
    });
});

