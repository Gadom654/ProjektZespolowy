    AWS.config.region = 'eu-central-1'; // Your AWS region
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'eu-central-1:6c5e9f54-7c9b-4899-be1d-39b35dba174b' // Your Cognito Identity Pool ID
    });
    var poolData = {
        UserPoolId : 'eu-central-1_uDcvU5Q1v', // Your Cognito User Pool ID
        ClientId : '1cfmf8g3m2ivat7q6rdc4rcdgm' // Your Cognito App Client ID
    };
    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
