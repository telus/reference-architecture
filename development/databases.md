# Databases

## Why

Occasionally we need persistent, relational data, when we need longer-term storage than [caching](caching.md), e.g. for collecting orders, storing metrics or other shared data.

## What

Our OpenShift cluster is peered with our "Data VPC", AKA "Virtual Private Cloud". We have Terraform playbooks that manage the use of [Amazon RDS](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html) to create managed relational databases in the cloud.

## How

If you need a new RDS instance, accessible to either sandbox or main clusters, submit a pull request to our Data VPC Terraform repositories, respectively:

- [Data VPC MAIN](https://github.com/telus/terraform-openshift-datavpc-main)
- [Data VPC SANDBOX](https://github.com/telus/terraform-openshift-datavpc-sandbox)

To gain access to Amazon IAM, you can submit a pull request to the Data VPC IAM Terraform repository:

- [Data VPC IAM](https://github.com/telus/terraform-openshift-datavpc-iam)

### Best practices

- Any databases storing personal information must go through a security review
- Avoid "database integration" by ensuring that you aren't sharing one database between multiple apps. Instead, front it with a shared microservice that provides a contract for communicating with the database.
- TODO... more!

### Database access

To access your database to manually load some data you can run a container in OpenShift containing the CLI interface for the database you have provisioned. For example, to run a container containing `psql` to access your [PostgreSQL](https://www.postgresql.org) instance using the OpenShift web console you can:

- visit the project you wish to deploy into
- click the "Add to Project" dropdown in the top-right corner
- select the "Deploy Image" option
- select the "Image Name" radio button
- supply a Postgres image name from the [Red Hat Image Catalog](https://access.redhat.com/containers/)
    - e.g. `registry.access.redhat.com/rhscl/postgresql-10-rhel7`
- click the magnifying glass button to load the image details
- supply a value for the "name" field
    - e.g. `pg-cli`
- enter a value for the `POSTGRESQL_ADMIN_PASSWORD` environment variable
    - you're only making use of the CLI; this password won't be used to control access to the database, it's just necessary that it be set to avoid errors spinning up PostgreSQL
- Click "Deploy"
- Visit `Applications` > `Pods` and find the pod you just deployed
- Click through to see the detail page for the pod
- Select the "Terminal" tab to launch a terminal inside the running pod
- Once the shell spawns, run `psql` to begin your session

*Please note*: you'll need to create an IAM user to have access to the AWS project where your DB instance was initialized. This is useful for monitoring your database instances via e.g. RDS metrics. This IAM account is _not_ used for access to the database itself. The username/password used for database access is defined in the [main](https://github.com/telus/terraform-openshift-datavpc-main) or [sandbox](https://github.com/telus/terraform-openshift-datavpc-sandbox) terraform files. The password you supply in those files is temporary; please contact Delivery to have them replaced with the actual password you will use.

Please see below for more information:
- https://github.com/telus/terraform-openshift-datavpc-main#passwords
- https://github.com/telus/delivery/blob/master/playbooks/aws-changing-rds-password.md

## Who

@delivery

## References

- [RDS Docs](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html)
- [Terraform RDS module](https://github.com/telus/terraform-aws_rds_cluster)
- [Data VPC MAIN](https://github.com/telus/terraform-openshift-datavpc-main)
- [Data VPC SANDBOX](https://github.com/telus/terraform-openshift-datavpc-sandbox)
- [Data VPC IAM](https://github.com/telus/terraform-openshift-datavpc-iam)
