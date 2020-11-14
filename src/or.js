module.exports = (...args) => {
    let output = args[0];
    for (let i = 1; i < args.length - 1 && !output; i++)
        output = output || args[i];
    return output;
};