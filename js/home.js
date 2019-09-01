let cnvHome = {}

function initGraphicHome() {
    let n,
        c,
        rad,
        phy,
        posX,
        posY,
        canvasHome,
        contextHome,
        initPosX,
        initPosY;
    
    canvasHome = new Canvas("graph-home", "2d");
    contextHome = canvasHome.canvasContext;

    n = 0;
    c = 15; 
    phy = 137.3;
    rad = 5;
    initPosX = contextHome.canvas.width * 0.75;
    initPosY = contextHome.canvas.height * 0.5;
    
    cnvHome.n = n;
    cnvHome.c = c;
    cnvHome.rad = rad;
    cnvHome.phy = phy;
    cnvHome.posX = posX;
    cnvHome.posY = posY;
    cnvHome.canvasHome = canvasHome;
    cnvHome.contextHome = contextHome;
    cnvHome.initPosX = initPosX;
    cnvHome.initPosY = initPosY;
    
    drawGraphicHome();
}

function drawGraphicHome() {
        
    if(cnvHome.n < 400){
        let a = cnvHome.n * 137.3;
        let r = cnvHome.c * 0.125 * Math.sqrt(cnvHome.n);

        cnvHome.posX = r * Math.cos(a) + cnvHome.initPosX;
        cnvHome.posY = r * Math.sin(-a) + cnvHome.initPosY;

        cnvHome.contextHome.fillStyle = 'rgba(255, 255, 255, 0)';
        cnvHome.contextHome.fillRect(cnvHome.posX, cnvHome.posY, 1, 1);

        let gradient = cnvHome.contextHome.createLinearGradient(cnvHome.initPosX, cnvHome.initPosY,
                                                                 cnvHome.posX, cnvHome.posY);
        gradient.addColorStop('0', 'rgba(66, 66, 66, 0.05)');
        gradient.addColorStop('1', 'rgba(225, 225, 225, 0.075)'); 

        
        cnvHome.contextHome.beginPath();
        cnvHome.contextHome.arc(cnvHome.posX, cnvHome.posY, cnvHome.rad, 0, Math.PI * 2);
        cnvHome.contextHome.closePath();
        
        cnvHome.contextHome.strokeStyle = gradient;
        cnvHome.contextHome.stroke();

        cnvHome.c += 1;
        cnvHome.n += 1;
        cnvHome.rad += 1;
        
    } else {
        window.cancelAnimationFrame(drawGraphicHome);
        cnvHome.rad += 1;
        //return true;
    }

    window.requestAnimationFrame(drawGraphicHome);
    
}


window.addEventListener('resize', resizeDraw, 'false');

function resizeDraw() {
    initGraphicHome();
    drawGraphicHome();    
}
