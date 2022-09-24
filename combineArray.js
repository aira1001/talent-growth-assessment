const array1 = ["a", "b", "c"];
const array2 = [1, 2, 3]
function combineArray(array1, array2){
    const array_length = array1.length + array2.length;
    const newArray = [];
    let j = 0, k = 0;
    for(let i = 0; i < array_length; i++){
        if(i%2 == 0){
            newArray[i] = array1[j++]
        }else{
            newArray[i] = array2[k++]
        }
    }
    return newArray;
}

const print = () => {
    console.log(combineArray(array1, array2))
}

// print();
module.exports = print