function search() {
   let list = [...document.querySelectorAll('#towns>li')]
   let input = document.querySelector('input').value;
   let result = document.getElementById('result');

   let arr = []
   for(let li of list){
      if(li.textContent.toUpperCase().includes(input.toUpperCase())){
         li.style.fontWeight = 'bold'
         li.style.textDecoration = 'underline'
         arr.push(li)
      }
   }
   return result.textContent = arr.length+' matches found';
}
