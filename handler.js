'use strict';

module.exports.hello = async event => {

  //  fetch the page 

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
