//01. Calorie Object  
function calorieObject (arr) {
    let result = {}
    // for(let i = 0; i < arr.length; i+=2){
    //     result[arr[i]] = Number(arr[i+1]) 
    // }

    // console.log(result);

    arr.forEach((el, i) => {
        if(i% 2 == 0){
            result[el] = '';
        } else {
            result [arr[i-1]] = el
        }
    });

    console.log(result);
}
calorieObject (['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
calorieObject (['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])
