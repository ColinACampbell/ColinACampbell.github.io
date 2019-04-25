// contains functions that descibe how (a) element(s) are to be treated in the DOM
$(document).ready(()=>{
    controlHorizontalDivider();
    controlHeaderVisibility(); // works nowhere else, but in the .ready function
    navContainerControl()
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
            //header.hide();
            header.animate({top:"-70px"},1000)
            hideNav();
            headerVisible = false;
        } else
        {
            //header.show();
            header.animate({top:"0px"},1000)
            showNav();
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

/******   Regarding the navigation container   ******/

function navContainerControl()
{
    isNavVisible = false;
    if (window.outerWidth >= 902)
    {
        isNavVisible = true;
    }

    if ( isNavVisible )
    {
        showNav();
    } else
    {
        hideNav();
    }
}

function showNav()
{
    let nav = $("#nav-container");
    nav.animate({right:"0px"},1000)
}

function hideNav()
{
    let nav = $("#nav-container");
    nav.animate({right:"-250px"},1000)
}
