{\rtf1\ansi\ansicpg1252\cocoartf2636
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;\f1\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red155\green162\blue177;}
{\*\expandedcolortbl;;\cssrgb\c67059\c69804\c74902;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 1.\
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
5 ??????? Teri\
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

\f1\fs30 \cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 \
}