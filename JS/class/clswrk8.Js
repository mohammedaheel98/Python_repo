function addProperty(myobj,myproperty){
        myobj[myproperty] = true;
        console.log(myobj)
}
var myobj = {};
addProperty(myobj,"myproperty");
