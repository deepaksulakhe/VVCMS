document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // In a real application, you would send this data to a server for authentication.
    console.log('Username:', username);
    console.log('Password:', password);
    alert('Login functionality will be added here');
});