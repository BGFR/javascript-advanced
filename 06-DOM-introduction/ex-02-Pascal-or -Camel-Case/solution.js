function solve() {
  let input = document.getElementById('text').value;
  let current = document.getElementById('naming-convention').value;

  let result = input.toLowerCase().split('');

  if (current == 'Camel Case') {
    for (let i = 0; i < input.length; i++) {
      if (result[i] == ' ') {
        result[i + 1] = result[i + 1].toUpperCase();
      }
    }
    result = result.join('').split(' ').join('')
  } else if (current == 'Pascal Case') {
    result[0] = result[0].toUpperCase();
    for (let i = 1; i < input.length; i++) {
      if (result[i] == ' ') {
        result[i + 1] = result[i + 1].toUpperCase();
      }
    }
    result = result.join('').split(' ').join('');
  } else {
    result = 'Error!'
  }


  document.getElementById('result').textContent = result;

}

solve()