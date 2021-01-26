function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
 
   function onClick() {
 
      let text = JSON.parse(document.getElementsByTagName("textarea")[0].value);
 
      let restaurants = getRestaurants(text);
      let bestRestaurant = getBestRestaurant(restaurants);
      let bestRestaurantStaff = getBestRestaurantStaff(restaurants);
 
      document.getElementById("bestRestaurant").children[2].textContent = bestRestaurant;
      document.getElementById("workers").children[2].textContent = bestRestaurantStaff;
 
 
 
      function getRestaurants(arr) {
         let restaurants = [];
 
         for (let i = 0; i < arr.length; i++) {
            let workers = [];
            let restaurant = arr[i].split(" - ")[0];
            let workerTokens = arr[i].split("- ")[1].split(", ");
            for (let j = 0; j < workerTokens.length; j++) {
               let workerName = workerTokens[j].split(" ")[0];
               let workerSalary = Number(workerTokens[j].split(" ")[1]);
               workers.push(workerData(workerName, workerSalary));
            }
 
            let restaurantExists = false;
            for (let j = 0; j < restaurants.length; j++) {
               if (restaurants[j].restaurantName === restaurant) {
                  restaurants[j].staffData = restaurants[j].staffData.concat(workers);
                  restaurantExists = true;
               }
            }
 
            if (!restaurantExists) {
               restaurants.push(restaurantData(restaurant, workers));
            }
         }
         return restaurants;
 
         function workerData(worker, salary) {
            return {
               name: worker,
               wage: salary
            }
         }
 
         function restaurantData(restaurant, workers) {
            return {
               restaurantName: restaurant,
               staffData: workers,
               getAverageSalary: function avgSalary() {
                  let salary = 0;
                  for (const w of this.staffData) {
                     salary += w.wage;
                  }
                  salary = salary / this.staffData.length;
                  return salary;
               },
               getHighestSalary: function highestSalary() {
                  let salary = Number.MIN_SAFE_INTEGER;
                  for (const w of this.staffData) {
                     if (w.wage > salary) {
                        salary = w.wage;
                     }
                  }
                  return salary;
               }
            }
         }
      }
 
      function getBestRestaurant(restaurants) {
         let highestAvgSalary = Number.MIN_SAFE_INTEGER;
         let bestRestaurant;
 
         for (let i = 0; i < restaurants.length; i++) {
            if (restaurants[i].getAverageSalary() > highestAvgSalary) {
               highestAvgSalary = restaurants[i].getAverageSalary();
               bestRestaurant = restaurants[i];
            }
         }
         return `Name: ${bestRestaurant.restaurantName} Average Salary: ${bestRestaurant.getAverageSalary().toFixed(2)} Best Salary: ${bestRestaurant.getHighestSalary().toFixed(2)}`;
 
      }
 
      function getBestRestaurantStaff(restaurants) {
         let highestAvgSalary = Number.MIN_SAFE_INTEGER;
         let bestRestaurant;
         let output = "";
         for (let i = 0; i < restaurants.length; i++) {
            if (restaurants[i].getAverageSalary() > highestAvgSalary) {
               highestAvgSalary = restaurants[i].getAverageSalary();
               bestRestaurant = restaurants[i];
            }
         }
 
         for (let i = 0; i < bestRestaurant.staffData.length; i++) {
            output += `Name: ${bestRestaurant.staffData[i].name} with Salary: ${bestRestaurant.staffData[i].wage.toFixed(2)} `;
         }
         return output;
      }
   }
}
