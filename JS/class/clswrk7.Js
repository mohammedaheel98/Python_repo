function getProperty(obj,key){
    console.log(obj)
}
var obj = {}
var n = parseInt(prompt("enter length of dict"))
for(i=0;i<n;i++){
    obj[i] = prompt("eneter the value")
}
var key = parseInt(prompt("enter key"))
getProperty(obj,key);
