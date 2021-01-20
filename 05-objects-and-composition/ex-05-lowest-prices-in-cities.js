//05. Lowest Prices in Cities  
function lowestPricesinCities(arr) {

    let log = {
    };

    for (let line of arr) {
        let [town, product, price] = line.split(' | ');
        price = Number(price);

        if (!log.hasOwnProperty(product)) {
            log[product] = {};
        }
        log[product][town] = price;
    }

    for (let one in log) {
        let sorted = Object.entries(log[one]).sort(([a, a1], [b, b1]) =>
            a1 - b1
        );
        console.log(`${one} -> ${sorted[0][1]} (${sorted[0][0]})`);
    }

}
lowestPricesinCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);
