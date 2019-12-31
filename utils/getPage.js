const request = require('request-promise');

module.exports = details => {
    const { user, repository } = details;
    const url = `https://www.github.com/${user}/${repository}`;
    return request({
        method: 'GET',
        url: url
    });
}