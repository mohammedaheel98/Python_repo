var obj={name:"vijay",age:30,haspet:"true"};
a=[]
Object.entries(obj).forEach(([key,val])=>
{
    a.push(val);
    console.log(a);
});
