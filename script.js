const scrollToTop = document.querySelector('.scroll-to-top');
const root = document.querySelector(':root');


const showScrollHeight = () => {

  const scrollHeight = window.scrollY;
  const letToScroll = document.body.getBoundingClientRect().height - window.innerHeight;
  // console.log(`wysokość viewportu: ${window.innerHeight}`);
  // console.log(`wysokość strony: ${document.body.getBoundingClientRect().height}`);

  const scrollBarWidth = Math.floor((scrollHeight / letToScroll) * 100);

  root.style.setProperty('--scroll-width', scrollBarWidth + '%');
  if(scrollBarWidth > 100){
    scrollToTop.classList.add('active');
  } else {
    scrollToTop.classList.remove('active');
  }
}

const scrollUp = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  })
}

window.addEventListener('scroll', showScrollHeight);
scrollToTop.addEventListener('click', scrollUp);