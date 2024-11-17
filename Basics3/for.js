// for 

for(let index = 0; index < 10; index++){
    const element = index;
    if(element ==  5){
        console.log("5 is best");       
    }
    console.log(element);
}

let muArray = ["flash" ,"batman" , "superman"]
console.log(muArray.length)

for(let index = 0; index <= muArray.length; index++)
{
    const element = muArray[index];
    console.log(element);
}

// break and continue
for(let index = 0; index <= 20; index++)
    {
        if( index == 5)
        {
            console.log("Dected 5");
            break;
        }
        console.log(`value of ${index}`);
        
    }
    for(let index = 0; index <= 20; index++)
        {
            if( index == 5)
            {
                console.log("Dected 5");
                continue;
            }
            console.log(`value of ${index}`);
            
        }