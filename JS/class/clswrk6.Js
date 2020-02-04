function getLastElement(a){
    if (a.length == 0){
        console.log("undefined")
    }
    else{
        console.log(a[n-1])
    }
}
var a = []
var n = parseInt(prompt("enter length of array"))
for(i=0;i<n;i++){
    a[i] = parseInt(prompt("eneter the value of array"))
}
getLastElement(a);
