import json
import boto3
from botocore.exceptions import ClientError

# Initialize a DynamoDB client
dynamodb = boto3.resource('dynamodb')

def lambda_handler(event, context):
    # Replace 'YourTableName' with your actual DynamoDB table name
    table = dynamodb.Table('YourTableName')

    # Assuming 'event' is the JSON payload containing the update data
    update_data = event

    try:
        # Replace 'userId' with your table's primary key name and 'update_data['userId']' with the primary key value
        response = table.update_item(
            Key={
                'user': update_data['user']
            },
            UpdateExpression='SET #attr1 = :val1, #attr2 = :val2',  # Add more attributes as needed
            ExpressionAttributeNames={
                '#attr1': 'attributeName1',  # Replace with your actual attribute names
                '#attr2': 'attributeName2'
            },
            ExpressionAttributeValues={
                ':val1': update_data['attributeValue1'],  # Replace with values from the 'update_data'
                ':val2': update_data['attributeValue2']
            },
            ReturnValues='UPDATED_NEW'
        )
    except ClientError as e:
        print(e.response['Error']['Message'])
        return {
            'statusCode': 500,
            'body': json.dumps("Error in updating item")
        }
    else:
        return {
            'statusCode': 200,
            'body': json.dumps(response)
        }

