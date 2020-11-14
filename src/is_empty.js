module.exports = x => (
    (x === null || x === undefined || x === '') ||
    (Array.isArray(x) && x.length === 0) ||
    (typeof x === 'object' && Object.keys(x).length === 0)
);