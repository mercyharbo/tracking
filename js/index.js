function classToggle() {
  const navs = document.querySelectorAll('.nav-items')
  
  navs.forEach(nav => nav.classList.toggle('toggleShow'));
}

document.querySelector('.toggle')
  .addEventListener('click', classToggle);