### Task 2 (Serve SPA in AWS S3 and Cloudfront Services)

[amazonaws.com](http://drmrc-first-app.s3-website-eu-west-1.amazonaws.com/).
[cloudfront.net](https://d1m5fsrfmqycli.cloudfront.net/).

[amazonaws.com](http://drmrc-second-app.s3-website-eu-west-1.amazonaws.com/).
[cloudfront.net](https://dckcs9y8q11rb.cloudfront.net/).

Serverless Finch

```
   npm i serverless-finch
   serverless create --template aws-nodejs --path ./sl
    yarn cloudfront:update:build:deploy
```
