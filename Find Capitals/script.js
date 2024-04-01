let capitals = function (word) {
    let arr = []
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) {
            arr.push(i);
        }
    }

    if (arr.length === 0) {
        return 'No capital letters found!';
    }
    else {
        return arr;
    }
}

console.log(capitals('JavascripT'));