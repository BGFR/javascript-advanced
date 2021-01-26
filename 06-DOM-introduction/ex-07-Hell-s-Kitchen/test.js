
    function getInput (arr){
       let mainObj = {}
       for(let one of arr){
          let [restaurant, ...staffTokens] = one.split(' - ')
          let staff = staffTokens.join('').split(', ')
          for(let one of staff){
             let [worker, pay] = one.split(' ')
             pay = Number(pay)
             if(!mainObj.hasOwnProperty(restaurant)){
                mainObj[restaurant] = {}
             } 
             mainObj[restaurant][worker] = pay
          }
       }
       Object.keys(mainObj).forEach( x => {
            Object.values(mainObj[x])
            .reduce((acc,curr,i,arr) => {
                let average = acc  +  (curr / arr.length)
                let highest = (Math.max(...arr))
                mainObj[x]['highest'] = highest;
                return mainObj[x]['average'] = Number(average.toFixed(2))
            },0)
       }) 
       
       console.log(mainObj);
    }
 
 
getInput(["PizzaHut - Peter 500, George 300, Mark 800",
 "TheLake - Bob 1300, Joe 780, Jane 660"])