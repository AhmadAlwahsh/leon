let header = document.getElementById('header');
window.onscroll = function(){
  if (window.scrollY > 100) {
    header.style.backgroundColor = 'rgba(0,0,0,0.3)';
  }else{
    header.style.backgroundColor = 'transparent';
  }
}
let links = document.getElementById('links');
let ul = document.getElementById('ul')

links.addEventListener('click',function(){
  if (ul.classList.contains('block') === false) {
    ul.classList.add('block');
  }else{
    ul.classList.remove('block');
  }
})
