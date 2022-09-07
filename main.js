function NumberOfwords(text){
    var vowels=["a","e","i","o","y"]
    var j =0 ;
    var Vow=0;
    for (var i=0 ; i<text.length ; i++){
         if(text[i]==" "){
             j++;
         }
         else if(text[i]=="."){
             if(text[i-1]!==" "){
                 j++;
             }
             else{
                 break;
             }

         }else if(vowels.includes(text[i])){
             Vow++;
         }
    }
    return {numberOfWords:j,
        numberOfVowels: Vow
    } ;
}

const tab1=[3, 1, 7, 9];
const tab2=[2, 4, 1, 9, 3]

function Distinct(x,y){
    var sum =0;
    for (var i=0 ; i<x.length ; i++){
         if(y.includes(x[i])==false){
             sum=sum+x[i]; 
         }
}
    for (var i=0 ; i<y.length ; i++){
         if(x.includes(y[i])==false){
             sum=sum+x[i]; 
         }
    }


return sum;
}

console.log(Distinct(tab1,tab2));