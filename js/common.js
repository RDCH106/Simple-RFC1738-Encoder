var hexVals = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
              "A", "B", "C", "D", "E", "F");
var unsafeString = "\"<>%\\^[]`\+\$\,";
// deleted these chars from the include list ";", "/", "?", ":", "@", "=", "&" and #
// so that we could analyze actual URLs

function isUnsafe(compareChar)
// this function checks to see if a char is URL unsafe.
// Returns bool result. True = unsafe, False = safe
{
if (unsafeString.indexOf(compareChar) == -1 && compareChar.charCodeAt(0) > 32
    && compareChar.charCodeAt(0) < 123)
   { return false; } // found no unsafe chars, return false
else
   { return true; }
}

function decToHex(num, radix)
// part of the hex-ifying functionality
{
var hexString = "";
while (num >= radix)
      {
       temp = num % radix;
       num = Math.floor(num / radix);
       hexString += hexVals[temp];
      }
hexString += (hexVals[num] + (hexString.length==0?'0':''));
return reversal(hexString);
}

function reversal(s) // part of the hex-ifying functionality
{
var len = s.length;
var trans = "";
for (i=0; i<len; i++)
    { trans = trans + s.substring(len-i-1, len-i); }
s = trans;
return s;
}

function convert(val) // this converts a given char to url hex form
{ return  "%" + decToHex(val.charCodeAt(0), 16); }
