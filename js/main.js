$(function(){
	$('.hex-container').click(function(){
		copyToClipboard(this);
		$(this).addClass("copied");
		setTimeout($.proxy(function() {
			$(this).removeClass("copied");
		}, this), 1500);

	});

});

function copyToClipboard(element) {
	var hexcode = $(element).find('.code').text();
	var $temp = $("<input>");
	$("body").append($temp);
	console.log(hexcode);
	$(".title").css("background-color", hexcode);
	$temp.val(hexcode).select();
	document.execCommand("copy");
	$temp.remove();
}
