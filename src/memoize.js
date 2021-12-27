import {json} from "mocha/lib/reporters";

export function memoize(fn) {
    if (typeof fn !== 'function') return null;
    const cache = {};

    return (arg) => {
        const key = JSON.stringify(arg) + ':' + typeof arg;
        if (cache[key] !== undefined)
            return cache[key];
        cache[key] = fn(arg);
        return cache[key];
    };
}
