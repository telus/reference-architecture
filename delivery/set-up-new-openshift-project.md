# How to set up or move your pipeline into a separate Openshift project

## Set up Openshift access & permissions for your team

1. Ensure all the users in the team are set up in [users.yaml](https://github.com/telusdigital/openshift-cluster-provisioning/blob/master/ocp/users.yaml).

2. Ensure your squad is set up with all your users in [squads.yaml](https://github.com/telusdigital/openshift-cluster-provisioning/blob/master/ocp/squads.yaml).

3. Ensure your project is set up with your squad in [projects.yaml](https://github.com/telusdigital/openshift-cluster-provisioning/blob/master/ocp/projects.yaml). 
The recommendation is to name your project as close to the name of the repository.

4. As soon as your PR(s) are approved, automation should kick in and create your project automatically.

**Note:** Do not create the project manually in the UI. You should not be able to see the "Create project" button; if you do, please contact the Delivery Team.

## Set up your Jenkins instance

Clone the Openshift Jenkins Starter Kit (https://github.com/telusdigital/openshift-jenkins-starter-kit) and select the new project with `oc project ...`. Run `./openshift/install.sh` to set up your Jenkins instance. Wait for it to be up (so you can see your "pretty" Jenkins UI 😛 ).

## Run your first Openshift deployment

You should now be able to set up your project's pipeline in the same project, by running `./openshift/install.sh` from your app's repo. 

**Note:** If you are trying to move your existing pipeline into a separate Openshift project, you might run into issues if your pipeline setup is really outdated, but you are using the latest install scripts for your Jenkins instance. Please consider updating your project to align as much as possible with the starter kit. 
