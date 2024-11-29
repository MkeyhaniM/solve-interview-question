export default function removeZeros (arrayNames:number[]){
    let i = 0;
 
    while(i < arrayNames.length){
        if(arrayNames[i]==0){
            arrayNames.splice(i,1);
        } else{
            i++;
        }
    }
 
    return arrayNames;
 }
 