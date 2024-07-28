// Get the request form and schedule form elements
const requestForm = document.getElementById('request-form');
const scheduleForm = document.getElementById('schedule-form');

// Add event listeners to the forms
requestForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    // Send the form data to the server or display a success message
    console.log('Request form submitted:', { name, email, subject, message });
});

scheduleForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const day = document.getElementById('day').value;
    const time = document.getElementById('time').value;
    // Send the form data to the server or display a success message
    console.log('Schedule form submitted:', { day, time });
});