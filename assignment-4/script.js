var names = new Array();
names[0] = "Yaakov";
names[1] = "John";
names[2] = "jen";
names[3] = "Jason";
names[4] = "Paul";
names[5] = "jrank";
names[6] = "Larry";
names[7] = "Paula";
names[8] = "Laura";
names[9] = "Jim";

for(var i=0;i<names.length;i++){
    if(names[i].charAt(0)==='J'  ||  names[i].charAt(0)==='j'){
        console.log("Goodbye " + names[i]);
    }
    else{
        console.log("Hello " + names[i]);
    }
}