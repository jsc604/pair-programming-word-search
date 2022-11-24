const wordSearch = (letters, word) => {
    if (letters.length === 0 || word.length === 0) {
      return false;
    }
    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalJoin = letters[0].map((col, index) =>
      letters.map((row) => row[index])
    );
    const verticalSent = verticalJoin.map((ls) => ls.join(''));
    for (let l of horizontalJoin) {
      if (l.includes(word)) {
        return true;
      } else {
        for (let l of verticalSent) {
          if (l.includes(word)) {
            return true;
          }
        }
      }
    }
    return false;
  };
    
module.exports = wordSearch;