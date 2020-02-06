var obj={name:"vijay",age:30,haspet:"true"};
b=[]
Object.entries(obj).forEach(([key,val])=>
{
    b.push(key)
    console.log(b);
});
