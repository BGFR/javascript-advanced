//PB-04. Time to Walk 
function timetoWalk (totalSteps,stepLength,speedKm) {
    let distanceInM = totalSteps*stepLength
    let speedSeconds = speedKm * 1000 / 3600
    let restsInSeconds = Math.floor(distanceInM / 500)*60
    let time = distanceInM / speedSeconds + restsInSeconds

    let hours = Math.floor(time/3600)
    let minutes = Math.floor((time-hours*3600)/60)
    let seconds = Math.round(time-hours*3600-minutes*60)

    console.log((hours < 10 ? '0' :'')+hours+':'+(minutes< 10 ?'0' :'')+minutes+':'+(seconds < 10? '0' :'')+seconds);
    
}

timetoWalk(4000, 0.60, 5)
timetoWalk(2564, 0.70, 5.5)
