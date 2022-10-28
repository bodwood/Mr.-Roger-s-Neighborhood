function getUserNum(userNum) {
  if (!(Number(userNum))) {
    return false;
  } else {
    const userNumArray = [];
    for(i = 0; i <= userNum; i++){
      userNumArray.push(i);
    }
    return userNumArray;
  }
}

console.log(getUserNum(10));