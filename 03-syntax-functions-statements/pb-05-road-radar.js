//PB-05. Road Radar 
function roadRadar (speed, area) {
let limit;
area == 'motorway' ? limit = 130:'';
area == 'interstate' ? limit = 90:'';
area == 'city' ? limit = 50:'';
area == 'residential' ? limit = 20:'';
let difference =  speed - limit;

if (speed <= limit) {
    console.log(`Driving ${speed} km/h in a ${limit} zone`)
} else  if(speed > limit && speed <= limit + 20){
    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - speeding`);
} else if (speed > limit && speed <= limit + 40){
    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - excessive speeding`);
} else {
    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - reckless driving`);
}
}

roadRadar(40, 'city')
roadRadar(21, 'residential')
roadRadar(120, 'interstate')
roadRadar(200, 'motorway')
