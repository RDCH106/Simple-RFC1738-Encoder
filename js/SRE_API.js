
// This function includes all necessary js files for the application
function include(file)
{

  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;

  document.getElementsByTagName('head').item(0).appendChild(script);

}

/* include any js files here */
include('js/common.js');
include('js/encode.js');
include('js/decode.js');
include('js/utf8.js');

function convertToURL(str){ return encode(str) };
function convertToString(url){ return decode (url)};

function convertToURLWithUTF8(str){ return encode(utf8_encode(str)) };
function convertToStringWithUTF8(url){ return utf8_decode(decode (url))};

