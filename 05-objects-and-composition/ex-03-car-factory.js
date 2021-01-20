// 03. Car Factory  
function carFactory(input) {
    return { 
    model: input.model,
    engine: getEngine(input.power),
    carriage: getCarriage(input.carriage, input.color),
    wheels: getWheels(input.wheelsize)    
}

    function getEngine(power){
        let engines = [
            { power: 90, volume: 1800 },
            { power: 120, volume: 2400 },    
            { power: 200, volume: 3500 },
        ].sort((a,b) => a.power - b.power)

        return engines.find(el => el.power >= power);
    }

    function getCarriage (type,color){
        return {
            type,
            color
        }
    }

    function getWheels (wheelsize){
        let wheel = wheelsize %2 == 0?
        wheels = wheelsize-1:
        wheels = wheelsize;
        //wheel = wheel+' '
        // return wheel.repeat(4).trim().split(' ').map(Number)
        return Array(4).fill(wheel)
    }

}
console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
})
)
console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
))
