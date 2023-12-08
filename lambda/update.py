import boto3

def lambda_handler(event, context):
    # Create a DynamoDB client
    dynamodb = boto3.resource('dynamodb')

    # Reference your table
    table = dynamodb.Table('alergydata')

    # Example data to add - modify as per your requirement

    allergies = [
            {'alergy': 'brzoza', 'poziompy': '0'},
            {'alergy': 'trawa', 'poziompy': '0'},
            {'alergy': 'leszczyna', 'poziompy': '0'},
            {'alergy': 'kurz', 'poziompy': '3'} 
        ]
    for data in allergies:
        table.put_item(Item=data)

    return {
        'statusCode': 200,
        'body': 'Data saved to DynamoDB'
    }

