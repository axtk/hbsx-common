const ErrorMode = {
    SILENT: 'silent',
    WARN: 'warn',
    ERROR: 'error',
};

const {HBSX_ERROR_MODE = ErrorMode.ERROR} = process.env;

module.exports = submodule => {
    return {
        markError(message) {
            if (message)
                message = `[hbs-helpers: ${submodule}] ${message}`;

            switch (HBSX_ERROR_MODE) {
                case ErrorMode.SILENT:
                    return;
                case ErrorMode.WARN:
                    return console.warn(message);
                default:
                    throw new Error(message);
            }
        },
    }
};