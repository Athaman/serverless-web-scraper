const uuid = require('uuid');
const AWS = require('aws-sdk');

const dynamo = new AWS.DynamoDB.DocumentClient();

module.exports = (stars, details) => {
    const { user, repository } = details;
    const date = JSON.stringify(new Date());
    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Item: {
            id: uuid.v1(),
            user: user,
            repository: repository,
            stars: stars,
            scrapedAt: date
        }
    };

    dynamo.put(params, error => {
        if(error) {
            console.error(`Error returned from db on save ${JSON.stringify(error)}`);
            return Promise.reject(`Error returned from db on save ${JSON.stringify(error)}`);
        } else {
            return Promise.resolve(params.Item);
        }
    });
}