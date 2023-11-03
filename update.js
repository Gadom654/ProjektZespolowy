window.onload = function() {
    retrieveUserData();
};

function retrieveUserData() {
    fetch('https://zgizfcgqhd.execute-api.eu-central-1.amazonaws.com/stage1/getUserData', {
        method: 'GET',
        headers: {
            // Authorization headers if needed
        }
    })
    .then(response => response.json())
    .then(data => {
        // Populate form fields with this data
        // Example: document.getElementById('userDataField1').value = data.field1;
    })
    .catch(error => console.error('Error:', error));
}

document.getElementById('updateForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const updatedData = {
        // Collect data from form fields
        // Example: field1: document.getElementById('userDataField1').value
    };

    fetch('https://h5392bexta.execute-api.eu-central-1.amazonaws.com/updateUserData', {
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

