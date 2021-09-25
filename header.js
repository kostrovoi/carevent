const menuList = document.querySelector('.menu__list'),
      checkbox = document.querySelector('#nav-toggle');

menuList.addEventListener('click', (e) => {
  e.stopPropagation()
  if(checkbox) {
    checkbox.checked = false;
  }
}, true);