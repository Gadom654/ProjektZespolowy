document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the default form submission

    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;

    var authenticationData = {
        Username: username,
        Password: password,
    };
    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);

    var userData = {
        Username: username,
        Pool: userPool
    };
    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
            console.log('Login successful!');

            //keeping login username
            localStorage.setItem('username', username);

            // Replace Lambda invoke with Fetch API request to API Gateway
            fetch('https://myq7ysgcu2.execute-api.eu-central-1.amazonaws.com/stager', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user: username }) // Ensure this matches your Lambda function's expected input
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log("API Gateway response:", data);
                    window.location.href = data.url; // Redirects the user to the returned URL
                })
                .catch(err => {
                    console.error('API Gateway error:', err);
                });
        },
        onFailure: function (err) {
            console.error(err.message || JSON.stringify(err));
            alert("Błąd logowania: " + err.message);
        },
    }); 
})