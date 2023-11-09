data "archive_file" "lambda_update" {
  type        = "zip"
  source_file = "update.py"
  output_path = "lambda/lambda_update.zip"
}

resource "aws_lambda_function" "updater" {
  # If the file is not in the current working directory you will need to include a
  # path.module in the filename.
  filename      = "lambda_update.zip"
  function_name = "updater"
  role          = aws_iam_role.iam_for_lambda.arn
  handler       = "index.test"

  source_code_hash = data.archive_file.lambda_update.output_base64sha256

  runtime = "python3.11"

  tags = {
    Projekt = "Zespolowy"
  }
}

#zip file for lambda that is getting user data
data "archive_file" "lambda_getter" {
  type        = "zip"
  source_file = "getter.py"
  output_path = "lambda/lambda_getter.zip"
}

resource "aws_lambda_function" "getter" {
  # If the file is not in the current working directory you will need to include a
  # path.module in the filename.
  filename      = "lambda_getter.zip"
  function_name = "getter"
  role          = aws_iam_role.iam_for_lambda.arn
  handler       = "index.test"

  source_code_hash = data.archive_file.lambda_getter.output_base64sha256

  runtime = "python3.11"

  tags = {
    Projekt = "Zespolowy"
  }
}
data "archive_file" "lambda_update_user" {
  type        = "zip"
  source_file = "update_user.py"
  output_path = "lambda/lambda_update_user.zip"
}

resource "aws_lambda_function" "lambda_update_user" {
  # If the file is not in the current working directory you will need to include a
  # path.module in the filename.
  filename      = "lambda_update_user.zip"
  function_name = "updater_user"
  role          = aws_iam_role.iam_for_lambda.arn
  handler       = "index.test"

  source_code_hash = data.archive_file.lambda_update_user.output_base64sha256

  runtime = "python3.11"

  tags = {
    Projekt = "Zespolowy"
  }
}
