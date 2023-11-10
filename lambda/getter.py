import json
import boto3
from botocore.exceptions import ClientError

# Initialize a DynamoDB client
dynamodb = boto3.resource('dynamodb')

def lambda_handler(event, context):
    # Replace 'YourTableName' with your actual DynamoDB table name
    table = dynamodb.Table('usersdata')

    try:
        # Replace 'userId' with the actual key column name and 'event['userId']' with the key value passed from API Gateway
        response = table.get_item(Key={'user': event['user']})
    except ClientError as e:
        print(e.response['Error']['Message'])
        return {
            'statusCode': 500,
            'body': json.dumps("Error in retrieving item")
        }
    else:
        item = response.get('Item', {})
        return {
            'statusCode': 200,
            'body': json.dumps(item)
        }

