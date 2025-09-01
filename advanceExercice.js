//Write a JavaScript function to find the longest word in a sentence | "Today is a beautiful day" → "beautiful"

const sentence = "Today is a beautiful day"

const longestWord = (sentence) => {
    let words = sentence.split(" ")
    let longestWord = ""
    words.map(words => { if (words.length > longestWord.length) longestWord = words })

    console.log(longestWord)
}

longestWord(sentence)

