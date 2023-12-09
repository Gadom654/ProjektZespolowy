document.getElementById('updateForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const storedUsername = localStorage.getItem('username'); // Retrieve the username from local storage
    const fieldData = document.getElementById('userDataField1').value; // Collect the value from the form field

    const updatedData = {
        username: storedUsername, // Username from local storage
        field1: fieldData // Data from the form field
    };

    fetch('https://myq7ysgcu2.execute-api.eu-central-1.amazonaws.com/stager/updateuserdata', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Authorization headers if needed
        },
        body: JSON.stringify(updatedData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Handle success (e.g., show a success message)
    })
    .catch(error => console.error('Error:', error));
});

