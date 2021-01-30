function attachEventsListeners() {

    const main = document.querySelector('main')
    const days = document.querySelector('#days')
    const hours = document.querySelector('#hours')
    const minutes = document.querySelector('#minutes')
    const seconds = document.querySelector('#seconds')
    const input = Array.from(document.querySelectorAll('input'))

 
    main.addEventListener('click', function(ev){ 
        if(ev.target.id == 'daysBtn'){
            console.log(input[0].value);
            hours.value = Number(input[0].value)*24
            minutes.value = Number(input[0].value)*1440
            seconds.value = Number(input[0].value)*86400
        } else if (ev.target.id == 'hoursBtn'){
            console.log(input);
            days.value = Number(input[2].value) / 24
            minutes.value = (Number(input[2].value) * 60)
            seconds.value = Number(input[2].value) * 3600
        } else if (ev.target.id == 'minutesBtn'){
            days.value = (Number(input[4].value) / 60) / 24
            hours.value = Number(input[4].value) / 60
            seconds.value = Number(input[4].value) * 60
        } else if (ev.target.id == 'secondsBtn'){
            days.value = Number(input[6].value) / 86400
            hours.value = Number(input[6].value) / 3600
            minutes.value = Number(input[6].value) / 60
        }
    })
    

}