//Write a JavaScript function to count vowels in a string | "javascript" → 3
const string = "javascript";

const vowelsNumber = (string) => {
    const vowels = ["a", "e", "i", "o", "u"];
    let cont = 0;
    string.split("").forEach(letter => { if (vowels.includes(letter)) cont++ })
    return cont
}

console.log(vowelsNumber(string))