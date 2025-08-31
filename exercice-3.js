//Invertir un string -> "hola" → "aloh"

const string = "hola";

// const reverceString = string.split('').reverse().join('')
// console.log(reverceString)

function reverceStringTwo(string) {
    let reverceString = ""

    for (let i = string.length - 1; i >= 0; i--) {
        reverceString += string[i]
    }
    return reverceString

}

console.log(reverceStringTwo(string))