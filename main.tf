# __generated__ by Terraform
# Please review these resources and move them into your main configuration files.

# __generated__ by Terraform from "d1ku3c7glap9vr"
resource "aws_amplify_app" "my_amp" {
  access_token                  = var.github_oauth_token # sensitive
  auto_branch_creation_patterns = []
  build_spec                    =  <<-EOT
version: 1
applications:
  - frontend:
      phases:
        build:
          commands: []
      artifacts:
        baseDirectory: /
        files:
          - '**/*'
      cache:
        paths: []
    appRoot: html
EOT
  custom_headers                = null
  description                   = null
  enable_auto_branch_creation   = false
  enable_basic_auth             = false
  enable_branch_auto_build      = false
  enable_branch_auto_deletion   = false
  environment_variables = {
    AMPLIFY_DIFF_DEPLOY       = "false"
    AMPLIFY_MONOREPO_APP_ROOT = "html"
  }
  iam_service_role_arn = null
  name                 = "ProjektZespolowy-html"
  oauth_token          = var.github_oauth_token # sensitive
  platform             = "WEB"
  repository           = "https://github.com/gadom654/projektzespolowy"
  tags = {
    Projekt = "ProjektZespolowy"
  }
  tags_all = {
    Projekt = "ProjektZespolowy"
  }
  custom_rule {
    condition = null
    source    = "/<*>"
    status    = "404-200"
    target    = "/index.html"
  }
}
resource "aws_amplify_branch" "amplify_branch" {
  app_id = aws_amplify_app.my_amp.id
  branch_name = var.branch_name
}
resource "aws_amplify_domain_association" "domain_association" {
  app_id      = aws_amplify_app.my_amp.id
  domain_name = var.domain_name
  wait_for_verification = false

  sub_domain {
    branch_name = aws_amplify_branch.amplify_branch.branch_name
    prefix      = var.branch_name
  }

}
output "amplify_app_id" {
  value = aws_amplify_app.my_amp.id
}

output "amplify_app_url" {
  value = aws_amplify_domain_association.domain_association.domain_name
}
# __generated__ by Terraform
# Please review these resources and move them into your main configuration files.

# __generated__ by Terraform from "alergydata"
resource "aws_dynamodb_table" "allergy" {
  billing_mode                = "PROVISIONED"
  deletion_protection_enabled = false
  hash_key                    = "alergy"
  name                        = "alergydata"
  range_key                   = null
  read_capacity               = 1
  restore_date_time           = null
  restore_source_name         = null
  restore_to_latest_time      = null
  stream_enabled              = false
  stream_view_type            = null
  table_class                 = "STANDARD"
  tags                        = {}
  tags_all                    = {}
  write_capacity              = 1
  attribute {
    name = "alergy"
    type = "S"
  }
  point_in_time_recovery {
    enabled = false
  }
  ttl {
    attribute_name = ""
    enabled        = false
  }
}
# __generated__ by Terraform
# Please review these resources and move them into your main configuration files.

# __generated__ by Terraform from "usersdata"
resource "aws_dynamodb_table" "users" {
  billing_mode                = "PROVISIONED"
  deletion_protection_enabled = false
  hash_key                    = "user"
  name                        = "usersdata"
  range_key                   = null
  read_capacity               = 1
  restore_date_time           = null
  restore_source_name         = null
  restore_to_latest_time      = null
  stream_enabled              = false
  stream_view_type            = null
  table_class                 = "STANDARD"
  tags                        = {}
  tags_all                    = {}
  write_capacity              = 1
  attribute {
    name = "user"
    type = "S"
  }
  point_in_time_recovery {
    enabled = false
  }
  ttl {
    attribute_name = ""
    enabled        = false
  }
}
