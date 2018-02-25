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
    request.open('GET', 'https://http://richardsen2493.imad.hasura-app.io/counter', true);
    request.send(null);
};
//Submit name
var nameInput=document.getElementById('name');
var name= nameInput.value();
var submit=document.getElementById('submit_button');
submit.onclick= function(){
    //make request to server and send name, capture the names and render as a list
    var names= [name1,name2,name3];
    var list='';
    for(var i=0; i<=names.length;i++){
        list +='<li>'+ names(i) '</li>';
    }
    var ul=document.getElementById('name_list');
    ul.innerHTML=list;
};