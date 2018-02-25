//counter code
var button=document.getElementById("counter");
button.onclick= function () {
  //Make a request 
  var request= new XMLhttpRequest();
 //capture the response and store in a new var
  request.onreadystatechange= function (){
      if(request.readyState===XMLhttpRequest.DONE){
         //Take action
          if(request.status===200){
              var counter=request.responseText;
              var span=document.getElementById('count');
              span.innerHTML=counter.toString();
          }
      }
      
};
    request.open('GET', 'https://http://richardsen2493.imad.hasura-app.io/', true);
    request.send(null);
};