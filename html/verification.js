document.getElementById("verify-button").addEventListener("click", function() {
    var verificationCode = document.getElementById("verification-code").value;

    var userData = {
        Username: '8c559066-0f28-48b3-9e98-c753da30a795', // You might need to store this temporarily after registration or ask the user again.
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

