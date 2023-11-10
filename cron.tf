# __generated__ by Terraform
# Please review these resources and move them into your main configuration files.

# __generated__ by Terraform from "default/cronjob"
resource "aws_scheduler_schedule" "cron" {
  description                  = "running lambda"
  end_date                     = null
  group_name                   = "default"
  kms_key_arn                  = null
  name                         = "cronjob"
  name_prefix                  = null
  schedule_expression          = "cron(0 * * * ? *)"
  schedule_expression_timezone = "Europe/Warsaw"
  start_date                   = null
  state                        = "ENABLED"
  flexible_time_window {
    maximum_window_in_minutes = 30
    mode                      = "FLEXIBLE"
  }
  target {
    arn      = aws_lambda_function.updater.arn
    input    = null
    role_arn = aws_iam_role.iam_for_lambda.arn
    retry_policy {
      maximum_event_age_in_seconds = 86400
      maximum_retry_attempts       = 0
    }
  }
}
