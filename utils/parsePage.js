const cheerio = require('cheerio');

module.exports = page => {
    try {
        const $ = cheerio.load(page);
        const stars = $('.js-social-count.social-count').text().trim();

        return Promise.resolve(stars);
    } catch (error) {
        return Promise.reject(`Error parsing page ${JSON.stringify(error)}`);
    }
}