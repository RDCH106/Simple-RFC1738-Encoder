// Needs to be converted to str encoded chars
function encode(str)
{
	var len     = str.length;
	var backlen = len;
	var i       = 0;
	
	var newUrl  = "";
	var frag    = "";
	var encstr  = "";
	var original = str;
	
	
	for (i=0;i<len;i++)
	{
		if (str.substring(i,i+1).charCodeAt(0) < 255)  // hack to eliminate the rest of unicode from this
		{
			if (isUnsafe(str.substring(i,i+1)) == false)
			{ newUrl = newUrl + str.substring(i,i+1); }
			else
			{ newUrl = newUrl + convert(str.substring(i,i+1)); }
		}
		else // woopsie! restore.
		{
			alert ("Found a non-ISO-8859-1 character at position: " + (i+1) + ",\nPlease eliminate before continuing.");
			newUrl = original; i=len;                // short-circuit the loop and exit
		}
	}
		
    return newUrl;
	
}