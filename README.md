Describe getUserNum()

Test: "This should return 1 if a user enters a number"
Code:
const userNum = 1;
getUserNum(userNum);
Expected Output: 1

Test: "This should return the user's inputted number"
Code:
const userNum = 12;
getUserNum(userNum);
Expected Output: 12;

Test: "This should return false if the user's input is not a number"
Code:
const userNum = "hello";
getUserNum(userNum);
Expected Output: false;