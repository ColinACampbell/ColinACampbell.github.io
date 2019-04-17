// contains functions that descibe how (a) element(s) are to be treated in the DOM
$(document).ready(()=>{
    controlHorizontalDivider();
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