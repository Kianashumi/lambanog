let previewContainerNether = document.querySelector('.nether-item-preview');
let previewBoxNether = previewContainerNether.querySelectorAll('.nether-preview');

document.querySelectorAll('.nether-item-container .nether-item').forEach(netheritem => {
   netheritem.onclick = () => {
      previewContainerNether.style.display ='flex';
         let nethername = netheritem.getAttribute('ndata-name');
         previewBoxNether.forEach(netherpreview => {
            let nethertarget = netherpreview.getAttribute('ndata-target');
             if (nethername == nethertarget){
               netherpreview.classList.add('active');
         }
      });
   };
});

previewBoxNether.forEach(close =>{
   close.querySelector('.fa-solid').onclick = () => {
      close.classList.remove('active');
      previewContainerNether.style.display = 'none';
   };
});

previewBoxNether.forEach(close =>{
   close.querySelector('.buy').onclick = () => {
      close.classList.remove('active');
      previewContainerNether.style.display = 'none';
   };
});