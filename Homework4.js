/Task 1
let a=+prompt()
let b=+prompt()
let c=+prompt()
let arr=[]
for(let i=a;a<=b && i<=b;i+=c){
        arr.push(i)
    
}
console.log(arr)

//Task 2

function theNumberOfOccurences(string,j){
    let count=0;
    for(let i=0;i<string.length;i++){
        if(string[i]===j)
        count+=1;
    }
    
    return count
}

//Task 3
function palindrome(str) {
 
 let length = str.length;
 for (let i = 0; i < length/2; i++) {
   if (str[i] !== str[length - 1 - i]) {
       console.log('no');
   }
 }
 console.log('yes');
}


//Task 4
function getMaxElement(arr){
   return Math.max(...arr)
}

//Task 5
function productBtw2neighbElements(arr){
    let result=[]
    for(let i=0;i<arr.length-1;i++){
            result.push(arr[i]*arr[i+1])
        }
    return result
}

//Task 6
function changeTheSymbols(str,firstsymbol,secondsymbol){
    let result=''
    for(let i=0;i<str.length;i++){
        if(str[i]===firstsymbol){
            result+=secondsymbol
        }    else{
            result+=str[i]          
        }   
    }
    return result
}

//myus tarberak
function changeTheSymbols(str,firstsymbol,secondsymbol){
    for(let i=0;i<str.length;i++){
        if(str[i]===firstsymbol){
            str=str.replace(firstsymbol,secondsymbol)
        }    
    }
    return str
}

//Task 7
function drawRow(count){
    let row=''
    for(let i=1;i<=count;i++){
        row+=i
        
    }
    return row
}

function numberPuttern(num){
    let result=''
    for(let i=1;i<=num;i++){
      result+= drawRow(i)+ '\n' 
           
    }
    for(let i=num-1;i>=1;i--){
         result+= drawRow(i)+ '\n'   
        }
    return result
}
