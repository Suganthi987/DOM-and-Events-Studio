
// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init(){
    const takeOff = document.getElementById("takeoff");
    const landing = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const left = document.getElementById("left");
    const right = document.getElementById("right");
    const paragraph1 = document.getElementById("flightStatus");
    const background1 = document.getElementById("shuttleBackground");
    const paragraph2 = document.getElementById("spaceShuttleHeight");
    const image = document.getElementById("rocket");

    takeOff.addEventListener("click",function(event){
        
        if( window.confirm("Confirm that the shuttle is ready for takeoff.") === true){
            paragraph1.innerHTML = "Shuttle in flight.";
            background1.style.backgroundColor = "blue";
            paragraph2.value = "10000";
            paragraph2.innerHTML = parseInt(paragraph2.value);
        }
    
    });

    landing.addEventListener("click",function(event){
        window.alert("The shuttle is landing. Landing gear engaged.");
        paragraph1.innerHTML = "The shuttle has landed.";
        background1.style.backgroundColor = "green";
        parseInt(paragraph2.value) = 0;
        paragraph2.innerHTML = parseInt(paragraph2.value);

    });

    missionAbort.addEventListener("click",function(event){
        if(window.confirm("Confirm that you want to abort the mission.")===true){
            paragraph1.innerHTML = "Mission aborted";
            background1.style.backgroundColor = "green";
            parseInt(paragraph2.value) = 0;
            paragraph2.innerHTML = parseInt(paragraph2.value);
        }
        

    });

    up.addEventListener("click",function(event){
        image.style.height = parseInt(image.style.height) + 10;
        paragraph2.innerHTML = parseInt(paragraph2.value) + 10000;

    });
    
    down.addEventListener("click",function(event){
        image.style.height = parseInt(image.style.height) - 10;
        paragraph2.innerHTML = parseInt(paragraph2.value) - 10000;

    });

    left.addEventListener("click",function(event){
         image.style.left = parseInt(image.style.left) + 10;
        
    });

    right.addEventListener("click",function(event){
        image.style.right = parseInt(image.style.right) - 10;
        
    });



    
}
window.addEventListener("load",init);

