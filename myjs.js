function displayMenu() {
    if(document.getElementById("second").style.scale != 0 ) {
        document.getElementById("first").style.transition="1s"
        document.getElementById("second").style.transition="1s"
        document.getElementById("third").style.transition="1s"
        document.getElementById("second").style.scale="0";
        document.getElementById("first").style.rotate="-135deg";
        document.getElementById("first").style.marginTop="10px";
        document.getElementById("third").style.rotate="135deg";
        document.getElementById("third").style.marginTop="-20px";
        document.getElementById("navbar-ss").style.width="200px";
        document.getElementById("container").style.width="100vw - 220px";
        document.getElementById("container").style.marginLeft="220px";
        document.getElementById("button-box").style.marginLeft="220px";
        document.getElementById("title-box").style.marginLeft="220px";
        document.getElementById("mnu-title").style.visibility="visible";
    } else if (document.getElementById("second").style.scale == 0){
        document.getElementById("second").style.scale=1;
        document.getElementById("first").style.transition="1s"
        document.getElementById("second").style.transition="1s"
        document.getElementById("third").style.transition="1s"
        document.getElementById("first").style.rotate="0deg";
        document.getElementById("first").style.marginTop="5px";
        document.getElementById("third").style.rotate="0deg";
        document.getElementById("third").style.marginTop="5px";
        document.getElementById("navbar-ss").style.width="75px";
        document.getElementById("container").style.width="100vw - 90px";
        document.getElementById("container").style.marginLeft="90px";
        document.getElementById("button-box").style.marginLeft="90px";
        document.getElementById("title-box").style.marginLeft="90px";
        document.getElementById("mnu-title").style.visibility="hidden";
    }
}
function openDock() {
    document.getElementById("container").style.visibility="visible";
    document.getElementById("title-box").style.visibility="visible";
    document.getElementById("button-box").style.visibility="visible";
}