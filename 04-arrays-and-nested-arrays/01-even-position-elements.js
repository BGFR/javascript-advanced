//01. Even Position Elements 
function evenPositionEl (inputArr) {
    
        let result = '';
        for (let i = 0; i < inputArr.length; i+=2) {
        result += inputArr[i];
        result += ' ';
        }
        console.log(result);
        
} 
evenPositionEl (['20', '30', '40', '50', '60'])
evenPositionEl (['5', '10'])
