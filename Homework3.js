1. 

function strLength(s){
    let length=0;
while(s[length]!==undefined){
    length++
}
return length

    }
// let s=[1,12,4]
// strLength(s)
// console.log(s.length)

2. 
function theSumOftheElemetsOfArray(array){
    let sum=0;
    for(let i=0;i<array.length;i++) {
        sum+=array[i]
    }
    return sum
}

// exp: 
// array[1,12,4]
// theSumOftheElemetsOfArray(array)



3. 

function arrayOfPowerOf3(a,b){
    let result=[];
    for(let i=a;i<=b;i++){
        let isPowerOf3=false;
        let j=i;
        while(j>1){
            if (j%3){
              isPowerOf3=false;
                break;
            } else {
                j/=3;
            }
         if (j===1){
            isPowerOf3=true
            break;
        } 
    }
      if(isPowerOf3){
      result.push(i);
}
}
return result;
}

//arrayOfPowerOf3



4 
// hakarak ughutyamb e tpum tivy 

let a=+prompt()
let str=""
while (a!==0){
    if(a%2==0){
       str+=a%10 + "-"       
    }
    else{
       str+=a%10 
    }
   
     a=(a-a%10)/10
 }
console.log(str)



5.
//minchev verj chi stacvel


function primeNumber(array){
    let result=[]
    for(let i=0;i<array.length;i++){
        let n=true
        for(let j=2;j<array[i];j++){
           if (array[i]%j===0){
               return n=false
               break;
           }
        } 
        if(n){
            result.push(array[i])    
        }
    }
    return result
}

