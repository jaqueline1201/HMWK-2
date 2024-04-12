const userWords = [];

while (userWords.length < 3) {
    const word = prompt("Please enter your words!");

    if (!word) {
        alert("You need to type something");
    } else {
        userWords.push(word);
    }
}

renderList(userWords);
// The forEach() method calls a function for each element in an array.//
function renderList (workingArray) {
    workingArray.forEach(function (value) {
        console.log(value);
        const wordListItem = document.createElement("li");
        const wordList = document.getElementById("wordList");
        const textNode = document.createTextNode(value);

        wordListItem.appendChild(textNode);
        wordList.appendChild(wordListItem);
    });
}
 const contentPage = document.getElementById("wrapper");
 contentPage.classList.remove("hidden");

//map() creates a new array from calling a function for every array element.//
 function btnCaps() {
    const userWordsCaps = userWords.map(function (wordByUser) {
        let capsWord = wordByUser.toUpperCase();
        return capsWord; 
    })
    console.log(userWordsCaps);
    let wordList = document.getElementById("wordList");
    wordList.innerHTML = "";

   renderList(userWordsCaps);
}



function btnSwap () {
    const userWordsSwap = userWords.map(function (wordByUser) {
        let swapWord = wordByUser.charAt(wordByUser.length - 1)+ wordByUser.substring(1,wordByUser.length -1 ) + wordByUser.charAt(0);
        return swapWord;
    })
    console.log(userWordsSwap);
    let wordList = document.getElementById("wordList");
    wordList.innerHTML = "";

   renderList(userWordsSwap);

}










 


