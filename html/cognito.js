<script>
    AWS.config.region = 'eu-central-1'; // Your AWS region

    var poolData = {
        UserPoolId : 'eu-central-1_zYFiuQmA7', // Your Cognito User Pool ID
        ClientId : '276ffcfl48t6id880f4n4najqq' // Your Cognito App Client ID
    };
    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
</script>

