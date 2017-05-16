var clicks = 1;
function showDiv() {
    if (clicks == 1) {
        document.getElementById('menu').style.cssText = "width: 250px; border-left: 1px solid white;";
        document.getElementById('selectors').style.display = "block";
        clicks++;
    }
    else 
    {
        document.getElementById('menu').style.cssText = "width: 0px; border: none;";
        document.getElementById('selectors').style.display = "none";  
        clicks--;
    }
}
