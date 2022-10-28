# Portfolio

#### By _**Bodie Wood**_

#### _A simple web application that takes a number from a userand returns a list of values from to the user's input._
#### _Numbers with a 1 are replaced with "Beep!"_
#### _Numbers with a 2 are replaced with "Boop!"_
#### _Numbers with a 3 are replaced with "Won't you be my neighbor?"_
#### _There is a hierarchy of subsitutions:"_
#### * _If a number contains a 1 and a 2 and a 3, "Won't you be my neighbor?" is the result_
#### * _Also if a number contains a 1 and a 2, "Boop!"  is the result_

---

## Link

_https://github.com/bodwood/portfolio_

## Github Site

_https://bodwood.github.io/porfolio_

---

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript

## Description

_This web application allows users to input a number and return a result of Beeps!, Boops!, and Won't you be my neighbor?._

_Users can enter a number and view the resulting string of Beeps!, Boops!, Won't you be my neighbor?_

## Setup/Installation Requirements

* _Clone this repository to your desktop._
* _Navigate to the most top directory._
* _Open index.html_

```
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

Test: "This should return Boop! if a 2 is present after 1 of the same number (i.e. 12)"
Code:
const userNum = 12;
getUserNum(userNum);
Expected Output: "0 Beep! Boop! 3 4 5 6 7 8 9 Beep! Beep! Boop!";

Test: "This should return Won't you be my neighbor! if a 3 is present with a number greater than 10"
Code:
const userNum = 13;
getUserNum(userNum);
Expected Output: "0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!. Won't you be my neighbor?";

Test: "This should return Beep! for numbers that contain 1 and are lower than ten
Code:
const userNum = 11;
getUserNum(userNum);
Expected Output: "0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!"
```

## Known Bugs

* __

---

## License

_MIT_
https://choosealicense.com/licenses/mit/

Copyright (c) 2022 _Bodie Wood_