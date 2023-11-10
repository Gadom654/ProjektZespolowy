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
  tags = {
    Projekt = "ProjektZespolowy"
  }
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
  tags = {
    Projekt = "ProjektZespolowy"
  }
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

