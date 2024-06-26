let preveiwContainer = document.querySelector('.chars-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.product-container .char').forEach(char =>{
  char.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = char.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
    close.querySelector('.fa-times').onclick = () =>{
      close.classList.remove('active');
      preveiwContainer.style.display = 'none';
    };
  });