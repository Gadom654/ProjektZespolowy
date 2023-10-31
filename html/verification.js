document.getElementById("verify-button").addEventListener("click", function() {
    var verificationCode = document.getElementById("verification-code").value;

    var userData = {
        Username: 'username_of_the_user', // You might need to store this temporarily after registration or ask the user again.
        Pool: userPool
    };
    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cognitoUser.confirmRegistration(verificationCode, true, function(err, result) {
        if (err) {
            alert(err.message || JSON.stringify(err));
            return;
        }
        // If success
        alert('Verification successful. You can now login.');
        // Optionally redirect to login page or somewhere else
        window.location.href = "login.html";
    });
});

