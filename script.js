const userWords = [];

while (userWords.length < 3) {
    const word = prompt("Please enter your words!");

    if (!word) {
        alert("You need to type something");
    } else {
        userWords.push(word);
    }
}

userWords.forEach(function (value) {
    console.log(value);
    const wordListItem = document.createElement("li");
    const wordList = document.getElementById("wordList");
    const textConvert = document.createTextNode(value);

    wordListItem.appendChild(textConvert);
    wordList.appendChild(wordListItem);
});

 const contentPage = document.getElementById("wrapper");
 contentPage.classList.remove("hidden");

