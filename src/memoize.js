export function memoize(fn) {
    if (typeof fn !== 'function') return null;
    return () => {};
}
