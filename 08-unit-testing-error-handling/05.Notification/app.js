function notify(message) {
   const notification = document.getElementById('notification');
   notification.textContent = message;
   notification.style.display = notification.style.display == 'block' ?
      'none' : 'block';
}

