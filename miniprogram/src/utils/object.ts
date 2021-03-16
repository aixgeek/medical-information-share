export const removeEmpty = (obj) => {
    return Object.entries(obj)
        .filter(([_, v]) => v != null && v != '')
        .reduce(
            (acc, [k, v]) => ({ ...acc, [k]: v === Object(v) ? removeEmpty(v) : v }),
            {}
        );
}

// 投机取巧式
export const omit = (obj, uselessKeys) =>
    uselessKeys.reduce((acc, key) => {
        return { ...acc, [key]: undefined }
    }, obj)

// 中规中矩式
// const omit = (obj, uselessKeys) =>
//    Object.keys(obj).reduce((acc, key) =>
//       return uselessKeys.includes(key) ?
//         acc : 
//         {...acc, [key]: acc[key]}
//    }, {});

export const groupBy = (xs, key) => {
    return xs.reduce((rv, x) => {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};