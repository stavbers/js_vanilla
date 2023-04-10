document.addEventListener("DOMContentLoaded", function(event){
  const accordEl = document.querySelectorAll('.accordion-body__elm')
  const accordLinks = document.querySelectorAll('.accordion__item')
  
  function accordion(){
    accordLinks.forEach((el, indx)=> {
      
      el.addEventListener('click', ()=> {
        hideItem(accordEl)
        showItem(accordEl[indx])
      })
    })
  }
  
  function showItem(el){
    el.classList.remove('accordion-hide')
  }
  
  function hideItem(el){
  el.forEach(element => {
    element.classList.add('accordion-hide')
    
  });
  }

  accordion()
});
  
