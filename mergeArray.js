function mergeArray () {
    const array1 = ["a", "b", "c"];
    const array2 = [1, 2, 3];
    const merge = [...array1, ...array2];

    console.log(merge)
}
// mergeArray()
module.exports = mergeArray