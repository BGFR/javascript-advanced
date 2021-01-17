//08. Sort an Array by 2 Criteria 
function sortTwoCriteria(arr) {
    let sorted = arr.sort((a,b) =>{
        return a.length - b.length || a.localeCompare(b)
    })

    console.log(sorted.join('\n'));
}

sortTwoCriteria(['alpha', 'beta', 'gamma'])
sortTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])
sortTwoCriteria(['test', 'Deny', 'omen', 'Default'])
