/*--------------------------- Object--------*/

const myobject = {
    game1: "Nsa",
    game2: "Nam"
}

for (const key in myobject) {
    console.log(key);
    
}
for (const key in myobject) {
    console.log(`${key} shortcut is for ${myobject[key]}`);
    
}

/*---------------------Array-------*/
const pro = ["js", "jfd" ,"sk","fks"]

for (const key in pro) {
    console.log(key);
    console.log(pro[key]);
}