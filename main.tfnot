provider "aws" {
  region = "eu-central-1"
}

resource "aws_s3_bucket" "my_bucket" {
  bucket = "projektzepsolowy"
}

resource "aws_s3_object" "my_files" {
  count  = 5
  bucket = aws_s3_bucket.my_bucket.id
  key    = "file${count.index + 1}.html"
  source = "html/"
  etag   = filemd5("html/file${count.index + 1}.html")
}

resource "aws_dynamodb_table" "my_table" {
  name           = "MyDynamoDBTable"
  billing_mode   = "PAY_PER_REQUEST"
  hash_key       = "ID"

  attribute {
    name = "ID"
    type = "S"
  }
}

resource "aws_lambda_function" "my_function1" {
  function_name = "my_lambda_function_1"
  role          = aws_iam_role.lambda_exec_role.arn
  handler       = "lambda_function1.lambda_handler"

  runtime = "python3.9"
  filename         = "lambda/function1.zip"
  source_code_hash = filebase64sha256("lambda/function1.zip")
}

resource "aws_lambda_function" "my_function2" {
  function_name = "my_lambda_function_2"
  role          = aws_iam_role.lambda_exec_role.arn
  handler       = "lambda_function2.lambda_handler"

  runtime = "python3.9"
  filename         = "lambda/function2.zip"
  source_code_hash = filebase64sha256("lambda/function2.zip")
}

resource "aws_lambda_function" "my_function3" {
  function_name = "my_lambda_function_3"
  role          = aws_iam_role.lambda_exec_role.arn
  handler       = "lambda_function3.lambda_handler"

  runtime = "python3.9"
  filename         = "lambda/function3.zip"
  source_code_hash = filebase64sha256("lambda/function3.zip")
}

resource "aws_iam_role" "lambda_exec_role" {
  name = "lambda_exec_role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Action = "sts:AssumeRole",
        Effect = "Allow",
        Principal = {
          Service = "lambda.amazonaws.com"
        },
      },
    ]
  })
}

resource "aws_iam_role_policy_attachment" "lambda_exec_policy_attachment" {
  role       = aws_iam_role.lambda_exec_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

