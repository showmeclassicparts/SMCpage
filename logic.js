function detailonmiddle(data){
    document.getElementsByClassName("detailcenterbackground")[data].style.display="block";
    document.getElementsByClassName("detailcenter")[data].style.display="block";

}
function closedetailonmiddle(data){
    document.getElementsByClassName("detailcenterbackground")[data].style.display="none";
    document.getElementsByClassName("detailcenter")[data].style.display="none";
}
function side_open() {
    document.getElementById("showsidebar").style.display = "block";
    document.getElementById("showsidebarres").style.display = "block";
    // document.getElementById("showbutton").style.display = "none";
}
function side_close() {
    document.getElementById("showsidebar").style.display = "none";
    document.getElementById("showsidebarres").style.display="none";
    // document.getElementById("showbutton").style.display = "block";
}
function navi_open() {
    document.getElementById("shownavi").style.display = "block";
    // document.getElementById("mainclose").style.display = "none";
    document.getElementById("mainclose").style.display = "block";

}
function navi_close() {
    document.getElementById("shownavi").style.display = "none";
    // document.getElementById("mainclose").style.display = "block";
    document.getElementById("mainclose").style.display = "none";

}


function side1open(){
    document.getElementById("showsidebar").style.display="none";
    document.getElementById("side240z").style.display="block";
}
function side1close(){
    document.getElementById("showsidebar").style.display="none";
    document.getElementById("side240z").style.display="none";
    document.getElementById("showsidebarres").style.display="none";
}
function side1back(){
    document.getElementById("showsidebar").style.display="block";
    document.getElementById("side240z").style.display="none";
}


function side2open(){
    document.getElementById("showsidebar").style.display="none";
    document.getElementById("side510").style.display="block";
}
function side2close(){
    document.getElementById("showsidebar").style.display="none";
    document.getElementById("side510").style.display="none";
    document.getElementById("showsidebarres").style.display="none";
}
function side2back(){
    document.getElementById("showsidebar").style.display="block";
    document.getElementById("side510").style.display="none";
}


function side3open(){
    document.getElementById("showsidebar").style.display="none";
    document.getElementById("side356").style.display="block";
}
function side3close(){
    document.getElementById("showsidebar").style.display="none";
    document.getElementById("side356").style.display="none";
    document.getElementById("showsidebarres").style.display="none";
}
function side3back(){
    document.getElementById("showsidebar").style.display="block";
    document.getElementById("side356").style.display="none";
}

function side4open(){
    document.getElementById("showsidebar").style.display="none";
    document.getElementById("side911").style.display="block";
}
function side4close(){
    document.getElementById("showsidebar").style.display="none";
    document.getElementById("side911").style.display="none";
    document.getElementById("showsidebarres").style.display="none";
}
function side4back(){
    document.getElementById("showsidebar").style.display="block";
    document.getElementById("side911").style.display="none";
}


function side5open(){
    document.getElementById("showsidebar").style.display="none";
    document.getElementById("sidevwt25").style.display="block";
}
function side5close(){
    document.getElementById("showsidebar").style.display="none";
    document.getElementById("sidevwt25").style.display="none";
    document.getElementById("showsidebarres").style.display="none";
}
function side5back(){
    document.getElementById("showsidebar").style.display="block";
    document.getElementById("sidevwt25").style.display="none";
}



function side6open(){
    document.getElementById("showsidebar").style.display="none";
    document.getElementById("sidew113").style.display="block";
}
function side6close(){
    document.getElementById("showsidebar").style.display="none";
    document.getElementById("sidew113").style.display="none";
    document.getElementById("showsidebarres").style.display="none";
}
function side6back(){
    document.getElementById("showsidebar").style.display="block";
    document.getElementById("sidew113").style.display="none";
}
var sidebar=document.getElementById('showsidebar');
var allb=document.getElementById('containerall');
var leftbut=document.getElementById('showbutton');

function closepop(){
    sidebar.style.display = "none";
}
function closeall(){
    // document.getElementsByClassName("columnsidebar20pop");
    document.getElementById("showsidebarres").style.display="none";
    document.getElementById("showsidebar").style.display="none";
    document.getElementById("side240z").style.display="none";
    document.getElementById("side510").style.display="none";
    document.getElementById("side356").style.display="none";
document.getElementById("side911").style.display="none";
document.getElementById("sidevwt25").style.display="none";
document.getElementById("sidew113").style.display="none";
document.getElementById("shownavi").style.display = "none";
document.getElementById("shownavibutton").style.display = "block";
document.getElementById("mainclose").style.display = "none";
}
// var right=document.getElementsByClassName('detailright').style.height;
// var left=document.getElementsByClassName('detailimg').style.height;
// if(left>right)
// {
//     document.getElementsByClassName('detailright').style.height=left;
// }
// else
// {
//     document.getElementsByClassName('detailimg').style.height=right;
// }

// remove hover
function watchForHover() {
    var hasHoverClass = false;
    var container = document.body;
    var lastTouchTime = 0;

    function enableHover() {
        // filter emulated events coming from touch events
        if (new Date() - lastTouchTime < 500) return;
        if (hasHoverClass) return;

        container.className += ' hasHover';
        hasHoverClass = true;
    }

    function disableHover() {
        if (!hasHoverClass) return;

        container.className = container.className.replace(' hasHover', '');
        hasHoverClass = false;
    }

    function updateLastTouchTime() {
        lastTouchTime = new Date();
    }

    document.addEventListener('touchstart', updateLastTouchTime, true);
    document.addEventListener('touchstart', disableHover, true);
    document.addEventListener('mousemove', enableHover, true);

    enableHover();
}

watchForHover();
// remove hover end

