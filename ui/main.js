var counter=0;
var button=document.getElementById("counter");
button.onClick= function () {
  //Make a request 
  
  // Capture response and store it
  
  //Render the variable in the correct span
  counter=counter +1; 
  var span= span.getElementById('count'); 
  span.innerHTML= counter.toString();
  
    
};