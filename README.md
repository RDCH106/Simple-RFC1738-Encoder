# Simple-RFC1738-Encoder
Simple URL Encoder and Decoder according to [RFC 1738](https://www.ietf.org/rfc/rfc1738.txt)

Try it: [Online Demo](https://rawgit.com/RDCH106/Simple-RFC1738-Encoder/master/demo.html)

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/668cece8833a446e9238438a5913b1d3)](https://www.codacy.com/app/RDCH106/Simple-RFC1738-Encoder?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=RDCH106/Simple-RFC1738-Encoder&amp;utm_campaign=Badge_Grade)

## Url Encoding Explained

##### Why do I need URL encoding?
The URL specification RFC 1738 specifies that only a small set of characters can be used in a URL. Those characters are:

- A to Z (ABCDEFGHIJKLMNOPQRSTUVWXYZ)
- a to z (abcdefghijklmnopqrstuvwxyz)
- 0 to 9 (0123456789)
- $ (Dollar Sign)
- - (Hyphen / Dash)
- _ (Underscore)
- . (Period)
- + (Plus sign)
- ! (Exclamation / Bang)
- * (Asterisk / Star)
- ' (Single Quote)
- ( (Open Bracket)
- ) (Closing Bracket)

##### How does URL encoding work?
All offending characters are replaced by a % and a two digit hexadecimal value that represents the character in the proper ISO character set. Here are a couple of examples:

- $ (Dollar Sign) becomes %24
- & (Ampersand) becomes %26
- + (Plus) becomes %2B
- , (Comma) becomes %2C
- : (Colon) becomes %3A
- ; (Semi-Colon) becomes %3B
- = (Equals) becomes %3D
- ? (Question Mark) becomes %3F
- @ (Commercial A / At) becomes %40

##### Full ASCII Table

![ASCII Table](img/asciifull.gif "ASCII Table and Description")
