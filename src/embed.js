const {readFileSync} = require('fs');
const {join, extname} = require('path');
const QueueCache = require('../lib/QueueCache');
const {markError} = require('../lib/breakpoint')('embed');

const {
    HBSX_EMBED_DIR = './',
    HBSX_EMBED_CACHE_SIZE = process.env.NODE_ENV === 'production' ? 100 : 0,
    HBSX_EMBED_SVG_DEFAULT_HEIGHT,
} = process.env;

const cacheSize = Number(HBSX_EMBED_CACHE_SIZE);

if (Number.isNaN(cacheSize))
    markError('Cache size is not a number');

if (process.env.NODE_ENV === 'production' && cacheSize < 1)
    markError(
        'Disabling cache in production will result in ' +
        'reoccurrence of blocking fs.readFileSync()'
    );

const cache = new QueueCache(cacheSize);

module.exports = (filePath, {hash}) => {
    let s = '';

    if (cache.has(filePath))
        s = cache.get(filePath);
    else {
        try {
            s = readFileSync(join(process.cwd(), HBSX_EMBED_DIR, filePath)).toString();
            cache.set(filePath, s);
        }
        catch (e) {
            markError(`Failed to find file '${filePath}'`);
        }
    }

    if (s && extname(filePath) === '.svg') {
        let attrs = Object
            .entries({
                height: HBSX_EMBED_SVG_DEFAULT_HEIGHT,
                ...hash,
            })
            .map(([k, v]) => v != null && `${k}="${v}"`)
            .filter(Boolean)
            .join(' ');

        if (attrs) s = s.replace(/<svg(\s+[^>]+)?>/, `<svg ${attrs}$1>`);
    }

    return s;
};