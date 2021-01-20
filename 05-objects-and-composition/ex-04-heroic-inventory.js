//04. Heroic Inventory  
function heroicInventory(input) {
    
    let output = []
    for(let heroe of input){
        let [name,level, items] = heroe.split(' / ');
        level = Number(level)
        items = items? items.split(', '):[];

        output.push({name,level,items})
    }

    console.log(JSON.stringify(output));

}
