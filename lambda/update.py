import boto3

def lambda_handler(event, context):
    # Create a DynamoDB client
    dynamodb = boto3.resource('dynamodb')

    # Reference your table
    table = dynamodb.Table('alergydata')

    # Example data to add - modify as per your requirement
    data = {
        'alergy': 'brzoza',
        'poziompy': '100',
    }

    # Put item in table
    table.put_item(Item=data)

    return {
        'statusCode': 200,
        'body': 'Data saved to DynamoDB'
    }

