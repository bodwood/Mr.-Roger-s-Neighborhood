function getUserNum(userNum) {
  if (!(Number(userNum))) {
    return false;
  } else {
    const userNumArray = [];
    for(i = 0; i <= userNum; i++){
      userNumArray.push(i);
    }
    let userNumArrayString = userNumArray.join(' ');
    if(userNumArrayString.includes('1')){
      return 'Beep!';
    }else{
    return userNumArrayString;
    }
  }
}

console.log(getUserNum(0));