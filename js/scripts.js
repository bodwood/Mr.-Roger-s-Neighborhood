//Business Logic
function getUserNum(userNum) {
  if (!(Number(userNum))) {
    return false;
  } else {
    const userNumArray = [];
    for (i = 0; i <= userNum; i++) {
      i = i.toString();
      if ((i.includes('1')) && (i.includes('2')) && !(i.includes('3'))) {
        const oneAndTwo = i.split('');
        let count = 0;
        oneAndTwo.forEach(function (element, i) {
          count++;
          if (element > i && count <= 1) {
            userNumArray.push('Boop!');
          }
        });
      } else if ((i.includes('1')) && (i.includes('3')) && !(i.includes('2'))) {
        const oneAndTwo = i.split('');
        let count = 0;
        oneAndTwo.forEach(function (element, i) {
          count++;
          if (element > i && count <= 1) {
            userNumArray.push("Won't you be my neighbor?");
          }
        });
      } else if ((i.includes('2')) && (i.includes('3')) && !(i.includes('1'))) {
        const oneAndTwo = i.split('');
        let count = 0;
        oneAndTwo.forEach(function (element, i) {
          count++;
          if (element > i && count <= 1) {
            userNumArray.push("Won't you be my neighbor?");
          }
        });
      } else if (i.includes('1') && !(i.includes('2') || i.includes('3'))) {
        userNumArray.push("Beep!");
      } else if (i.includes('2') && !(i.includes('1') || i.includes('3'))) {
        userNumArray.push("Boop!");
      } else if (i.includes('3') && !(i.includes('1') || i.includes('2'))) {
        userNumArray.push("Won't you be my neighbor?");
      } else {
        userNumArray.push(i);
      }
    }
    let userNumArrayString = userNumArray.join(', ');
    return userNumArrayString;
  }
}

console.log(getUserNum(232));