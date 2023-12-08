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
            fetch('https://xrb4ovumaj.execute-api.eu-central-1.amazonaws.com/getter', {
                mode: 'no-cors',
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ user: "e416eeb6-db8a-4ae7-ae8c-eb1afb5894d4" })
            })
                .then(response => response.json())
                .then(data => {
                    console.log("API Gateway response:", data);
                    window.location.href = data.url;
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
