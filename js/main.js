//  EVENTS ORDER
//
//  Document loads: init()
//  Animate preloader
//  Fade out preloader
//  Toggle navigation script
//  Page loaded: Check for canvas ** if canvas = true setInitCanvasSize
//  Animate head bar + content ** if url = index drawGraph()
//  OnClick nav fade out current doc and load new doc
//


const $mainWrap = $('.main-wrap'),
      $preloader = $('.preloader'),
      $toggleMenu = $('.toggle-menu'),
      $mainNav = $('#main-nav'),
      $bar = $('.preloader span'),
      $header = $('#top-header'),
      $content = $('.content-wrap');

let docLoaded = false,
    navVisible = false,
    pageUrl;

document.addEventListener('DOMContentLoaded', init());

function init(){
    animatePreload();
}

function animatePreload(){
    const tm = 250,
          dl = 125;
        
    if(docLoaded == false){
        $bar.css({'height': '0', 'margin-left': '0', 'opacity': '1'});
        $bar.animate({height: '3em'}, tm).delay(dl)
        .animate({marginLeft: '3em'}, tm).delay(dl)
        .animate({height: '0'}, tm, animatePreload);
    }else{
        docLoaded = docLoaded;
    }
    
    $header.css({'opacity': '0', 'margin-top': '0'});
}

// *
// Setup toggle nav mobile & page loaded
window.onload = function(){
    fadeInCont();
    toggleNavMobile();
    mainNavigation();
}

// *
// Fades in top bar & content
function fadeInCont(){
    const tm = 250;
    let isTrue = false; // << ??? check this var
    
    $preloader.fadeOut(tm, function(){
        $content.delay(tm).animate({opacity: '1'},
                                   {easing: 'swing', duration: 250, complete: animateHeader});
    })
    
    docLoaded = true;
    initGraphicHome();
    
}

function animateHeader(){
    $header.delay(100).animate({opacity: '1'}, {easing: 'swing', duration: 400});
}

function toggleNavMobile(){    
    $('.toggle-menu').click(function(e){
        e.preventDefault();
        
        navVisible = !navVisible;
        
        collapseNavMobile(navVisible);
    });
}

function collapseNavMobile(visible){
    let fadeTime = 400;
    
    if (visible == true){
            $mainNav.fadeIn(fadeTime);
            $toggleMenu.addClass('collapse');
        } else {
            $mainNav.fadeOut(fadeTime * 1.75);
            $toggleMenu.removeClass('collapse');
        }
}

function mainNavigation(){
    let $navItem = $('#main-nav ul li a, .call-to-action');
    navigateTo($navItem);
}

function navigateTo(link) {
    link.on('click', function(e){
        pageUrl = $(this).attr('href');
        
        e.preventDefault();
    
        collapseNavMobile(false);
        navVisible = false;
        
        fadeOutContent();
        console.log("navigateTo click event fired");
    });    
    
}

// animates page content on load
function fadeOutContent() {
    $content.delay(400).fadeOut(200, function(){
        $content.css({'margin-top' : '1em', 'opacity' : '0'});
        loadPage();
    });
}

// loads page 
function loadPage(){
    $content.load(pageUrl + '.html', function(){
        $content.css('display', 'block');    
        $content.animate({marginTop: '0'}, {duration: 300, queue: false});
        $content.animate({opacity: '1'}, {duration: 400, queue: false});
        history.pushState(null, null, pageUrl);

        onPageLoaded(pageUrl);
        console.log("Page loaded event fired");// << debug, delete after
    });

}


// *
// fade out page
function pageFadeOut(){
    let completed;
    
    $mainWrap.delay(250).animate({opacity: '0'}, {complete: function(){        
        completed = true;
    }});
    
}

// *
// if index.html draw graphic
//
function onPageLoaded(id){
    //var url = window.location.pathname;
    let pageId = id;
    const listUrl = [
            "work",
            "about",
            "contact",
            "bitcoin-data-non-linear",
            "phyllotactic-spirals",
            "phyllotactic-quad-curves",
            "galaxy-nebula"
        ];
    
    switch(pageId){
        case listUrl[0]:
            //console.log(pageId); << for debug
            loadProject();
            break;
        
        case listUrl[1]:
            initGraphicAbout();
            break;
        
        case listUrl[2]:
            //console.log(pageId); << for debug
            break;
        
        case listUrl[3]:
            initBDNL();
            break;
        
        case listUrl[4]:
            initPhyl();
            break;
        
        case listUrl[5]:
            initQuad();
            break;
            
        case listUrl[6]:
            //console.log(pageId); << for debug
            break;    
            
        default:
            console.log(pageId);
    }

}


