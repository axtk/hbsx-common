module.exports = (x, options) => {
    let {tab} = options.hash || options || {};
    return typeof tab === 'number' ? JSON.stringify(x, null, tab) : JSON.stringify(x);
};