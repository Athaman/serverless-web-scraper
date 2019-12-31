'use strict';
const { getPage, parsePage, db } = require('./utils');

module.exports.scrape = async event => {

  //  fetch the page 
  getPage(event)
    .then(page => console.log(page));
  //  parse the page 

  //  save ratings to db

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};
