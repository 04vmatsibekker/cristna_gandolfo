const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('main section[id]');

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    navLinks.forEach(item => item.classList.remove('active'));
    event.currentTarget.classList.add('active');
  });
});

const setActiveNav = () => {
  const scrollPosition = window.scrollY + window.innerHeight / 3;
  sections.forEach(section => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-link[href='#${id}']`);

    if (navLink) {
      if (scrollPosition >= top && scrollPosition < bottom) {
        navLinks.forEach(item => item.classList.remove('active'));
        navLink.classList.add('active');
      }
    }
  });
};

window.addEventListener('scroll', setActiveNav);
window.addEventListener('load', setActiveNav);

