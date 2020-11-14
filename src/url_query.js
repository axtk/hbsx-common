const {URL} = require('url');

module.exports = (x, options) => {
	try {
		let url = new URL(x);
    	let query = options.hash || options || {};

    	for (let [k, v] of Object.entries(query))
    		url.searchParams.append(k, v);

    	return url.href;
	}
	catch(e) {
		return x;
	}
};