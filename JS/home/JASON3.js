var obj={name:"vijay",age:30,haspet:"true"};
x=[]
Object.entries(obj).forEach(([key,val])=>{
    x.push([key,val]);
    console.log(x)
});
