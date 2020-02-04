function removeproperty(obj,key){
        delete obj[key];
        console.log(obj)
}
var obj = {name:"ahheel",firstname:"mohammed"};
var key = prompt("enter the key");
removeproperty(obj,key);
