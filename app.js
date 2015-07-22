console.log("Hi");

$(document).ready(function(){
	var clickCounter = 1;

	$(".firstClickButton").on("click", function(){
		$(".text").children().remove();
		$(".text").append("<div id='data-button-toggle' value=1>Here are the number of clicks: " + clickCounter + " </div");
		$(".text").append("<button class='btn1'>Here is button</button>");
		$(".text").append("<button>Here is button #2</button>");
		clickCounter++;
		console.log(clickCounter);
	});

	$(".btn1").on("click", function() {
		$(this).parent().css("backgroun-color:", "red");
	})
	
});
