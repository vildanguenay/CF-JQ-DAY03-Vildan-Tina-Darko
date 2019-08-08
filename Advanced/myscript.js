$(document).on("mousemove", function(e){
	$("#moveme").css({
		left: e.pageX - 125,
		top: e.pageY - 125
	});
});

$("#moveme").on("click", function(){
	$("#moveme").css("top", "55vw").fadeOut(2000).fadeIn(2000);
	$(document).off("mousemove");
})
//"margin-top", "20vw"