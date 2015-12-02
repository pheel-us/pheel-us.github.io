$(document).ready(function(){ 


$(function(){
  $('img').each(function(e){
    var src = $(".snobama").attr('src');
    $(".invisible").hover(function(){
      $(".snobama").attr('src', src.replace('images/snobama1.jpg', 'images/snobama.gif'));
    }, function(){
      $(".snobama").attr('src', src);

    });
  });
});

var divs = $("div.obama").get().sort(function(){ 
  return Math.round(Math.random())-0.5; //random so we get the right +/- combo
}).slice(0,1)
$(divs).show();

});