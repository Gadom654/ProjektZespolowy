var cognitoUser = userPool.getCurrentUser();

if (cognitoUser != null) {
    cognitoUser.getSession(function(err, session) {
        if (err) {
            console.error(err);
            // Redirect back to login if there is an error
            window.location.href = 'login.html';
        } else if (!session.isValid()) {
            console.log("Session is invalid.");
            // Redirect to login if session is invalid
            window.location.href = 'login.html';
        }
    });
} else {
    // If cognitoUser is null, redirect to login
    window.location.href = 'login.html';
}

