const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''));
    const reverse = []

    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }

    for (l of letters) {
        reverse.push(l.reverse());
    }

    for (l of reverse) {
        if (l.includes(word)) {
            return true;
        }
    }
    return false;
}

module.exports = wordSearch