const request = require('request-promise');

module.exports = businessName => {
    // construct business url 
    //  https://www.yelp.com/biz/{businessName}

    const url = `https://www.yelp.com/biz/${businessName}`;
    return request({
        method: 'GET',
        url: url
    });
}