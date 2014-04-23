$(function(){
	$("body").on("click", "#toolbar button", function(){
		var self = $(this);
		var type = self.data().type;
		var render = jade.render("article-" + type);
		var el = $(render);
		el.attr("data-type", type);
		$("#article-sections").append(el);
	});

	//tweet
	$("body").on("change", ".article-tweet", function(){
		var parent = $(this).parent();
		var url = $(this).val();
		if(!url){
			return;
		}
		parent.find(".tweet-display").html('<blockquote class="twitter-tweet" lang="en"><a href="'+url+'"></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>');
	});
})