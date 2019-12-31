'use strict';
const { getPage, parsePage, db } = require('./utils');

module.exports.scrape = (event, context, callback) => {
  const details = event; // avoid changing variable names on the flight for confusion sake
  //  fetch the page 
  getPage(details)
  //  parse the page   
  .then(page => parsePage(page))
  //  save ratings to db
  .then(stars => db(stars, details))
  
  .then(()=>{
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Seems like that went well and was added to the db',
          input: event,
        },
        null,
        2
      ),
    });
  })
  .catch(error => {
    cb(new Error(`Error scraping: ${JSON.stringify(error)}`));
  });
};
