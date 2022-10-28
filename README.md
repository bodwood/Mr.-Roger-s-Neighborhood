Describe getUserNum()

Test: "This should return 1 if a user enters a number"
Code:
const userNum = 1;
getUserNum(userNum);
Expected Output: 1

Test: "This should return the user's input number"
Code:
const userNum = 12;
getUserNum(userNum);
Expected Output: 12;

Test: "This should return false if the user's input is not a number"
Code:
const userNum = "hello";
getUserNum(userNum);
Expected Output: false;

Test: "This should make an array out of the user's input number"
Code:
const userNum = 10;
getUserNum(userNum);
Expected Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Test: "This should return a string of the array of numbers"
Code:
const userNum = 5;
getUserNum(userNum);
Expected Output: "0, 1, 2, 3, 4, 5";

Test: "This should return 'Beep!' if a 1 is found in the string"
Code:
const userNum = 5;
getUserNum(userNum);
Expected Output: "Beep!";