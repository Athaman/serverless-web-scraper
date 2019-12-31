'use strict';
const { getPage, parsePage, db } = require('./utils');

module.exports.scrape = async event => {
  //  fetch the page 
  getPage(event)
  //  parse the page   
  .then(page => parsePage(page))
  //  save ratings to db
  .then(stars => db(stars));
  // return {
  //   statusCode: 200,
  //   body: JSON.stringify(
  //     {
  //       message: 'Go Serverless v1.0! Your function executed successfully!',
  //       input: event,
  //     },
  //     null,
  //     2
  //   ),
  // };
};
