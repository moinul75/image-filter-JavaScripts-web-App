(function(){
   //get the elements 
   const button = document.querySelectorAll('.btn'); 
   const storeImg = document.querySelectorAll('#store_images .filter-img');
   
   //now set a button where add img
   button.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        e.preventDefault(); 
        //filter set using class 
        const filter = e.target.dataset.filter

        storeImg.forEach((item) => {
            // if all selected 
            if (filter === 'all') {
                item.style.display = 'block'; 
            } else {
                if (item.classList.contains(filter)) {
                    item.style.display = 'block'; 
                } else {
                    item.style.display = 'none';
                }
            }
        });
        
    })
   })
})();