//

const activeBackModal =()=>{
   // vars
   const modalforfront = document.querySelector('.modalforfront')
   const modal = document.querySelector('.modalservices')

   modalforfront.style.display = 'block'
   modal.style.display = 'flex'
   const closebtn = document.querySelector('.closefront')
   closebtn.addEventListener('click', () => {
      modalforfront.style.display = 'none'
      modal.style.display = 'none'
   })
   
}
const activeFrontModal = ()=>{
   // vars
   const modalforback = document.querySelector('.modalforback')
   const modal = document.querySelector('.modalservices')

   modalforback.style.display = 'block'
   modal.style.display = 'flex'
   const closebtn = document.querySelector('.closeback')
   closebtn.addEventListener('click', () => {
      modalforback.style.display = 'none'
      modal.style.display = 'none'
   })
   
}
function mixitup_start(){

   var products = document.querySelector('.products');
var mixer = mixitup(products);
}
mixitup_start()
