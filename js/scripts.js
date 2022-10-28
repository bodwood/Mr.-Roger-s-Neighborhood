function getUserNum(userNum) {
  if (!(Number(userNum))) {
    return false;
  } else {
    const userNumArray = [];
    for (i = 0; i <= userNum; i++) {
      i = i.toString();
      if (i.includes('1')) {
        userNumArray.push("Beep!");
      } else if (i.includes('2')) {
        userNumArray.push("Boop!");
      } else if (i.includes('3')) {
        userNumArray.push("Won't you be my neighbor?");
      } else {
        userNumArray.push(i);
      }
    }
    let userNumArrayString = userNumArray.join(', ');
    return userNumArrayString;
  }
}
console.log(getUserNum(14));