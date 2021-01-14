//02. Print every N-th Element from an Array ex-02-everyNthEl.js
function everyNthEl(arr,str) {
    let output = []
    for(let i = 0; i < arr.length; i+=str){
        output.push(arr[i]);
    }
    return output
}

everyNthEl(['5','20', '31', '4', '20'], 2)
everyNthEl(['dsa','asd', 'test', 'tset'], 2)
everyNthEl(['1','2','3', '4', '5'], 6)
