var expected = {foo: 6, bar: 5};
var actual = {foo: 5, bar: 6};
function assertObjectsEqual(actual,expected)
{
    if (Object.keys(actual).length !== Object.keys(expected).length)
    {
        console.log("failed [my test] expected"+JSON.stringify(expected)+","+"but got"+JSON.stringify(actual))
        return;
    } 
    for (i in actual)
    {
        console.log(i)
        if(actual[i] !== expected[i])
        {   console.log("failed [my test] expected"+JSON.stringify(expected)+","+"but got"+JSON.stringify(actual))
            return;
        }
        else{
            console.log("passed")
        }
    }
}
assertObjectsEqual(actual,expected)
