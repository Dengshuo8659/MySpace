$("#id1").click(function(e){
  $("#id2").show();
  e.stopPropagation();
});
$("#id2").click(function(e){
  e.stopPropagation();
});
$(document.body).click(function(){
  $("#id2").hide();
});