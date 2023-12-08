import boto3

def lambda_handler(event, context):
    dynamodb = boto3.resource('dynamodb')
    user_table = dynamodb.Table('usersdata')
    alergy_table = dynamodb.Table('alergydata')

    username = event['user']  # Assuming userId is passed in the event

    # Check if user has data in usersdata table
    user_response = user_table.get_item(Key={'user': username})
    if 'Item' not in user_response:
        return {'url': 'update.html'}

    # Check the alergydata table for brzoza value
    alergy_response = alergy_table.get_item(Key={'alergy': 'brzoza'})
    brzoza_value = int(alergy_response['Item']['poziompy'])

    # Determine which page to return based on brzoza value and user preference
    if user_response['Item'].get('brzoza') == 'yes':
        if brzoza_value <= 2:
            return {'url': '1.html'}
        elif brzoza_value > 4:
            return {'url': '3.html'}
        else:
            return {'url': '2.html'}

    return {'url': 'default.html'}  # Default response if conditions are not met

