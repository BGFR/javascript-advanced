function lockedProfile() {

    document.querySelector('main').addEventListener('click', onClick)

    function onClick(ev) {
        if (ev.target.nodeName == 'BUTTON') {
            const parent = ev.target.parentNode
            const lock = parent.querySelector('input[type="radio"][value="lock"]')
            if (lock.checked) {
                return
            }
            const hidden = parent.querySelector('div')

            if (ev.target.innerText === 'Hide it') {
                ev.target.innerText = 'Show More'
                hidden.style.display = 'none'
            } else {
                ev.target.innerText = 'Hide it'
                hidden.style.display = 'block'
            }
        }

    }

}
