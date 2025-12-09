// interactive for menu burger -->
const burger = document.querySelector('#burger-toggle');
const menunavbox = document.querySelector('.menunavbox');
const links = document.querySelectorAll('.menunav-list a');
burger.addEventListener('click', () => {
  //выезжающая меню
  menunavbox.style.right = burger.checked ? '0px' : '-100%';
  //когда менюшка выехала, блокируем прокрутку под ней.
  document.body.style.overflow = burger.checked ? 'hidden' : 'auto';
});
links.forEach(link => {
  link.addEventListener('click', () => {
    //крестик превращается в палочки:
    burger.checked = false;
    //менюшка заезжает назад:
    menunavbox.style.right = '-100%'
    //прокрутка по сайту опять активна:
    document.body.style.overflow = 'auto';
  });
});


//interactive for reclama slider
const slides = document.querySelectorAll('.ad-slide');
const adBox = document.getElementById('adBox');
const closeBtn = document.getElementById('adClose');

let index = 0;
let closeCount = 0;

// ✅ Автослайдер каждые 15 сек
setInterval(() => {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}, 15000);

// ✅ Логика закрытия
closeBtn.addEventListener('click', () => {
  closeCount++;
  adBox.style.display = 'none';

  // ❗ После второго раза больше не показывается
  if (closeCount >= 2) return;

  // 🕑 После первого — показ через 2 минуты
  setTimeout(() => {
    adBox.style.display = 'block';
  }, 12000);

});