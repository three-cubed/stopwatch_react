function to2charString(num) {
    let numString;
                if (num < 10) {
                  numString = '0' + num.toString();
                } else {
                  numString = num.toString();
                }
    return numString;
}

export { to2charString };
