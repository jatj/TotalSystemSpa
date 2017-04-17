$(function(){
	$('#chat').on('click', '#chat_textButton', function () {
	    $("#chat_title").slideUp("slow",function(){
	    	$("#chat_textButton").remove();
			$("<div id='chat_text'><p>Escribe tu mensaje</p></div>").insertAfter("#chat_title");
			$("<div id='chat_content'></div>").insertAfter("#chat_title");
			$("#chat_content").hide();
			$("<div id='chat_titleButton'></div>").insertAfter("#chat_title");
			$("#chat_title").remove();
			$("#chat_titleButton").html(
			"<div class='row'><p id='chat_head'><span class='glyphicon glyphicon-comment'></span> Chatea con nosotros</p></div>").promise().done(function(){
			    $("#chat_title").slideDown();
			    $("#chat_content").slideDown();
			});
		});	
	});
	$('#chat').on('click', '#chat_titleButton', function () {
	    $("#chat_content").slideUp("slow",function(){
			$("#chat_content").remove();
			
		});
		$("#chat_titleButton").slideUp("slow",function(){
			$("<div id='chat_title'></div>").insertAfter("#chat_titleButton");
			$("#chat_title").hide();
			$("#chat_titleButton").remove();
			$("#chat_title").html(
			"<p>Chatea con nosotros</p>\
			<span id='chat_img' class='glyphicon glyphicon-comment'></span>").promise().done(function(){
			    $("#chat_title").slideDown();
			});
			$("#chat_text").attr("id","chat_textButton");
		});	
	});
	$('#chatSmall').on('click', '#chat_imgSmall', function () {
	    var chatBig = "	<div id='chat_titleSmall'>"+
							"<div class='row'><p id='chat_head'><span class='glyphicon glyphicon-comment'></span> Chatea con nosotros</p></div>"+
						"</div>"+
						"<div id='chat_content'></div>"+
						"<div id='chat_text'><p>Escribe tu mensaje</p></div>";
		$("#chatSmallContent").slideUp("slow",function(){
			$("#chatSmall").css("width","304px");
			$("#chatSmallContent").html(chatBig);
			$("#chatSmallContent").slideDown();
		});
	});
	$('#chatSmall').on('click', '#chat_titleSmall', function () {
	    var chatSmall = "<span id='chat_imgSmall' class='glyphicon glyphicon-comment'></span>";
		$("#chatSmallContent").slideUp("slow",function(){
			$("#chatSmall").css("width","auto");
			$("#chatSmallContent").html(chatSmall);
			$("#chatSmallContent").slideDown();
		});
	});
});