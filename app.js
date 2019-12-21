//******************************* Telephone Number Validator */
/**
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number.
The following are examples of valid formats for US numbers (refer to the tests below for other variants): 

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf.
Your job is to validate or reject the US phone number based on any combination of the formats provided above.
The area code is required. If the country code is provided, you must confirm that the country code is 1.
Return true if the string is a valid US phone number; otherwise return false.

TRUE:
555-555-5555
1 555-555-5555
1 (555) 555-5555
5555555555
555-555-5555
(555)555-5555
1(555)555-5555
1 555 555 5555
1 456 789 4444
- with country code: starts with number and then white space or parenthesis and then full phone number
- without country code: contains only 10 numbers + dash or white space after third and sixth digit 


FALSE:
555-5555
5555555
1 555)555-5555
123**&!!asdf#
55555555
(6054756961)
2 (757) 622-7382 
0 (757) 622-7382 
-1 (757) 622-7382
2 757 622-7382
10 (757) 622-7382
27576227382
(275)76227382
2(757)6227382
2(757)622-7382
555)-555-5555
(555-555-5555
(555)5(55?)-5555 ??

 */


function solution() {
    //'str' is the phone number entered by user
    let str = document.getElementById("textInput").value;
    //'b' is boolean variable
    let b;

    // Set up your Booleans here
    let hasTenDigits = false;
    let hasElevenDigits = false;
    let startsWithOne = false;
    let hasPermittedCharsOnly = false;
    let hasCorrectParentheses = false;

    // Write regular expressions here so that the Booleans contain the correct values
    // INSERT CODE WITH REGEX HERE

    let hasTenDigitsRegEx = /^\D*(\d\D*){10}$/;
    //console.log(hasTenDigitsRegEx.test("555-555-5555"));
    let hasElevenDigitsRegEx = /^\D*(\d\D*){11}$/;
    //console.log(hasElevenDigitsRegEx.test("1 555-555-5555"));
    let startsWithOneRegEx = /^1/;
    let hasCorrectParenthesesRegEx = /\([0-9]{3}\)/;
    let hasParenthesis = /[\(\)]/;

    // Use the Booleans to return true or false, without needing to string together one complex regular expression
    if (!hasTenDigitsRegEx.test(str) && !hasElevenDigitsRegEx.test(str)) {
        b = false;
        document.getElementById("result").innerText = b.toString().toUpperCase();
        return b;
    } else if (!hasItPermittedCharsOnly(str) || (!hasCorrectParenthesesRegEx.test(str) && hasParenthesis.test(str))) {
        b = false;
        document.getElementById("result").innerText = b.toString().toUpperCase();
        return b;
    } else if (hasElevenDigitsRegEx.test(str) && !startsWithOneRegEx.test(str)) {
        b = false;
        document.getElementById("result").innerText = b.toString().toUpperCase();
        return b;
    } else {
        b = true;
        document.getElementById("result").innerText = b.toString().toUpperCase();
        return b;
    }
}
solution("555-555-5555");