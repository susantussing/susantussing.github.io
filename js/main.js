var switchDiv = function(oldDiv, newDiv){
    $(oldDiv).hide("slide", { direction: "right", easing: "easeInOutExpo" }, 1200);
    $(newDiv).delay(1300).show("slide", { direction: "left", easing: "easeInOutExpo" }, 1200);
};

$(document).ready(function(){
    $('#first').show("slide", { direction: "left", easing: "easeInOutExpo" }, 800);
    $('#first span.hilite').on('click',function(e){
       e.preventDefault();
       switchDiv('#first', '#second');
    });
    $('#second span.hilite').on('click',function(e){
       e.preventDefault();
       switchDiv('#second', '#final');
    });
});