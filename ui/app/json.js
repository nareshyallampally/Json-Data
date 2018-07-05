$(document).ready(function() {
  $("#btnload").click(function(){
  	

  $.getJSON("data.json").done(function(payload){
       
    var load=payload.data;
  
      $("#displaydata").html(load);
  });
     
});
    $("#btnreceive").click(function(){
  	
var store = $("#staticEmail").val();
  $.post("name.php",{name:store },function(payload){
        
      $("#receivedata").html(payload);
  });
     
});
  
});