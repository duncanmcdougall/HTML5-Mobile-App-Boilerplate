var views = {

	home : function()
	{
		$('#content').html(TemplateLoader.templates['home']);
	},
	
	about : function()
	{
		$('#content').html(TemplateLoader.templates['about']);
	},
	
	level2 : function()
	{
		$('#content').html(TemplateLoader.templates['level2']);
	}
}