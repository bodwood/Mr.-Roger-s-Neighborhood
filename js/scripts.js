function getUserNum(userNum) {
  if (!(Number(userNum))) {
    return false;
  } else {
    return userNum;
  }
}

console.log(getUserNum('two'))