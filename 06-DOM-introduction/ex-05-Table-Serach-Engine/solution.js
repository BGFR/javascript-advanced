function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let list = [...document.querySelectorAll('table tbody tr')]
   function onClick() {
      
      let searchField = document.getElementById('searchField').value
      console.log(searchField);

      for(let tr of list){
         if(tr.textContent.toLowerCase().includes(searchField.toLowerCase()) &&
         searchField !== ''){
            // tr.setAttribute('class', 'select') 
            tr.classList.add('select') 
         } else {
            tr.removeAttribute('class')
         }
      }

   }

} 