'use strict';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';
import 'slick-carousel';

//open menu
document.addEventListener('DOMContentLoaded', function() {
    const openBtn = document.getElementById('open-mobile-menu');
    const closeBtn = document.getElementById('close-mobile-menu');
    const menu = document.querySelector('.mobile-menu');
    const menuItems = document.querySelectorAll('.mob-nav-list-link');

    function closeMenu() {
        menu.style.transform = 'translateY(-150%)';
    }

    openBtn.addEventListener('click', function() {
        menu.style.transform = 'translateY(0)';
    });

    closeBtn.addEventListener('click', function() {
        closeMenu();
    });

    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            closeMenu();
        });
    });
});

//open backdrop
document.addEventListener('DOMContentLoaded', function() {
  const openBD = document.getElementById('open_backdrop');
  const closeBD = document.getElementById('close_backdrop');
  const backDrop = document.querySelector('.backdrop');
  const sendBtn = document.querySelector('.backdrop-send-btn');

  function closeBackDrop() {
    backDrop.style.opacity = '0';
    backDrop.style.visibility = 'hidden';
    backDrop.style.pointerEvents = 'none'; 
  }

  openBD.addEventListener('click', function() {
    backDrop.style.opacity = '1'; 
    backDrop.style.visibility = 'visible'; 
    backDrop.style.pointerEvents = 'auto'; 
  });

  closeBD.addEventListener('click', function() {
    closeBackDrop();
  });

  sendBtn.addEventListener('click', function() {
    closeBackDrop();
  });
});

//open modal
document.addEventListener('DOMContentLoaded', function() {
  const openModalBtn = document.getElementById('open_modal') || document.getElementById('open_modal_footer'); 
  const modal = document.querySelector('.modal-backdrop');
  const closeBtn = document.getElementById('close_modal'); 
  const form = document.querySelector('.modal-form');
  // Перевірка, що елементи знайдені
  if (!openModalBtn || !modal || !closeBtn || !form) {
    console.warn('Деякі елементи не знайдені. Перевірте HTML-структуру.');
    return;
  }
  
  openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });
  
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('user-name').value;
    const email = document.getElementById('email').value;
    const tel = document.getElementById('tel').value;
    const comment = document.getElementById('user-comment').value;
    const policyAccepted = document.getElementById('policy').checked;
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', tel);
    console.log('Comment:', comment);
    console.log('Privacy Policy accepted:', policyAccepted);
    
    modal.style.display = 'none';
   
    form.reset();
  });
});


//плавний скрол по сторінці
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(event) {
        if (event.target.matches('a[href^="#"]')) {
            event.preventDefault();
            const id = event.target.getAttribute('href');
            const targetElement = document.querySelector(id);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

//taste cards
var cards = document.querySelectorAll('.taste-item');

[...cards].forEach(card => {

 const button = card.querySelector('.swiper-button-next');


 button.addEventListener('click', function (event) {
 event.stopPropagation(); 


 card.classList.toggle('is-flipped');


 if (card.classList.contains('is-flipped')) {
 button.classList.add('rotated');
 } else {
 button.classList.remove('rotated');
 }
 });
});

document.addEventListener('DOMContentLoaded', function () {
    // Slider for Sellers and Lovers Section
    $('.sellers-list, .loved-list').slick({ // list
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1500,
      infinite: true,
      arrows: false,
      draggable: true,
      easing: 'easeOutSine',
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        },
      ],
    });
});


//down-btn
document.addEventListener('DOMContentLoaded', function() {
  const heroDownLink = document.querySelector('.hero-down-link');

  if (heroDownLink) {
      heroDownLink.addEventListener('click', function(event) {
          event.preventDefault(); // Запобігаємо стандартному переходу

          const footer = document.getElementById('footer');
          if (footer) {
              footer.scrollIntoView({
                  behavior: 'smooth' // Плавний скрол
              });
          }
      });
  }
});

///skroll_____up-btn__in___section___hero
const mybutton = document.getElementById("scrollBtn");

window.addEventListener("scroll", scrollFunction)


function scrollFunction() {
  if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35 ) {
    mybutton.style.display ="flex";
  } else {
    mybutton.style.display = "none";
  }
}
//preloader
window.addEventListener('load', function() {
    var preloader = document.querySelector('.preloader');
    preloader.style.display = 'none';
  });

