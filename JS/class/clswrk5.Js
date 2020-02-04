function getNthElement(a,b){
    if (a.length == 0){
        console.log("undefined")
    }
    else{
        console.log(a[b])
    }
}
var a = []
var n = parseInt(prompt("enter length of array"))
for(i=0;i<n;i++){
    a[i] = parseInt(prompt("enter"))
}
var b = parseInt(prompt("enter index"))
getNthElement(a,b);
