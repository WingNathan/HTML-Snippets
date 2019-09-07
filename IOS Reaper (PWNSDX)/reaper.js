function reaper() {
    var blank;
    var execute;

    if((navigator.userAgent.match(/iPhone|iPad/i)) || (navigator.userAgent.match(/iPod/i))){

var temp = confirm("Continue Respring?"); 
    if (temp == true) {
       execute = confirm("Are you sure?")
       if (execute == true){
           reapiosdevice()
       }
      else {
         alert("Canceled")
       }
   } 
    else {
       alert("Canceled");
   }
    }
    else {alert("This Reaper only works on IOS Devices")}


    function reapiosdevice(){
        window.location.replace("Reaper.html") //Payload HTML

        

       
       
        }


}
