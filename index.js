module.exports = arr => {
    let len = arr.length;
    let r = Math.floor(len * Math.random());
    return arr[r];
};