//06. Store Catalogue  
function storeCatalogue(arr) {
    let output = {};

    for(let line of arr){
        let [product,price] = line.split(' : ');

        if(!output.hasOwnProperty(product[0])){
            output[product[0]] = {};
        }

        output[product[0]][product] = price;
    }

    let sorted = Object.keys(output)
    .sort((a,b) => a.localeCompare(b));

    sorted.forEach(el => {
        console.log(el);
        Object.keys(output[el])
        .sort((a,b) => a.localeCompare(b))
        .forEach(x => console.log('  '+x+':'+' '+output[el][x]))

        })


}
storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);
