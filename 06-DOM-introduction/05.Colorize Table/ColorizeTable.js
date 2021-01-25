function colorize() {
    // const row = document.querySelectorAll('table tr')
   [...document.querySelectorAll('table tr:nth-child(even)')]
   .forEach(e => e.style.backgroundColor = 'teal')

    // for(let i = 1; i < row.length; i +=2){
    //     row[i].style.backgroundColor = 'teal'
    // }
}