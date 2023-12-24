
/*  First modal, - sendme mail*/

const modal = document.querySelector('.modal')
const dialog = document.querySelector('dialog')
const close = document.querySelector('.dialog_cancel p')
modal.onclick = function () {
    dialog.showModal()
}
close.onclick = () => {
    dialog.close()
}