
let cvnQuad = {};

function initQuad() {
    let n,
        c,
        phy,
        posX,
        posY,
        canvasQuad,
        contextQuad,
        initPosX,
        initPosY;
    
    canvasQuad = new Canvas("phyl-quad", "2d");
    contextQuad = canvasQuad.canvasContext;

    n = 0;
    c = 15; 
    phy = 137.6;
    initPosX = contextQuad.canvas.width * 0.5;
    initPosY = contextQuad.canvas.height * 0.5;
    
    cvnQuad.n = n;
    cvnQuad.c = c;
    cvnQuad.phy = phy;
    cvnQuad.posX = posX;
    cvnQuad.posY = posY;
    cvnQuad.canvasQuad = canvasQuad;
    cvnQuad.contextQuad = contextQuad;
    cvnQuad.initPosX = initPosX;
    cvnQuad.initPosY = initPosY;
    
    drawQuad();
}


function drawQuad() {        
    if(cvnQuad.n < 500){
        let a = cvnQuad.n * 137.6;
        let r = cvnQuad.c * 0.125 * Math.sqrt(cvnQuad.n);
        let cN = cvnQuad.n * 0.0025

        cvnQuad.posX = r * Math.cos(a) + cvnQuad.initPosX;
        cvnQuad.posY = r * Math.sin(-a) + cvnQuad.initPosY;

        cvnQuad.contextQuad.fillStyle = 'rgba(255, 255, 255, 0)';
        cvnQuad.contextQuad.fillRect(cvnQuad.posX, cvnQuad.posY, 1, 1);

        let gradient = cvnQuad.contextQuad.createLinearGradient(cvnQuad.initPosX, cvnQuad.initPosY,
                                                         cvnQuad.posX, cvnQuad.posY);
        gradient.addColorStop('0', 'rgba(66, 66, 66, 0.025)');
        gradient.addColorStop('1', 'rgba(225, 225, 225, 0.05)'); 

        cvnQuad.contextQuad.moveTo(cvnQuad.initPosX, cvnQuad.initPosY);
        cvnQuad.contextQuad.quadraticCurveTo(cvnQuad.initPosX * cN, cvnQuad.initPosY * cN,
                                      cvnQuad.posX, cvnQuad.posY);
        cvnQuad.contextQuad.strokeStyle = gradient;
        cvnQuad.contextQuad.stroke();

        cvnQuad.c += 1;
        cvnQuad.n += 1;
        
    } else {
        window.cancelAnimationFrame(drawQuad);
        return true;
    }

    window.requestAnimationFrame(drawQuad);
}


window.addEventListener('resize', resizeDraw, 'false');

function resizeDraw() {
    initQuad();
    drawQuad();    
}



