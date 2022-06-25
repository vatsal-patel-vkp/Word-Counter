let inputTextArea = document.getElementById("input-text");
let characCount = document.getElementById("Character-count");
let wordCount = document.getElementById("word-count");

// console.log(inputTextArea, characCount, wordCount);

inputTextArea.addEventListener("input", () => {
    //Counts number of characters
    characCount.textContent = inputTextArea.value.length;

    //Removes whitespaces from both the sides of the string
    let txt = inputTextArea.value.trim();

    //Split text at spaces into array of substrings
    //Filter empty strings
    //Count length of this array
    wordCount.textContent = txt.split(/\s+/).filter((item) => item).length;
});