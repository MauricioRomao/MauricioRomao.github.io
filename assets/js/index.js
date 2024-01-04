

/* <!---  scroll top --> */


window.onscroll =  ()=> {
    scrollFunction();
};

function scrollFunction() {
    var scrollToTopBtn = document.querySelector('.scroll_controller');

    if (document.body.scrollTop > 130 || document.documentElement.scrollTop > 130) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; // <!-- Para navegadores Safari -->
    document.documentElement.scrollTop = 0; // <!--- Para outros navegadores -->
}



/* <!---  First modal, - sendme mail -->*/

const modal = document.querySelector('.modal')
const dialog = document.querySelector('dialog')
const close = document.querySelector('.dialog_cancel p')
modal.onclick = function () {
    dialog.showModal()
    dialog.classList.add('opacity')
}
close.onclick = () => {
    dialog.close()
    dialog.classList.remove('opacity')


}

