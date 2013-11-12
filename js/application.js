function onDeviceReady()
{
	console.log("PhoneGap is ready to rock");
	TemplateLoader.loadTemplates(["home", "about", "level2"], function()
	{
		views.home();
	});
}

$(function () {
	if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
        document.addEventListener("deviceready", onDeviceReady, false);
    } else {
        onDeviceReady();
    }
});