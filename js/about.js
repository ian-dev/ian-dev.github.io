
let cnvAbout = {};

function initGraphicAbout() {
    let n,
        c,
        phy,
        posX,
        posY,
        canvasAbout,
        contextAbout,
        initPosX,
        initPosY;
    
    canvasAbout = new Canvas("graph-about", "2d");
    contextAbout = canvasAbout.canvasContext;

    n = 0;
    c = 15; 
    phy = 137.3;
    initPosX = contextAbout.canvas.width * 0.5;
    initPosY = contextAbout.canvas.height * 0.5;
    
    cnvAbout.n = n;
    cnvAbout.c = c;
    cnvAbout.phy = phy;
    cnvAbout.posX = posX;
    cnvAbout.posY = posY;
    cnvAbout.canvasAbout = canvasAbout;
    cnvAbout.contextAbout = contextAbout;
    cnvAbout.initPosX = initPosX;
    cnvAbout.initPosY = initPosY;
    
    drawGraphicAbout();
}


function drawGraphicAbout() {        
    if(cnvAbout.n < 200){
        let a = cnvAbout.n * 137.5;
        let r = cnvAbout.c * 0.125 * Math.sqrt(cnvAbout.n);
        let cN = cnvAbout.n * 0.125;
        let rad = 10;

        cnvAbout.posX = r * Math.cos(a) + cnvAbout.initPosX;
        cnvAbout.posY = r * Math.sin(-a) + cnvAbout.initPosY;

        cnvAbout.contextAbout.fillStyle = 'rgba(255, 255, 255, 0)';
        cnvAbout.contextAbout.fillRect(cnvAbout.posX, cnvAbout.posY, 1, 1);

        let gradient = cnvAbout.contextAbout.createLinearGradient(cnvAbout.initPosX, cnvAbout.initPosY,
                                                         cnvAbout.posX, cnvAbout.posY);
        gradient.addColorStop('0', 'rgba(66, 66, 66, 0.05)');
        gradient.addColorStop('1', 'rgba(225, 225, 225, 0.1)'); 
        
        cnvAbout.contextAbout.beginPath();
        cnvAbout.contextAbout.moveTo(cnvAbout.initPosX, cnvAbout.initPosY);
        cnvAbout.contextAbout.lineTo(cnvAbout.posX, cnvAbout.posY);
        cnvAbout.contextAbout.lineTo(cnvAbout.posX - rad, cnvAbout.posY - rad);
        cnvAbout.contextAbout.closePath();
        
        cnvAbout.contextAbout.strokeStyle = gradient;
        cnvAbout.contextAbout.stroke();

        cnvAbout.c += 1;
        cnvAbout.n += 1;
        
    } else {
        window.cancelAnimationFrame(drawGraphicAbout);
        return true;
    }

    window.requestAnimationFrame(drawGraphicAbout);
}


window.addEventListener('resize', resizeDraw, 'false');

function resizeDraw() {
    initGraphicAbout();
    drawGraphicAbout();    
}

//
//
//let cnvAbout = {};
//
//function initGraphicAbout() {
//    let n,
//        c,
//        phy,
//        posX,
//        posY,
//        canvasAbout,
//        contextAbout,
//        initPosX,
//        initPosY;
//    
//    canvasAbout = new Canvas("graph-about", "2d");
//    contextAbout = canvasAbout.canvasContext;
//
//    n = 0;
//    c = 15; 
//    phy = 137.3;
//    initPosX = contextAbout.canvas.width * 0.5;
//    initPosY = contextAbout.canvas.height * 0.5;
//    
//    cnvAbout.n = n;
//    cnvAbout.c = c;
//    cnvAbout.phy = phy;
//    cnvAbout.posX = posX;
//    cnvAbout.posY = posY;
//    cnvAbout.canvasAbout = canvasAbout;
//    cnvAbout.contextAbout = contextAbout;
//    cnvAbout.initPosX = initPosX;
//    cnvAbout.initPosY = initPosY;
//    
//    drawGraphicAbout();
//}
//
//
//function drawGraphicAbout() {        
//    if(cnvAbout.n < 250){
//        let a = cnvAbout.n * 137.3;
//        let r = cnvAbout.c * 0.125 * Math.sqrt(cnvAbout.n);
//
//        cnvAbout.posX = r * Math.cos(a) + cnvAbout.initPosX;
//        cnvAbout.posY = r * Math.sin(-a) + cnvAbout.initPosY;
//
//        cnvAbout.contextAbout.fillStyle = 'rgba(255, 255, 255, 0)';
//        cnvAbout.contextAbout.fillRect(cnvAbout.posX, cnvAbout.posY, 1, 1);
//
//        let gradient = cnvAbout.contextAbout.createLinearGradient(cnvAbout.initPosX, cnvAbout.initPosY,
//                                                         cnvAbout.posX, cnvAbout.posY);
//        gradient.addColorStop('0', 'rgba(66, 66, 66, 0.025)');
//        gradient.addColorStop('1', 'rgba(225, 225, 225, 0.05)'); 
//
//        cnvAbout.contextAbout.moveTo(cnvAbout.initPosX, cnvAbout.initPosY);
//        cnvAbout.contextAbout.quadraticCurveTo(cnvAbout.initPosX * 0.75, cnvAbout.initPosY * 0.75,
//                                      cnvAbout.posX, cnvAbout.posY);
//        cnvAbout.contextAbout.strokeStyle = gradient;
//        cnvAbout.contextAbout.stroke();
//
//        cnvAbout.c += 1;
//        cnvAbout.n += 1;
//        
//    } else {
//        window.cancelAnimationFrame(drawGraphicAbout);
//        return true;
//    }
//
//    window.requestAnimationFrame(drawGraphicAbout);
//}
//
//
//window.addEventListener('resize', resizeDraw, 'false');
//
//function resizeDraw() {
//    initGraphicAbout();
//    drawGraphicAbout();    
//}
//
//
////
//
