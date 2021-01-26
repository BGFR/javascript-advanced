function solve() {
  let input = document.querySelector('input').value
  .split('.')
  .filter(x => x!='');

  while(input.length){
    let aParagraph = document.createElement('p')
    aParagraph.innerHTML = input.splice(0,3)+'.'
    document.querySelector('#output').appendChild(aParagraph)
  }
}

// // A-Manev github 100/100
// function solve() {
//   let input = document.getElementById('input').value
//     .split('.')
//     .filter(x => x != '');

//   let result = '';
//   while (input.length) {
//     let currentParagraph = input.splice(0, 3);
//     result += `<p>${currentParagraph.join('.')}.</p>`;
//   }

//   document.getElementById('output').innerHTML = result;
// }

// // 80/100 ot facebook grupata
// function solve() {
//   let inputText = document.getElementById('input').value;
//   let sentenceList = Array.from(inputText.split(". "))
//   let trial = []
//   while(sentenceList.length>=3) {
//     if (sentenceList[0]=="") {
//       break;
//     }
//       trial = sentenceList.splice(0,3)
//       let paragraph = document.createElement("P")
//       paragraph.innerHTML = trial.join(".") + '.'
//        document.getElementById('output').appendChild(paragraph) 
//     }
//     if (sentenceList.length < 3 && sentenceList[0]!="") {
//       let paragraph = document.createElement("P")
//       paragraph.innerHTML = sentenceList.join(".")
//        document.getElementById('output').appendChild(paragraph) 
//     }
//   }