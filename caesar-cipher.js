/*

var plaintext = "DEFEND THE EAST WALL OF THE CASTLE";
var key = 3;
var ciphertext = "";
var regex = /[a-z]/;

for(i=0; i<plaintext.length; i++){
   if(regex.test(plaintext.charAt(i))) ciphertext += String.fromCharCode((plaintext.charCodeAt(i) - 97 + key)%26 + 97);
   else ciphertext += plaintext.charAt(i);
}

// deciphering
var plaintext2 = "";
for(i=0; i<ciphertext.length; i++){
    if(regex.test(ciphertext.charAt(i))) plaintext2 += String.fromCharCode((ciphertext.charCodeAt(i) - 97 + 26 - key)%26 + 97);
    else plaintext += ciphertext.charAt(i);
}

*/

// uppercase doesn't work in that example

const caesarCipher = {

 encipher: function(plaintext, key){
  let ciphertext = '';
  let regex = /[a-z]/;

  for(let i=0; i<plaintext.length; i++){
     if(regex.test(plaintext.charAt(i))){
        ciphertext += String.fromCharCode((plaintext.charCodeAt(i) - 97 + key)%26 + 97);
     } else {
      //ciphertext += plaintext.charAt((i + key));
      ciphertext += String.fromCharCode((plaintext.charCodeAt(i) - 65 + key)%26 + 65);
   }
  }
  return ciphertext;
},

decipher: function(ciphertext, key){
  let plaintext2 = "";
  let regex = /[a-z]/;
  for(let i=0; i<ciphertext.length; i++){
      if(regex.test(ciphertext.charAt(i))){
         plaintext2 += String.fromCharCode((ciphertext.charCodeAt(i) - 97 + 26 - key)%26 + 97);
      } else {
         //plaintext2 += ciphertext.charAt(i);
         plaintext2 += String.fromCharCode((ciphertext.charCodeAt(i) - 65 + 26 - key)%26 + 65);
      }
  }
  return plaintext2;
}

}

module.exports = caesarCipher;
