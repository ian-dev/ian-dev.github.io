let cnvBDNL = {}

function initBDNL() {
    let canvasBDNL,
        contextBDNL,
        dataId,
        dataTime,
        dataAmount,
        dataPrice,
        dataType,
        initPosX,
        initPosY,
        counter,
        date,
        initMessage;
    
    canvasBDNL = new Canvas("bitcoin-data-non-linear", "2d");
    contextBDNL = canvasBDNL.canvasContext;
    initPosX = contextBDNL.canvas.width * 0.5;
    initPosY = contextBDNL.canvas.height * 0.5;
    counter = 0;
    date = new Date();
    initMessage = "Bitcoin Live Trades";
    
    cnvBDNL.canvasBDNL = canvasBDNL;
    cnvBDNL.contextBDNL = contextBDNL;
    cnvBDNL.dataAmount = dataAmount;
    cnvBDNL.dataPrice = dataPrice;
    cnvBDNL.dataType = dataType;
    cnvBDNL.initPosX = initPosX;
    cnvBDNL.initPosY = initPosY;
    cnvBDNL.counter = counter;
    cnvBDNL.initMessage = initMessage;
    
    contextBDNL.clearRect(0, 0, canvasBDNL.canvas.width, canvasBDNL.canvas.height);
    
    contextBDNL.fillStyle = "#F2F2F2";
    contextBDNL.fillRect(0, 0, canvasBDNL.canvas.width, canvasBDNL.canvas.height);
    
    dataPusher();
    
    drawText(initPosX * 1.75, 128, 0.675, "#666", "right", initMessage);
    drawText(initPosX * 1.75, 144, 0.675, "#666", "right", date.toUTCString());
    drawText(initPosX * 1.75, 160, 0.675, "#666", "right", "Wait for trades to happen ;)");
}

function drawCircle(posX, posY, radius, color) {
    cnvBDNL.contextBDNL.beginPath();
    cnvBDNL.contextBDNL.arc(posX, posY, radius, 0, 2 * Math.PI);
    cnvBDNL.contextBDNL.strokeStyle = color;
    cnvBDNL.contextBDNL.stroke();
    cnvBDNL.contextBDNL.closePath;
}

function drawText(posX, posY, size, color, align, txt) {
    cnvBDNL.contextBDNL.font = size.toString() + "em Helvetica";
    cnvBDNL.contextBDNL.fillStyle = color;
    cnvBDNL.contextBDNL.textAlign = align;
    cnvBDNL.contextBDNL.fillText(txt, posX, posY);
}

function dataPusher() {
    let pusher,
        tradesChannel,
        iterations;
        
    pusher = new Pusher('de504dc5763aeef9ff52');
    tradesChannel = pusher.subscribe('live_trades');
    iterations = 30;
    
    tradesChannel.bind ('trade', function (data) {
        cnvBDNL.dataTime = data.timestamp;
        cnvBDNL.dataId = data.id;
        cnvBDNL.dataAmount = data.amount;
        cnvBDNL.dataPrice = data.price;
        cnvBDNL.dataType = data.type;
        
        cnvBDNL.counter ++;
        onFirstTrade = true;
        
        drawBNDL();
                
        if(cnvBDNL.counter == iterations) {
            resetBDNL();
        }
        
    });
}

function normalizedData() {
    let radius,
        ampl;               
                
    radius = 0;
    ampl = 125;
    
    if (cnvBDNL.dataAmount < 0.001) {
         radius = (radius + 25) + cnvBDNL.dataAmount * ampl;
    } else if (cnvBDNL.dataAmount < 0.01) {
        radius = (radius + 50) + cnvBDNL.dataAmount * ampl;
    } else if (cnvBDNL.dataAmount < 0.1) {
        radius = (radius + 100) + cnvBDNL.dataAmount * ampl;       
    } else if (cnvBDNL.dataAmount < 1) {
        radius = (radius + 200) + cnvBDNL.dataAmount * ampl;
    } else {
        radius = (radius + 300) + cnvBDNL.dataAmount;
    }

    return radius;
}

function drawBNDL() {
    let radius = normalizedData();
    let ratio = 12;
    let textMargin = 128;
    let dataColor;
    let dataText;
    
    let rads = (cnvBDNL.counter / 180 * Math.PI) * ratio;
    let finalPosX = radius * Math.cos(rads) + cnvBDNL.initPosX;
    let finalPosY = radius * Math.sin(rads) + cnvBDNL.initPosY;
    
    
    if(cnvBDNL.counter == 0) {
        //dataText = "Retrieving";
    } else {
        
    }
    
    dataText = "BTC " + (cnvBDNL.dataAmount).toString();
    
    if (cnvBDNL.dataType != 0) {
        dataColor = "#AA7739";
    }else{
        dataColor = "#28536C";
    }

    cnvBDNL.contextBDNL.beginPath();
    cnvBDNL.contextBDNL.moveTo(cnvBDNL.initPosX, cnvBDNL.initPosY);
    cnvBDNL.contextBDNL.lineTo(finalPosX, finalPosY);
    cnvBDNL.contextBDNL.lineWidth = 1;
    cnvBDNL.contextBDNL.strokeStyle = dataColor;
    cnvBDNL.contextBDNL.stroke();
    
    drawCircle(finalPosX, finalPosY, radius * 0.5, dataColor);
    drawText(textMargin, textMargin + 16 * cnvBDNL.counter, 0.75, dataColor, "left", dataText);
        
    console.log(cnvBDNL.counter);
}


function resetBDNL() {
    cnvBDNL.counter = 0;    
    clearCanvasBDNL();
    drawBNDL();
    
}

function clearCanvasBDNL() {
    cnvBDNL.contextBDNL.clearRect(0, 0,
                                  cnvBDNL.canvasBDNL.canvas.width,
                                  cnvBDNL.canvasBDNL.canvas.height);
    
    cnvBDNL.contextBDNL.fillStyle = "#F2F2F2";
    cnvBDNL.contextBDNL.fillRect(0, 0,
                                  cnvBDNL.canvasBDNL.canvas.width,
                                  cnvBDNL.canvasBDNL.canvas.height);
}


window.addEventListener('resize', resizeBDNL, 'false');

function resizeBDNL() {
    initBDNL();
    drawBNDL();    
}
    
