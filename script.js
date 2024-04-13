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

const contentPage = document.getElementById("wrapper");
 contentPage.classList.remove("hidden");

const btnRed = document.getElementById("redFonts");
btnRed.addEventListener("click", function() {
    renderList(userWords);
    const uList = document.getElementById("wordList");
    uList.classList.add("redWords");
});

// The forEach() method calls a function for each element in an array.//
function renderList (workingArray) {
    let wordList = document.getElementById("wordList");
    wordList.innerHTML = "";
    wordList.classList.remove("redWords");

    workingArray.forEach(function (value) {
        const wordListItem = document.createElement("li");
        const wordList = document.getElementById("wordList");
        const textNode = document.createTextNode(value);

        wordListItem.appendChild(textNode);
        wordList.appendChild(wordListItem);
    }); 
}
//map() creates a new array from calling a function for every array element.//
 function btnCaps() {
    const userWordsCaps = userWords.map(function (wordByUser) {
        let capsWord = wordByUser.toUpperCase();
        return capsWord; 
    })

   renderList(userWordsCaps);
}

function btnSwap () {
    const userWordsSwap = userWords.map(function (wordByUser) {
        let swapWord = wordByUser.charAt(wordByUser.length - 1)+ wordByUser.substring(1,wordByUser.length -1 ) + wordByUser.charAt(0);
        return swapWord;
    })

   renderList(userWordsSwap);
}










 


