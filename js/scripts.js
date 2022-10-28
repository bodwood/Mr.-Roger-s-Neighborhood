function getUserNum(userNum) {
  if (!(Number(userNum))) {
    return false;
  } else {
    const userNumArray = [];
    for (i = 0; i <= userNum; i++) {
      if (i === 1) {
        userNumArray.push("Beep!");
      } else {
        userNumArray.push(i);
      }
    }
    let userNumArrayString = userNumArray.join(' ');
    return userNumArrayString;

  }
}

console.log(getUserNum(11));