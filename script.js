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
    const textNode = document.createTextNode(value);

    wordListItem.appendChild(textNode);
    wordList.appendChild(wordListItem);
});

 const contentPage = document.getElementById("wrapper");
 contentPage.classList.remove("hidden");

function btnCaps() {
    const userWordsCaps = userWords.map(function (wordByUser) {
        let capsWord = wordByUser.toUpperCase();
        return capsWord; 
    })
    console.log(userWordsCaps);
    let wordList = document.getElementById("wordList");
    wordList.innerHTML = "";

    userWordsCaps.forEach(function (capsValue){
        const capsNode = document.createTextNode(capsValue);
        const wordListItem = document.createElement("li");
        const wordList = document.getElementById("wordList");
        
        wordListItem.appendChild(capsNode);
        wordList.appendChild(wordListItem);
    });
}

function btnRed() {
    const userWordRed = user
}



 


