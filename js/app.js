/*-------------------------------- Constants --------------------------------*/


/*---------------------------- Variables (state) ----------------------------*/


/*------------------------ Cached Element References ------------------------*/



/*----------------------------- Event Listeners -----------------------------*/


/*-------------------------------- Functions --------------------------------*/
const scrollUp = document.getElementById('top')

scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0, 
    behavior: 'smooth'
  });
})
