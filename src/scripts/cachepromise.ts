export function cachepromise<T extends (arg: any, ...rgs: any) => Promise<any>>(
    fn: T
): T {
    const sourcecache = new Map();
    return (async (key: any, ...rgs: any) => {
        if (sourcecache.get(key)) {
            return sourcecache.get(key);
        }
        const loadpro = fn(key, ...rgs);
        sourcecache.set(key, loadpro);
        return loadpro;
    }) as T;
}
