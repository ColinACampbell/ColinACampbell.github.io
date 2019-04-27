// contains functions that descibe how (a) element(s) are to be treated in the DOM
$(document).ready(()=>{
    controlHorizontalDivider();
    controlHeaderVisibility(); // works nowhere else, but in the .ready function
    controlNavbar();
    showNotif();

    $('#btn-holder').on('click touchstart', function() {
        console.log("Hello world");
    });
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
            headerVisible = false;
        } else
        {
            //header.show();
            header.animate({top:"0px"},1000)
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
function controlNavbar()
{ 
    let  navVisible = false;
    if ( window.innerWidth >= 902)
    {
        navVisible = true;
    }

    let _nav = document.getElementById("nav-container")

    if (navVisible)
    {
        showNav()
    } else if (_nav.style.right === "0px")
    {
        hideNav();
    } else if (_nav.style.right === "-250px")
    {
        showNav();
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
