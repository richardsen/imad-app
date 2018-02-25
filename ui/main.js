var button=document.getElementById("counter");
var counter=0;
button.onClick= function () {
  //Make a request 
  
  // Capture response and store it
  
  //Render the variable in the correct span
  counter=counter +1; 
  var span= document.getElementById('count'); 
  span.innerHTML= counter.toString();
  
    
};