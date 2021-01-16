//03. Add and Remove Elements
function addRemove(arr) {
    let output = []
    let number = 1
    let isEmpty = false;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == 'add'){
             output.push(number) 
        } else if (arr[i] == 'remove'){
            output.pop();
        }
        number++
    };
    console.log (output.length != 0 ? output.join('\n') : 'Empty')
}
