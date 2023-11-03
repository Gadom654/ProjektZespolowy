document.getElementById('loginForm').addEventListener('submit', function(event) {
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
        onSuccess: function(result) {
            // User authentication was successful
            console.log('Login successful!');
            // You can now use the Cognito tokens, redirect the user, etc.
	     window.location.href = 'update.html';

        },

        onFailure: function(err) {
            // Handle errors
            console.error(err.message || JSON.stringify(err));
            alert("Błąd logowania: " + err.message);
        },

        // Optional: Implement MFA, newPasswordRequired, etc.
        // These can be added as additional callback methods
    });
});

