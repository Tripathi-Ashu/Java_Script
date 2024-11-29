// generate a random colour 

const randomcolor = function()
{
    const hex = "0123456789ABCDEF"
    let color = "#";
    for(let i=0; i<6 ; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
};
let interweId ;
const start = function() {
    
    if(!interweId){
        interweId = setInterval(changeBg, 1000);

    }
    function changeBg(){
        document.body.style.backgroundColor = randomcolor();
    };
   
};
const stop = function() {
    clearInterval(interweId);
    interweId = null;
};

document.querySelector("#start").addEventListener
("click" , start)
document.querySelector("#stop").addEventListener
("click" , stop)