// Example of simple form validation for registration
function validateForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!username || !email || !password) {
        alert('All fields are required!');
        return false;
    }
    // More validation can be added here (e.g., email format, password strength)
    return true;
}

// Function to simulate loading user profiles (example data)
function loadUserProfiles() {
    const users = [
        { name: 'Alice', age: 28, interests: 'Traveling, Reading' },
        { name: 'Bob', age: 32, interests: 'Cooking, Sports' },
    ];

    const profileSection = document.getElementById('profile-section');
    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user-profile');
        userDiv.innerHTML = `
            <h3>${user.name}</h3>
            <p>Age: ${user.age}</p>
            <p>Interests: ${user.interests}</p>
            <button class="message-button">Send Message</button>
        `;
        profileSection.appendChild(userDiv);
    });
}

// Real-time messaging (basic example)
function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const messageDisplay = document.getElementById('message-display');

    if (messageInput.value.trim() === '') {
        alert('Please enter a message!');
        return;
    }

    const newMessage = document.createElement('div');
    newMessage.textContent = messageInput.value;
    messageDisplay.appendChild(newMessage);
    messageInput.value = ''; // Clear the input
}

// Load user profiles when the homepage is opened
if (document.getElementById('profile-section')) {
    loadUserProfiles();
}

// Add event listener for sending messages
const messageButton = document.getElementById('send-message-button');
if (messageButton) {
    messageButton.addEventListener('click', sendMessage);
}
