

$(document).ready(function()
{

	$("#add_user").click(function()
	{
		var fname = $("#fname1").val();
		var lname = $("#lname1").val();
		var description = "<h4>" + $("#description1").val() + "</h4>";
		var descrip1 = "<h5>Click for description!</h5>"; 
		var markup = "<div class = 'listbutton' ><h2>" + fname + " " + lname + "</h2>" + descrip1 + description +"</div>";
		
	 	$("#contact_add").append(markup);
	 	$("h4").css("display", "none");

	});


 	$(document).on("click", ".listbutton", function()
 		{

 			var test = $("h2").css("display");
 			$(this).children().toggle();
 			

 			console.log(test);

 		});




});