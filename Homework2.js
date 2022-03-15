//Arevik Gevorgyan
//Homework2

 1.\
let value=+prompt()\
     sum=0;\
while (value) \{\
    sum += value%10;\
    value= Math.floor(value/10);\
\}\
    console.log(sum);\
\
\
2. \
\
let a=+prompt()\
let b=+prompt()\
let c=+prompt()\
if (a+b>c && a+c>b && b+c>a) \{\
    console.log('yes')\
\}\
    else \{\
        console.log('no')\
    \}\
\
\
3 .\
\
let value=+prompt()\
     sum=0;\
while (value) \{\
    if (value%10===9)\{\
        sum +=1;\
    \}\
    value= Math.floor(value/10);\
 \
\}\
    console.log(sum);\
\
\
\
\
4.\
\
let a=+prompt()\
 while (a!==0)\{\
     console.log(a%10)\
     a=(a-a%10)/10\
 \}\
\
\
5. //Teri e, chi stacvel
\
let value=+prompt()  \
while (value) \{\
  if(value === 1) \{ \
        console.log('true')\
    \}\
    else if(value % 2 !== 0)  \{ \
        console.log('false')\
    \}\
  value = (value/2);   \
\}\

