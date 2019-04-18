// contains functions that descibe how (a) element(s) are to be treated in the DOM
$(document).ready(()=>{
    controlHorizontalDivider();

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