var CryptoJS = require("crypto-js");
var AES = require("crypto-js/aes");
var SHA256 = require("crypto-js/sha256");
var SHA512 = require("crypto-js/sha512");

var username = 'Onicra123';
var password = 'Onicra@123';
var lblChallange = '4801140289027224379';
var salt = 'kr9rk';

var toSend = {};


var passwordHash = CryptoJS.MD5(password);
var challenge = lblChallange;
var fhashValue = SHA512(salt + passwordHash.toString() + salt);
toSend.shashValue = SHA512(challenge + fhashValue).toString();
var leng = password.length;
toSend.ps = '';
for (var i = 0; i < leng; i++)
    toSend.ps += "r";

console.log(toSend);