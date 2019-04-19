// contains functions that descibe how (a) element(s) are to be treated in the DOM
$(document).ready(()=>{
    controlHorizontalDivider();
    controlHeaderVisibility(); // works nowhere else, but in the .ready function
    showNotif();
});


function controlHorizontalDivider()
{
    let windowWidth = window.outerWidth;
    if ( windowWidth >= 561) // for anything above mobile
    {
        $('.criminal').hide();
    } else
    {
        $('.midget-hr').hide();
    }
}

function controlHeaderVisibility()
{
    let headerVisible = true;
    let header = $("header");
    $(document).dblclick(()=>{
        if ( headerVisible)
        {
            header.hide();
            headerVisible = false;
        } else
        {
            header.show();
            headerVisible = true;
        }
    })
}

function showNotif()
{
    let notifDiv = $("#notification");
    notifDiv.animate({left:"5px"},1000);
}

function hideNotif()
{
    let notifDiv = $("#notification");
    notifDiv.animate({left:"-350px"},1000);
}