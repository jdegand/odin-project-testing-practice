function reverseString(string){
  return string.split('').reduce((a, b) => b + a, '');
}
module.exports = reverseString;
