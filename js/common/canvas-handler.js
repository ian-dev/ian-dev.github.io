class Canvas {
    constructor(id, context) {
        let $canvas = $('canvas');
        
        if($canvas.length != 0 && $canvas.attr('id') == id) {
            let canvasId = document.getElementById(id);
            let contextId = canvasId.getContext(context);
            
            this.canvas = canvasId;
            this.canvasDomId = id;
            this.canvasContext = contextId;
            this.canvasWidth = contextId.canvas.width;
            this.canvasHeight = contextId.canvas.height;
            
            contextId.canvas.width = window.innerWidth;
            contextId.canvas.height = window.innerHeight;
            contextId.clearRect(0, 0, contextId.canvas.width, contextId.canvas.height);
                                    
        } else {
            console.log("canvas not found"); // << for debug
            this.canvasContext = null;
        }
        
        window.addEventListener('resize', function(){this.canvasWidth = window.innerWidth;
                                                     this.canvasHeight = window.innerHeight;
                                                    }, false);
        
    }
    
    // methods
    canvasContext() {
        return this.canvasContext;   
    }
    
    canvasId() {
        return this.canvasDomId;
    }
    
}







/*

// FORMER CODE << DO NOT DELETE AFTER DEBUG

let canvasId,
    contextId,
    canvasWidth,
    canvasHeight;

function setupCanvas(id, context, width, height, funct){
    if($('canvas').length != 0){
        canvasId = document.getElementById(id);
        contextId = canvasId.getContext(context);
        
        canvasWidth = width;
        canvasHeight = height;

        contextId.canvas.width = canvasWidth;
        contextId.canvas.height = canvasWidth;
        
        console.log("Canvas Online"); // << for debug, delete after
    }else{
        canvasId,
        contextId,
        canvasWidth,
        canvasHeight = null;
        
        console.log("Canvas Not found"); // << for debug, delete after
    }
    
    funct();
    
    window.addEventListener('resize', resizeCanvas, false);
}


function resizeCanvas(){
    contextId.canvas.width = window.innerWidth;
    contextId.canvas.height = window.innerHeight;
    
    //funct();
    window.requestAnimationFrame();    
}

*/
