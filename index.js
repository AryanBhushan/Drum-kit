for(var i=0;i<7;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
          ValueAsign(this.innerHTML);
          AnimationButton(this.innerHTML);
       });
}

document.addEventListener("keypress",function(event){
   ValueAsign(event.key);
   AnimationButton(event.key);

});

function AnimationButton(key)
{
    var activeButton=document.querySelector("."+key);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
    
 
}
function ValueAsign(values){
    switch (values) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "l": 
        var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;               
        default: alert("error");
            break;
    }
}