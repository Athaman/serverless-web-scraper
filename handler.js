'use strict';
const { getPage, parsePage, db } = require('./utils');

module.exports.scrape = async event => {
  const details = event; // avoid changing variable names on the flight for confusion sake
  //  fetch the page 
  getPage(details)
  //  parse the page   
  .then(page => parsePage(page))
  //  save ratings to db
  .then(stars => db(stars, details))
  
  .then(()=>{
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Seems like that went well and was added to the db',
          input: event,
        },
        null,
        2
      ),
    };
  })
  .catch(error => {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Something went horribly wrong',
        error: error
      })
    }
  });
};
