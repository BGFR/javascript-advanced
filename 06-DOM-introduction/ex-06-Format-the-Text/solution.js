function solve() {
  let input = document.querySelector('input').value
  .split('.')
  .filter(x => x!='');

  while(input.length){
    let aParagraph = document.createElement('p');
    aParagraph.innerHTML = input.splice(0,3)+'.';
    document.querySelector('#output').appendChild(aParagraph);
  }
}
