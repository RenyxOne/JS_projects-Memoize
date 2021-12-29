function memoizeOne(mfn) {
    const primCache = new Map();
    const objCache = new WeakMap();
    return (arg) => {
        const cache = ((typeof arg === 'object' || typeof arg === 'function') && arg !== null ?
            objCache : primCache);
        if (cache.has(arg) === false) {
            cache.set(arg, mfn(arg));
        }
        return cache.get(arg);
    };
}

export function memoize(fn, len = fn ? fn.length : 0) {
    if (typeof fn !== 'function') {
        return null;
    }
    if (len - 1 < 1) {
        return memoizeOne(fn);
    }
    const res = memoizeOne(x1 => memoize((...args1) => fn(x1, ...args1), len - 1));
    return (x, ...args) => res(x)(...args);
}
