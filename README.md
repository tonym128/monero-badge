<article class="markdown-body">

# [<span aria-hidden="true" class="octicon octicon-link"></span>](#monero-badge-problem)Monero Badge Problem

## [<span aria-hidden="true" class="octicon octicon-link"></span>](#problem-statement)Problem Statement

Here's a static encrypted badge, decode the secret message and start the path to getting the real prize!

The badge contains text on the front and back and you must  decode the encrypted message to win.

After decoding it, use the same decode key to encode a string of our choosing tweet us and we'll give you a prize. (44 - 74 characters, to show full solution, and tweet us, plus we have to like your message!)

@tonym128 or @elasticninja

## [<span aria-hidden="true" class="octicon octicon-link"></span>](#where-do-i-see-people-getting-stuck)Where do I see people getting stuck.

### [<span aria-hidden="true" class="octicon octicon-link"></span>](#getting-started)Getting started

This is always hard, but hopefully the hex to pc and ascii check leads them to a simple Rot-13.

### [<span aria-hidden="true" class="octicon octicon-link"></span>](#thinking-crypto-means-crypto-mea-is-a-dead-end)Thinking 'crypto means crypto mea' is a dead end

This is a valid step, need to keep pushing, you'll need that (in some form later)

### [<span aria-hidden="true" class="octicon octicon-link"></span>](#what-to-do-with-the-string-crypto-means-crypto-mea)What to do with the string 'crypto means crypto mea'

Look at the cards very carefully, you're on the right path, but you have to work out what to do with it, there's a symbol that might be a hint.

### [<span aria-hidden="true" class="octicon octicon-link"></span>](#how-do-i-xor-with-too-small-a-string-)How do I XOR with too small a string ?

Try duplication ?

### [<span aria-hidden="true" class="octicon octicon-link"></span>](#still-not-getting-what-i-need-from-the-cypher-when-i-duplicate)Still not getting what I need from the cypher when I duplicate...

*   Look for bad repetition and fudge the data a bit.
*   Something that lets you iterate the Ascii to hex, to encode, very quickly will help a ton, give you very quick instant feedback.
*   If you can guess what the next bit should, it's a matter of hacking your way to it.
*   If you make single character progress, go back to duplication to see if it fits.

## [<span aria-hidden="true" class="octicon octicon-link"></span>](#problem-solution)Problem Solution

*   You need to copy the back and front hex to a computer.
*   Front gives you '70 65 6c 63 67 62 20 7a 72 6e 61 66 20 70 65 6c 63 67 62 20 7a 72 6e'
*   Back gives you '28 00 00 00 00 00 0c 4d 36 14 1e 16 52 0e 13 17 57 07 4f 50 08 11 41 0a 1c 47 43 1b 17 50 00 07 45 4d 15 0e 1e 06 0f 13 0b 50 17 00 4d 04 06 4d 4e 10 41 11 06 16 1f 1a 43 00 0c 0b 05 4e 1e 4f 15 1b 1c 50 07 0a 52 04 00 12'
*   Ascii the front to 'pelcgb zrnaf pelcgb zrn'
*   Ascii the back to 'gibberish'
*   Front seems like something we can work with... what should we do ... Rot-13 ? give us - 'crypto means crypto mea'
*   GAP - Common security operations ? rot-13 , sha, md5 ... Oh there's a ^ which is the common keyword for XOR!
*   Convert Front back to hex - '63727970746f206d65616e732063727970746f206d6561'
*   XOR Front with back 'Krypto, Superman's pet '
*   Isn't complete, need to extend the string 'crypto means crypto means'
*   Gets me 'Krypto, Superman's pet do', guess I expect a g , 'crypto means crypto means ' gets me that
*   Try double up , 'crypto means crypto means crypto means crypto means', get 'Krypto, Superman's pet dog in the popu/py)gt"$k(/~21'
*   Roll back the garbage to 'crypto means crypto means crypto meanscrypto means ', get 'Krypto, Superman's pet dog in the popular comic, ca'
*   Double up and remove extra hex characters, gets me 'crypto means crypto means crypto meanscrypto means crypto means crypto mea' as the key, hex is '63727970746f206d65616e732063727970746f206d65616e732063727970746f206d65616e7363727970746f206d65616e732063727970746f206d65616e732063727970746f206d6561'
*   Done, use that to encrypt our random string for you (44 - 74 characters, to show full solution, and tweet us, plus we have to like your message!)

</article>