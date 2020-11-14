const {URL} = require('url');
const urlBase = process.env.HBSX_APP_URL || process.env.APP_URL;

module.exports = x => {
	try {
		return new URL(x, urlBase).href;
	}
	catch(e) {
		return urlBase + x;
	}
};