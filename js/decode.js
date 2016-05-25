// Needs to be converted to normal chars
function decode(url)
{
	var len     = url.length;
	var backlen = len;
	var i       = 0;
	
	var newStr  = "";
	var frag    = "";
	var encurl  = "";
	var original = url;
	
	
	while (backlen > 0)
	{
		lastpercent = url.lastIndexOf("%");
		if (lastpercent != -1) // we found a % char. Need to handle
		{
			// everything *after* the %
			frag = url.substring(lastpercent+1,url.length);
			// re-assign url to everything *before* the %
			url  = url.substring(0,lastpercent);
			if (frag.length >= 2) // end contains unencoded
			{
				//  alert ("frag is greater than or equal to 2");
				encurl = frag.substring(0,2);
				newStr = frag.substring(2,frag.length) + newStr;
				//convert the char here. for now it just doesn't add it.
				if ("01234567890abcdefABCDEF".indexOf(encurl.substring(0,1)) != -1 &&
				"01234567890abcdefABCDEF".indexOf(encurl.substring(1,2)) != -1)
				{
					encurl = String.fromCharCode(parseInt(encurl, 16)); // hex to base 10
					newStr = encurl + newStr; // prepend the char in
				}
				// if so, convert. Else, ignore it.
			}
			// adjust length of the string to be examined
			backlen = lastpercent;
			// alert ("backlen at the end of the found % if is: " + backlen);
		}
		else { newStr = url + newStr; backlen = 0; } // if there is no %, just leave the urlue as-is
	} // end while	
	
	return newStr;
	
}