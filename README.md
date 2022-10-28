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
Expected Output: "0 1 2 3 4 5";

Test: "This should return 'Beep!' if a 1 is found in the string"
Code:
const userNum = 5;
getUserNum(userNum);
Expected Output: "Beep!";

Test: "This should replace 1 with 'Beep!' if a 1 is found within the array"
Code:
const userNum = 5;
getUserNum(userNum);
Expected Output: "0 Beep! 2 3 4 5";

Test: "This should replace 2 with 'Boop!' if a 2 is found within the array"
Code:
const userNum = 5;
getUserNum(userNum);
Expected Output: "0 Beep! Boop! 3 4 5";

Test: "This should replace 3 with 'Won't you be my neighbor?' if a 2 is found within the array"
Code:
const userNum = 5;
getUserNum(userNum);
Expected Output: "0 Beep! Boop! Won't you be my neighbor? 4 5";

Test: "This should replace any number that contains 1 with Beep! if a 2 is found within the array"
Code:
const userNum = 14;
getUserNum(userNum);
Expected Output: "0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Beep!, Beep!, Beep!";

