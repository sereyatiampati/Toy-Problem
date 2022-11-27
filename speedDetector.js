//function to compute demerit points 
const prompt = require('prompt-sync')();
function speedDetector(){
    let speed= prompt('What was the speed(km/s) of the car?')
    
    let dpoints= (speed>70)? (speed-70)/5 : 'Ok';
    
    if (dpoints==='Ok'){
        return 'Ok';
    }
    else if (dpoints>=13){
        return 'Licence suspended!'
    }
    else if (dpoints<13){
    
        return Math.floor (dpoints);
    } 
    }
    console.log(speedDetector());