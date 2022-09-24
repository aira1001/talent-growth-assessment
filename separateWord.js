const string = "One of the recommended food from japan is Sushi";
const findWord = "Sushi"

const separateWord = function(){
    const array = string.split(" ")
    const filter = array.filter((v) => v == findWord)
    console.log(filter.toString())
}

// separateWord()
module.exports = separateWord;