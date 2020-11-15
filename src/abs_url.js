const {URL} = require('url');

module.exports = x => {
	const urlBase = process.env.HBSX_APP_URL || process.env.APP_URL;

	try {
		return new URL(x, urlBase).href;
	}
	catch(e) {
		return urlBase + x;
	}
};