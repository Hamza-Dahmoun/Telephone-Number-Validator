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
555-555-5555
(555)5(55?)-5555

 */


function telephoneCheck() {
    let b;
    let str = document.getElementById("textInput").value;
    let numbersReg = /[0-9]/g;
    if(numbersReg.test(str) && str.length == 10){
        b=true
    }
    else{
        
    } 
    return b;
  }
  
  //telephoneCheck("555-555-5555");