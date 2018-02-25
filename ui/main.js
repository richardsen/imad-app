var button=document.getElementById("counter");
var counter=0;
button.onclick= function () {
  //Make a request 
  var request= new XMLhttpRequest();
  request.onreadystatechange= function (){
      if(request.readyState==XMLhttpRequest.DONE){
          if(request.status==200){
              var counter=respond.responseText;
              var span=document.getElementById();
              span.innerHTML=counter.toString();
          }
      }
      
};
    request.open('GET', 'https://http://richardsen2493.imad.hasura-app.io/', true);
    request.send(null);
};