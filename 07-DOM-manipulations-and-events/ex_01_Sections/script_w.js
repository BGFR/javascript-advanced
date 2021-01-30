function create(words) {
   const content = document.getElementById('content')

   for(let one of words){
      let aDiv = document.createElement('DIV')
      let aP = document.createElement('p')
      aP.textContent = one;
      aDiv.appendChild(aP)
      aP.style.display = 'none'
      content.appendChild(aDiv)
   }

   content.addEventListener('click', function(ev){
      if(ev.target.tagName === 'DIV' || ev.target.tagName === 'P'){
         const p = ev.target.children[0] || ev.target
         const isVisible = p.style.display === 'block'
         p.style.display = isVisible ? 'none' : 'block';
      }

   })
}