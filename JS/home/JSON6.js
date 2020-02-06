var arr= [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
function transformEmployeeData(arr)
{
    var d=[]
    var obj={}
    for(i=0;i<arr.length;i++)
    {   obj={}
        for(j=0;j<arr[i].length;j++)
        {
            obj[arr[i][j][0]]=arr[i][j][1];
    
        }
        d.push(obj)
    }    
    return d;
}
console.log(transformEmployeeData(arr));
