const transpose = require('./matrixTransposition');

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

    const reverseJoin = reverse.map(ls => ls.join(''));
    
    for (l of reverseJoin) {
        if (l.includes(word)) {
            return true;
        }
    }

    const vertical = transpose(letters);
    const verticalJoin = vertical.map(ls => ls.join(''));

    for (l of verticalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }

    return false;
}

module.exports = wordSearch