var array = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
obj={}
function fromListToObject()
{
    for(i=0;i<array.length;i++)
    {
        obj[array[i][0]]=array[i][1]
    }
    return obj;
}
fromListToObject();
console.log(obj);
