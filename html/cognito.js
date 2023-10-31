    AWS.config.region = 'eu-central-1'; // Your AWS region
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'eu-central-1:218203ec-a4cc-49cb-b3fa-e36d3226c40e' // Your Cognito Identity Pool ID
    });
    var poolData = {
        UserPoolId : 'eu-central-1_zYFiuQmA7', // Your Cognito User Pool ID
        ClientId : '276ffcfl48t6id880f4n4najqq' // Your Cognito App Client ID
    };
    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
