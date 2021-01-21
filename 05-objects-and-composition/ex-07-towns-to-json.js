//07. Towns to JSON  ex-07-towns-to-json.js
function townstoJSON(input) {
    function isEmptyString (x){
        return x !==''
    }

    function convertIfNum(x){
        return isNaN(x)? x : Number(Number(x).toFixed(2))
    }

    let [col,...table] = input.map(splitLine)

    function splitLine (input){
        return input.split('|')
        .filter(isEmptyString)
        .map(x => x.trim())
        .map(convertIfNum)
    }

    return JSON.stringify(table.map(entry=> {
        return col.reduce((acc,curr,index) =>{
            acc[curr] = entry[index]
            return acc
        }, {})
    }))
}
console.log(townstoJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
)); 
console.log(townstoJSON(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']
)); 
