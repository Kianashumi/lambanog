let previewContainer = document.querySelector('.item-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.item-container .item').forEach(item => {
   item.onclick = () => {
      previewContainer.style.display = 'flex';
         let name = item.getAttribute('data-name');
         previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
             if (name == target){
               preview.classList.add('active');
         }
      });
   };
});

previewBox.forEach(close =>{
   close.querySelector('.fa-solid').onclick = () => {
      close.classList.remove('active');
      previewContainer.style.display = 'none';
   };
});

previewBox.forEach(close =>{
   close.querySelector('.buy').onclick = () => {
      close.classList.remove('active');
      previewContainer.style.display = 'none';
   };
});


