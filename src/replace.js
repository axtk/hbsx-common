module.exports = (s, pattern, replacement, flags) => {
    flags = typeof flags === 'string' ? flags : 'g';
    return s.replace(new RegExp(pattern, flags), replacement);
};