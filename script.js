//Task 1
const palindromeInput = document.getElementById('palindrome_input')
const palindromeRes = document.getElementById('palindrome_res')
function checkPalindrome() {
    const string = palindromeInput.value.toLowerCase()
    //reverseString
    const revString = palindromeInput.value.toLowerCase().split('').reverse().join('')
    if (string === revString) {
        palindromeRes.textContent = 'True'
    } else {
        palindromeRes.textContent = 'False'
    }
}

//Task 2
const reverseInput = document.getElementById('reverse_input')
const reverseRes = document.getElementById('reverse_result')

function reverseString() {
    reverseRes.textContent = reverseInput.value.split('').reverse().join('')
}

//Task 3
const stringValue = document.getElementById('string_value')
const charValue = document.getElementById('character_value')
const resCalc = document.getElementById('res_calc')
function getCount() {
    const str = stringValue.value.split('')
    let counter = 0;
    for (let i = 0; i <= str.length; i++) {
        if (str[i] === charValue.value) {
            counter++;
        }
    }
    resCalc.textContent = counter.toString();
}