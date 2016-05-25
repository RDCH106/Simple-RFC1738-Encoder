
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

function convertToURL(str){ return encode(str) };
function convertToString(url){ return decode (url)};

