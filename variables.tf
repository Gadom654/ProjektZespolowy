variable "github_oauth_token" {
  description = "OAuth token for GitHub repository access"
  type        = string
  sensitive   = true
}
variable "app_name" {
  type        = string
  description = "AWS Amplify App Name"
  default     = "my-amp"
}

variable "branch_name" {
  type        = string
  description = "AWS Amplify App Repo Branch Name"
  default     = "main"
}


variable "domain_name" {
  type        = string
  default     = "awsamplifyapp.com"
  description = "AWS Amplify Domain Name"
}

variable "region" {
  description = "The region where AWS resources will be created"
  type        = string
  default     = "eu-central-1" 
}

