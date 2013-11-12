$(function () {
	$('a').on('click tap', function()
	{
		if ($(this).attr('href').substr(0,1) == '#')
		{
			var called = $(this).attr('href').replace('#', '');
			views[called]();
		}
	});
});