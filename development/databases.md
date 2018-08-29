# Databases

## Why

Occasionally we need persistent, relational data, when we need longer-term storage than [caching](caching.md), e.g. for collecting orders, storing metrics or other shared data.

## What

Our OpenShift cluster is peered with our "Data VPC", AKA "Virtual Private Cloud". We have Terraform playbooks that manage the use of [Amazon RDS](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html) to create managed relational databases in the cloud.

## How

If you need a new RDS instance, accessible to either sandbox or main clusters, submit a pull request to our Data VPC Terraform repositories, respectively:

- [Data VPC MAIN](https://github.com/telusdigital/terraform-openshift-datavpc-main)
- [Data VPC SANDBOX](https://github.com/telusdigital/terraform-openshift-datavpc-sandbox)

To gain access to Amazon IAM, you can submit a pull request to the Data VPC IAM Terraform repository:

- [Data VPC IAM](https://github.com/telusdigital/terraform-openshift-datavpc-iam)

### Best practices

- Any databases storing personal information must go through a security review
- Avoid "database integration" by ensuring that you aren't sharing one database between multiple apps. Instead, front it with a shared microservice that provides a contract for communicating with the database.
- TODO... more!

## Who

@delivery

## References

- [RDS Docs](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html)
- [Terraform RDS module](https://github.com/telusdigital/terraform-aws_rds_cluster)
- [Data VPC MAIN](https://github.com/telusdigital/terraform-openshift-datavpc-main)
- [Data VPC SANDBOX](https://github.com/telusdigital/terraform-openshift-datavpc-sandbox)
- [Data VPC IAM](https://github.com/telusdigital/terraform-openshift-datavpc-iam)
