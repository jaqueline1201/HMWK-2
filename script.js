const userWords = [];

while (userWords.length < 3) {
    const word = prompt("Please enter your words!");
    debugger;
    if (!word) {
        alert("You need to type something");
    } else {
        userWords.push(word);
    }
}
