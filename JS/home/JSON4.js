var arr=["GUVI", "I", "am", "Geek"];
obj={}
function transformFirstAndLast()
{
    obj[arr[0]]=arr[arr.length-1];
    return obj;
}
transformFirstAndLast();
console.log(obj);
