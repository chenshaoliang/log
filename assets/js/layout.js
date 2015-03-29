$(function(){
	$("head").append(head);
	$("[data-type=ajax]").each(function(){
		var $this = $(this),
			$url = $this.attr("data-url");
		load($this,$url);
	});
});
function load(el,url){
	$.get(url, function(result){
		if(el){
		    $(el).html(result);
		}else{
			return false;
		}
  });
}
var head = '<link href="../styles/semantic.min.css?body=1" media="all" rel="stylesheet" type="text/css" />'+
			'<link href="../styles/log.css?body=1" media="all" rel="stylesheet" type="text/css" />'+
			'<meta name="description" content="Common form elements and layouts"/>';