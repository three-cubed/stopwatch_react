function to2chars(num) {
    let numString;
                if (num < 10) {
                  numString = '0' + num.toString();
                } else {
                  numString = num.toString();
                }
    return numString;
}

function checkNumOverflow(currNum, nextNum, limit) {
                if (currNum >= limit) {
                    nextNum ++;
                    currNum = 0;
                }
                return [currNum, nextNum];
}

export { to2chars, checkNumOverflow };
