//Business Logic
function getUserNum(userNum) {
  if (!(Number(userNum))) {
    return 'Try again' + '\n Please enter a number';
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


//UI Logic
window.addEventListener("load", function () {
  const form = document.getElementById("form");
  form.addEventListener("submit", handleInput);
});

function handleInput(event) {
  event.preventDefault();


  const userInput = document.querySelector("#userInput").value;
  const answer = document.getElementById("answer");
  const resetBtn = document.getElementById("btn_reset");
  const reverseBtn = document.getElementById("btn_reverse")
  const formBody = document.getElementById("formBody");
  const hiddenDiv = document.getElementById("hiddenDiv");

  formBody.setAttribute("class", "hidden");
  hiddenDiv.removeAttribute("class", "hidden");

  const outputAnswer = getUserNum(userInput);
  answer.innerText = outputAnswer;

  reverseBtn.addEventListener('click', function(){
   const reverseArray = outputAnswer.split(', ');
   answer.innerText = reverseArray.reverse().join(', ');
  });

  resetBtn.addEventListener('click', function() {
    location.reload();
  });
  resetPage();
}

function resetPage(){
  document.getElementById("form").reset();
}