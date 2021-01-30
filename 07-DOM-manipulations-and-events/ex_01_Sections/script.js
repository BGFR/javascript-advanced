function create(words) {
   const content = document.querySelector('#content')

   for(let one of words){
      const aDiv = document.createElement('DIV')
      const aP = document.createElement('P')
      aP.textContent = one;
      aDiv.appendChild(aP)
      aP.style.display = 'none';
      content.appendChild(aDiv)
   }

   content.addEventListener('click', function(ev){
      if(ev.target.tagName === 'DIV' || ev.target.tagName === 'P'){
         const clicked = ev.target.children[0] || ev.target
         const isVisible = clicked.style.display === 'block'
         clicked.style.display = isVisible ? 'none' : 'block';
      }
   })
}

