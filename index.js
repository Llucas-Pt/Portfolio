addEventListener('scroll', checkHeight)

function checkHeight() {
    if(window.scrollY > 400 ){
        scrollTop.style.display = "flex"
    }
    else {
        scrollTop.style.display = "none"
    }
}


document.querySelector('.hamburguer-menu').addEventListener('click', function() {
    this.classList.toggle('ativo');

    document.querySelector('.links2').classList.toggle('ativo');
  });
