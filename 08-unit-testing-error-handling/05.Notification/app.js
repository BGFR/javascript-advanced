function notify() {
   const notification = document.getElementById('notification');
   let message = notification.textContent;
   const btn = document.querySelector('button')
   btn.addEventListener('click', function (ev) {
      notification.style.display = notification.style.display == 'block'?
      'none':'block';
   })
  }

  // function notify(message) {
//  const notification = document.getElementById('notification');
//  notification.textContent = message;
//     notification.style.display = notification.style.display == 'block'?
//     'none':'block';
// }
