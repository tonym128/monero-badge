# Monero Badge Problem
## Problem Statement
Here's a static encrypted badge, decode the secret message and get the real live full display, full LED, full on one!

The badge contains text on the front and back and the punters must decode them to win. 

After decoding it, we ask them to use the same key to encode their own name, or a string of our choosing and DM or tweet us and we'll give them a prize.

@tonym128 or @elasticninja

## What's the solution

1) You need to copy the back and front hex to a computer. 
2) Front gives you '70 65 6c 63 67 62 20 7a 72 6e 61 66 20 70 65 6c 63 67 62 20 7a 72 6e'
3) Back gives you '28 00 00 00 00 00 0c 4d 36 14 1e 16 52 0e 13 17 57 07 4f 50 08 11 41 0a 1c 47 43 1b 17 50 00 07 45 4d 15 0e 1e 06 0f 13 0b 50 17 00 4d 04 06 4d 4e 10 41 11 06 16 1f 1a 43 00 0c 0b 05 4e 1e 4f 15 1b 1c 50 07 0a 52 04 00 12'
4) Ascii the front to 'pelcgb zrnaf pelcgb zrn'
5) Ascii the back to 'gibberish'
6) Front seems like something we can work with... what should we do ... Rot-13 ? give us - 'crypto means crypto mea'
7) GAP - Common security operations ? rot-13 , sha, md5 ... Oh there's a ^ which is the common keyword for XOR!
8) Convert Front back to hex - '63727970746f206d65616e732063727970746f206d6561'
9) XOR Front with back 'Krypto, Superman's pet '
10) Isn't complete, need to extend the string 'crypto means crypto means'
11) Gets me 'Krypto, Superman's pet do', guess I expect a g , 'crypto means crypto means ' gets me that
12) Try double up , 'crypto means crypto means crypto means crypto means', get 'Krypto, Superman's pet dog in the popu/py)gt"$k(/~21'
13) Roll back the garbage to 'crypto means crypto means crypto meanscrypto means ', get 'Krypto, Superman's pet dog in the popular comic, ca'
14) Double up and remove extra hex characters, gets me 'crypto means crypto means crypto meanscrypto means crypto means crypto mea' as the key, hex is '63727970746f206d65616e732063727970746f206d65616e732063727970746f206d65616e7363727970746f206d65616e732063727970746f206d65616e732063727970746f206d6561'

15) Done, use that to encrypt our random string for you