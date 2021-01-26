function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   
   function onClick(){
      let input = JSON.parse(document.querySelector('#inputs>textarea').value);
      let inputDetails = getInput(input);
      averageHighestSallary(inputDetails);
      let bestRestaurant = getRestaurant(inputDetails);
      let print = getPrinted(bestRestaurant, inputDetails);

      document.querySelector('#bestRestaurant>p').textContent = print[0];
      document.querySelector('#workers>p').textContent = print[1];

   function getInput (arr){
      let mainObj = {};
      for(let one of arr){
         let [restaurant, ...staffTokens] = one.split(' - ');
         let staff = staffTokens.join('').split(', ');
         for(let one of staff){
            let [worker, pay] = one.split(' ');
            pay = Number(pay);
            if(!mainObj.hasOwnProperty(restaurant)){
               mainObj[restaurant] = {};
            } 
            mainObj[restaurant][worker] = pay;
         }
      }
      return mainObj;
   }

   function averageHighestSallary(obj){
      return Object.keys(inputDetails).forEach( x => {
         return Object.values(obj[x])
         .reduce((acc,curr,_,arr) => {
             let average = acc  +  (curr / arr.length);
             let highest = (Math.max(...arr));
             highest = Number(highest);
             obj[x]['highest'] = highest;
             return obj[x]['average'] = average;
         },0)
    })
   }

   function getRestaurant (obj){
      let best = Object.keys(obj)
      .sort( (a,b) => {
      return obj[b]['average'] - obj[a]['average'];
      })
      return best[0];
   }

   function getPrinted (best,obj){
      let printArr = [];
      printArr.push(`Name: ${best} Average Salary: ${(obj[best]['average']).toFixed(2)} Best Salary: ${(obj[best]['highest']).toFixed(2)}` );
      let outputString = '';
      let sortedSallaries = Object.keys(obj[best])
      .sort((a,b) => obj[best][b] - obj[best][a])
      for(one of sortedSallaries){
         if(one !== 'average' && one !== 'highest'){
            outputString += (`Name: ${one} With Salary: ${(obj[best][one])} `);
         }
      }
      printArr.push(outputString.trim());
      return printArr;
   }
}

}


