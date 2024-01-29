# Serverless Projects

This repository contains several projects for working with AWS serverless services. Below are some useful commands for working with specific services:

## S3

- To create an S3 bucket:
    ```bash
    aws s3 mb s3://my-bucket-name
    ```

- To upload a file to an S3 bucket:
    ```bash
    aws s3 cp /path/to/file s3://my-bucket-name
    ```

- To list all objects in an S3 bucket:
    ```bash
    aws s3 ls s3://my-bucket-name
    ```

## Lambda

- To create a new Lambda function:
    ```bash
    aws lambda create-function --function-name my-function --runtime nodejs14.x --handler index.handler --role arn:aws:iam::123456789012:role/my-role --zip-file fileb://function.zip
    ```

- To invoke a Lambda function:
    ```bash
    aws lambda invoke --function-name my-function --payload '{"key1": "value1", "key2": "value2"}' output.txt
    ```

- To update a Lambda function's code:
    ```bash
    aws lambda update-function-code --function-name my-function --zip-file fileb://function.zip
    ```

## API Gateway

- To create a new API Gateway REST API:
    ```bash
    aws apigateway create-rest-api --name my-api
    ```

- To deploy an API Gateway REST API:
    ```bash
    aws apigateway create-deployment --rest-api-id my-api-id --stage-name prod
    ```

- To get the URL of an API Gateway REST API:
    ```bash
    aws apigateway get-rest-api --rest-api-id my-api-id --query 'https://api-id.execute-api.region.amazonaws.com/prod'
    ```

## Cognito

- To create a new Cognito user pool:
    ```bash
    aws cognito-idp create-user-pool --pool-name my-user-pool
    ```

- To create a new Cognito user pool client:
    ```bash
    aws cognito-idp create-user-pool-client --user-pool-id my-user-pool-id --client-name my-client
    ```

- To create a new Cognito user:
    ```bash
    aws cognito-idp sign-up --client-id my-client-id --username my-username --password my-password
    ```

Feel free to explore the different projects in this repository to learn more about using these services.
