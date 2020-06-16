# CI/CD with Google Cloud Build and Cloud Run

### I was experimenting with CI/CD on GCP 
#### prerequisites

* Google Cloud Project
* Enable billing for the project
* Enable relevant APIs (e.g cloud build API)

## Steps
* A simple node.js application that display text on screen/browser
* A Dockerfile builds docker image of the node.js app 
* On Cloud build page on GCP, connect to your git repo(s)
* Create a trigger and leverage cloudbuild.yaml file for Continuous Integration
* Make sure Cloud build has Cloud Run admin right to be able to write to it
* The endpoint of your deployment on cloud run is like https://[clou-run-service-name]-[some-google-string]-[region].a.run.app

Here is a Google documentation for cloudbuild.yaml template https://cloud.google.com/cloud-build/docs/deploying-builds/deploy-cloud-run









