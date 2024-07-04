
/* Button */
const button = document.getElementById('check-btn');
const input = document.getElementById('text-input');
const resultSentence = document.getElementById('result').querySelector('p');
button.addEventListener('click', buttonClicked);

function buttonClicked(){
  const inputValue = input.value;

  if(inputValue === ""){

    alert("Please input a value");

  } else {

    var isPalindrome = checkPalindrome(inputValue);
    if(isPalindrome){
      resultSentence.innerHTML = `<span>${inputValue}</span> is a Palindrome`;

    } else {
      resultSentence.innerHTML = `<span>${inputValue}</span> is not a Palindrome`;
    }
  }

}

function removeWhiteSpace(inputValue){
  //remove non-alphaneumeric characters
  const newInputValue = inputValue.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  return newInputValue;
}

function reverseText(inputValue){
  inputValue = removeWhiteSpace(inputValue);
  //split into array for each character
  const strArray = inputValue.split('');
  //reverse array
  strArray.reverse();
  //join arraay into string
  return strArray.join("");
}

function checkPalindrome(inputValue){
 var isPalindrome;
 inputValue = removeWhiteSpace(inputValue);
 const reversedInputValue = reverseText(inputValue);
 console.log(inputValue + " , " + reversedInputValue);

 if(inputValue === reversedInputValue){
   isPalindrome = true;
 } else {
   isPalindrome = false;
 }

 return isPalindrome;
}