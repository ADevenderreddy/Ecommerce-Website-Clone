document.getElementById('login-form').classList.add('active');

// Function to show login form
function showLoginForm() {
    document.getElementById('login-form').classList.add('active');
    document.getElementById('signup-form').classList.remove('active');
    document.getElementById('login-btn').classList.add('active');
    document.getElementById('signup-btn').classList.remove('active');
}

// Function to show sign up form
function showSignUpForm() {
    document.getElementById('signup-form').classList.add('active');
    document.getElementById('login-form').classList.remove('active');
    document.getElementById('signup-btn').classList.add('active');
    document.getElementById('login-btn').classList.remove('active');
}

// Function to handle login form submission
function login(event) {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email === 'email@123' && password === 'password') {
        document.getElementById('login-error').textContent = '';
        alert('Login successful!');
        
    } else {
        event.preventDefault(); 
        document.getElementById('login-error').textContent = 'Invalid email or password';
    }
}

// Function to handle sign-up form submission
function signUp(event) {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;

    // Basic validation
    if (password !== confirmPassword) {
        event.preventDefault(); 

        document.getElementById('signup-error').textContent = 'Passwords do not match';
    } else {
        alert('Sign-up successful!');
    }
}