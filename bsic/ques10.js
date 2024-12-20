function isPalindrome(str) {
    for (let i = 0; i <(str.length / 2); i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false; 
        }
    }
    return true; 
}
const input = "1001";
const input1 = "racecar"
console.log(isPalindrome(input));
console.log(isPalindrome(input1));