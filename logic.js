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

//tab open in detail page
function opentab(evt, tagname) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("changingcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tagname).style.display = "block";
    evt.currentTarget.className += " active";   
}
// document.getElementById("defaultOpen").click();
//tab open in detail page END




//droptab
var dropdown = document.getElementsByClassName("tablinks2");
var i;

// tablinks = document.getElementsByClassName("tablinks2");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    var tabcontent, tablinks2;
    tabcontent = document.getElementsByClassName("tablinkdrop");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks2 = document.getElementsByClassName("tablinks2");
    for (i = 0; i < tablinks2.length; i++) {
        tablinks2[i].className = tablinks2[i].className.replace(" active", "");
    }


    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
    
  })
  ;
}

//drop tab END






// drift
TweenMax.set('#circlePath', {
    attr: {
      r: document.querySelector('#mainCircle').getAttribute('r')
    }
  })
  MorphSVGPlugin.convertToPath('#circlePath');
  
  var xmlns = "http://www.w3.org/2000/svg",
    xlinkns = "http://www.w3.org/1999/xlink",
    select = function(s) {
      return document.querySelector(s);
    },
    selectAll = function(s) {
      return document.querySelectorAll(s);
    },
    mainCircle = select('#mainCircle'),
    mainContainer = select('#mainContainer'),
    car = select('#car'),
    mainSVG = select('.mainSVG'),
    mainCircleRadius = Number(mainCircle.getAttribute('r')),
    //radius = mainCircleRadius,
    numDots = mainCircleRadius / 2,
    step = 360 / numDots,
    dotMin = 0,
    circlePath = select('#circlePath')
  
  //
  //mainSVG.appendChild(circlePath);
  TweenMax.set('svg', {
    visibility: 'visible'
  })
  TweenMax.set([car], {
    transformOrigin: '50% 50%'
  })
  TweenMax.set('#carRot', {
    transformOrigin: '0% 0%',
    rotation:30
  })
  
  var circleBezier = MorphSVGPlugin.pathDataToBezier(circlePath.getAttribute('d'), {
    offsetX: -20,
    offsetY: -5
  })
  
  
  
  //console.log(circlePath)
  var mainTl = new TimelineMax();
  
  function makeDots() {
    var d, angle, tl;
    for (var i = 0; i < numDots; i++) {
  
      d = select('#puff').cloneNode(true);
      mainContainer.appendChild(d);
      angle = step * i;
      TweenMax.set(d, {
        //attr: {
        x: (Math.cos(angle * Math.PI / 180) * mainCircleRadius) + 400,
        y: (Math.sin(angle * Math.PI / 180) * mainCircleRadius) + 300,
        rotation: Math.random() * 360,
        transformOrigin: '50% 50%'
          //}
      })
  
      tl = new TimelineMax({
        repeat: -1
      });
      tl
        .from(d, 0.2, {
          scale: 0,
          ease: Power4.easeIn
        })
        .to(d, 1.8, {
          scale: Math.random() + 2,
          alpha: 0,
          ease: Power4.easeOut
        })
  
      mainTl.add(tl, i / (numDots / tl.duration()))
    }
    var carTl = new TimelineMax({
      repeat: -1
    });
    carTl.to(car, tl.duration(), {
      bezier: {
        type: "cubic",
        values: circleBezier,
        autoRotate: true
      },
      ease: Linear.easeNone
    })
    mainTl.add(carTl, 0.05)
  }
  
  makeDots();
  mainTl.time(120);
  TweenMax.to(mainContainer, 20, {
    rotation: -360,
    svgOrigin: '400 300',
    repeat: -1,
    ease: Linear.easeNone
  });
  mainTl.timeScale(1.1) 


 var myVar;
    
    function loadingfunction() {
        myVar = setTimeout(showPage, 3000);
    }
    
    function showPage() {
      document.getElementById("loading").style.display = "none";
    }  
// drift end
