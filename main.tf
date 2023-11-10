 provider "aws" {
   region = var.region

   default_tags {
     tags = {
       hashicorp-learn = "circleci"
     }
   }
 }
