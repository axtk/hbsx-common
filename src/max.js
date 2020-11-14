module.exports = (...args) => Math.max.apply(null, args.slice(0, -1));
