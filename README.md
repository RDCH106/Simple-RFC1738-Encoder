# Simple-RFC1738-Encoder
Simple URL Encoder and Decoder according to RFC 1738

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
