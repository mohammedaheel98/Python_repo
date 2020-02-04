function areBothOdd(a,b){
    if (a % 2 != 0 && b % 2 != 0){
        console.log("true")
    }
    else{
        console.log("false")
    }
}
var a = parseInt(prompt())
var b = parseInt(prompt())
areBothOdd(a,b);
