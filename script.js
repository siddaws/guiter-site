const dialogBtns = document.querySelectorAll('.js-btn-dialog');
const dialog = document.getElementById('dialog');
const dialogClose = document.getElementById('dialog-close');
const dialogSubmit = document.getElementById('dialog-submit');
const burger = document.getElementById('burger');
const mobilePanel = document.getElementById('mobile-panel');
const clickOutside = e => {
    if (e.target === dialog) close()
}

const close = () => {
    dialog.classList.add('animate', 'fadeOut');
    dialog.addEventListener('animationend', () => dialog.close(), { once: true });
    document.body.removeEventListener('click', clickOutside)
}
dialogClose.addEventListener('click', close);
dialogSubmit.addEventListener('click', e => {
    e.stopPropagation();
    e.preventDefault();
    close();
});

dialog.addEventListener('animationend', () => {
    dialog.classList.remove('animate', 'fadeIn', 'fadeOut')

});
dialogBtns.forEach(button => {

    button.addEventListener('click', e => {
        e.stopPropagation();
        document.body.addEventListener('click', clickOutside)

        dialog.classList.add('animate', 'fadeIn');
        dialog.showModal();
    });
});


const showMobileMenu = e => {
    e.stopPropagation();
    let bodyClass = document.body.classList
    bodyClass.toggle('open');
    burger.classList.toggle('open');

    document.addEventListener('click', (e) => {
        e.stopPropagation()
        if (!mobilePanel.contains(e.target)) {
            showMobileMenu(e), { once: true }
        }
    })
}


burger.addEventListener('click', showMobileMenu)
