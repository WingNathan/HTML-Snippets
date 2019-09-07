

   function getiosversion(){
    if((navigator.userAgent.match(/iPhone|iPad/i))){
    userAgentString = navigator.userAgent;
     var correct = confirm("Are these details correct?                                " + navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/));
    if (correct == true){alert("Thank you for visiting the website :)")}
    else {alert("IOS Detection failed :(")}
    }
  else{alert("Please Access this via an IOS Device")}


}     

function webkitdetection() {
    var blank;
    var execute;

    if((navigator.userAgent.match(/iPhone|iPad/i))){

var temp = confirm("Continue script?"); 
    if (temp == true) {
        userAgentString = navigator.userAgent;
        var correct = confirm("Are these details correct?                                " + userAgentString);
       if (correct == true){alert("Thanks for testing this JS execution on your IDevice")}
       else {alert("JS Execution failed")}
       }
      else {
         alert("Canceled")
       }
    }
    else {alert("Please Access this via an IOS Device ")}
}

function grabip() {
   
    if((navigator.userAgent.match(/iPhone|iPad/i))){
    $.getJSON("http://jsonip.com?callback=?", function (data) {
        alert("Your External IP is: " + data.ip);
    });
    }
    else{alert("Please Access this via an IOS Device")}

}
