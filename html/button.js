<script>
    document.getElementById('registerButton').addEventListener('click', function(event){
        event.preventDefault();

        var email = document.getElementById('reg-email').value;
        var password = document.getElementById('reg-password').value;
        var passwordRepeat = document.getElementById('reg-password-repeat').value;

        if (password !== passwordRepeat) {
            alert('Passwords do not match');
            return;
        }

        var attributeList = [];

        var dataEmail = {
            Name : 'email',
            Value : email
        };

        var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);
        attributeList.push(attributeEmail);

        userPool.signUp(email, password, attributeList, null, function(err, result){
            if (err) {
                alert(err.message || JSON.stringify(err));
                return;
            }
            cognitoUser = result.user;
            console.log('user name is ' + cognitoUser.getUsername());
            // Here, implement the code to handle the successful registration.
        });
    });
</script>

