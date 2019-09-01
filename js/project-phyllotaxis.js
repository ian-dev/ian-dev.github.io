let cnvPhyl = {};

function initPhyl() {
    let n,
        c,
        phy,
        rad,
        posX,
        posY,
        canvasPhyl,
        contextPhyl,
        initPosX,
        initPosY;
    
    canvasPhyl = new Canvas("phyl-spirals", "2d");
    contextPhyl = canvasPhyl.canvasContext;

    n = 0;
    c = 15; 
    phy = 137.6;
    initPosX = contextPhyl.canvas.width * 0.5;
    initPosY = contextPhyl.canvas.height * 0.5;
    
    cnvPhyl.n = n;
    cnvPhyl.c = c;
    cnvPhyl.phy = phy;
    cnvPhyl.rad = 2;
    cnvPhyl.posX = posX;
    cnvPhyl.posY = posY;
    cnvPhyl.canvasPhyl = canvasPhyl;
    cnvPhyl.contextPhyl = contextPhyl;
    cnvPhyl.initPosX = initPosX;
    cnvPhyl.initPosY = initPosY;
    
    drawPhyl();
}


function drawPhyl() {        
    if(cnvPhyl.n < 500){
        let a = cnvPhyl.n * cnvPhyl.phy;
        let r = cnvPhyl.c * 0.125 * Math.sqrt(cnvPhyl.n);

        cnvPhyl.posX = r * Math.cos(a) + cnvPhyl.initPosX;
        cnvPhyl.posY = r * Math.sin(-a) + cnvPhyl.initPosY;

        cnvPhyl.contextPhyl.fillStyle = 'rgba(255, 255, 255, 0)';
        cnvPhyl.contextPhyl.fillRect(cnvPhyl.posX, cnvPhyl.posY, 1, 1);

        let gradient = cnvPhyl.contextPhyl.createLinearGradient(cnvPhyl.initPosX, cnvPhyl.initPosY,
                                                         cnvPhyl.posX, cnvPhyl.posY);
        gradient.addColorStop('0', 'rgba(66, 66, 66, 0.125)');
        gradient.addColorStop('1', 'rgba(225, 225, 225, 0.250)'); 
        
        cnvPhyl.contextPhyl.beginPath();
        cnvPhyl.contextPhyl.arc(cnvPhyl.posX, cnvPhyl.posY, cnvPhyl.rad, 0, Math.PI * 2);
        cnvPhyl.contextPhyl.closePath();
        
        cnvPhyl.contextPhyl.strokeStyle = gradient;
        cnvPhyl.contextPhyl.stroke();

        cnvPhyl.c += 1;
        cnvPhyl.n += 1;
        cnvPhyl.rad += 1;
                
    } else {
        window.cancelAnimationFrame(drawPhyl);
        return true;
    }

    window.requestAnimationFrame(drawPhyl);
}


window.addEventListener('resize', resizeDraw, 'false');

function resizeDraw() {
    initPhyl();
    drawPhyl();    
}







//
//let cnvPhyl = {};
//
//function initPhyl() {
//    let n,
//        c,
//        phy,
//        posX,
//        posY,
//        canvasPhyl,
//        contextPhyl,
//        initPosX,
//        initPosY;
//    
//    canvasPhyl = new Canvas("phyl-spirals", "2d");
//    contextPhyl = canvasPhyl.canvasContext;
//
//    n = 0;
//    c = 15; 
//    phy = 137.3;
//    initPosX = contextPhyl.canvas.width * 0.5;
//    initPosY = contextPhyl.canvas.height * 0.5;
//    
//    cnvPhyl.n = n;
//    cnvPhyl.c = c;
//    cnvPhyl.phy = phy;
//    cnvPhyl.posX = posX;
//    cnvPhyl.posY = posY;
//    cnvPhyl.canvasPhyl = canvasPhyl;
//    cnvPhyl.contextPhyl = contextPhyl;
//    cnvPhyl.initPosX = initPosX;
//    cnvPhyl.initPosY = initPosY;
//    
//    drawPhyl();
//}
//
//
//function drawPhyl() {        
//    if(cnvPhyl.n < 500){
//        let a = cnvPhyl.n * 137.3;
//        let r = cnvPhyl.c * 0.125 * Math.sqrt(cnvPhyl.n);
//
//        cnvPhyl.posX = r * Math.cos(a) + cnvPhyl.initPosX;
//        cnvPhyl.posY = r * Math.sin(-a) + cnvPhyl.initPosY;
//
//        cnvPhyl.contextPhyl.fillStyle = 'rgba(255, 255, 255, 0)';
//        cnvPhyl.contextPhyl.fillRect(cnvPhyl.posX, cnvPhyl.posY, 1, 1);
//
//        let gradient = cnvPhyl.contextPhyl.createLinearGradient(cnvPhyl.initPosX, cnvPhyl.initPosY,
//                                                         cnvPhyl.posX, cnvPhyl.posY);
//        gradient.addColorStop('0', 'rgba(66, 66, 66, 0.025)');
//        gradient.addColorStop('1', 'rgba(225, 225, 225, 0.05)'); 
//
//        cnvPhyl.contextPhyl.moveTo(cnvPhyl.initPosX, cnvPhyl.initPosY);
//        cnvPhyl.contextPhyl.quadraticCurveTo(cnvPhyl.initPosX * 0.75, cnvPhyl.initPosY * 0.75,
//                                      cnvPhyl.posX, cnvPhyl.posY);
//        cnvPhyl.contextPhyl.strokeStyle = gradient;
//        cnvPhyl.contextPhyl.stroke();
//
//        cnvPhyl.c += 1;
//        cnvPhyl.n += 1;
//        
//    } else {
//        window.cancelAnimationFrame(drawPhyl);
//        return true;
//    }
//
//    window.requestAnimationFrame(drawPhyl);
//}
//
//
//window.addEventListener('resize', resizeDraw, 'false');
//
//function resizeDraw() {
//    initPhyl();
//    drawPhyl();    
//}
//
//
//
//
//
//
