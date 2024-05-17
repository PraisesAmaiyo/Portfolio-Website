// Set current year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Switch light and sark mode
const toggleBtn = document.querySelector('.toggle-label');
const toggleText = document.querySelector('.toggle-text');

toggleBtn.addEventListener('click', () => {
  const root = document.documentElement;
  const isDarkMode = root.classList.toggle('isDarkMode');

  if (isDarkMode) {
    toggleText.innerHTML = 'Go Light';

    root.style.setProperty('--orange', '#d1593c');
    root.style.setProperty('--black', 'rgba(50, 65, 81, 0.384)');
    root.style.setProperty('--white', '#fff');
    root.style.setProperty('--grey', '#dfdfde');
    root.style.setProperty('--grey-2', '#f5f5f5');
    root.style.setProperty('--faint', '#dfdfde3e');
    root.style.setProperty('--dark', 'rgba(24, 40, 56, 0.924)');
    root.style.setProperty('--light', '#dee2e6');
    root.style.setProperty('--bgColor1', '24, 40, 56');
    root.style.setProperty('--bgColor2', '24, 40, 56');
  } else {
    toggleText.innerHTML = 'Go Dark';

    root.style.setProperty('--orange', '#013486');
    root.style.setProperty('--black', '#dee2e6');
    root.style.setProperty('--white', '#212529');
    root.style.setProperty('--grey', '#343140');
    root.style.setProperty('--grey-2', '#f8f9fa');
    root.style.setProperty('--faint', '#dfdfde3e');
    root.style.setProperty('--dark', 'rgba(24, 40, 56, 0.924)');
    root.style.setProperty('--light', '#dee2e6');
    root.style.setProperty('--bgColor1', '248, 249, 250');
    root.style.setProperty('--bgColor2', '241, 243, 245');
  }
});

// Modal
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-content');
const images = document.getElementsByClassName('portfolio-info__img');
const container = document.querySelector('.container');

function openModal() {
  modal.classList.add('active');
  container.classList.add('blur');
}

function closeModal() {
  modal.classList.remove('active');
  container.classList.remove('blur');
}

for (var i = 0; i < images.length; i++) {
  images[i].addEventListener('click', function () {
    modalImg.src = this.src;
    openModal();
  });
}

var closeBtn = document.getElementsByClassName('close')[0];
closeBtn.addEventListener('click', function () {
  closeModal();
});

document.addEventListener('click', function (event) {
  if (
    modal.classList.contains('active') &&
    !modal.contains(event.target) &&
    event.target.getAttribute('class') !== 'portfolio-info__img'
  ) {
    closeModal();
  }
});

// Lazy image

document.addEventListener('DOMContentLoaded', function () {
  const lazyImages = document.querySelectorAll('.lazy');

  const preloadImages = () => {
    lazyImages.forEach((image) => {
      const img = new Image();
      img.src = image.dataset.src;
      img.onload = () => {
        image.src = img.src;
        image.classList.remove('lazy');
        image.classList.add('lazy-loaded');
        // Remove spinner
        const spinner = image.nextElementSibling;
        if (spinner && spinner.classList.contains('spinner')) {
          spinner.style.display = 'none';
        }
      };
    });
  };

  const imageObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.onload = () => {
            img.classList.remove('lazy');
            img.classList.add('lazy-loaded');
            // Remove spinner
            const spinner = img.nextElementSibling;
            if (spinner && spinner.classList.contains('spinner')) {
              spinner.style.display = 'none';
            }
          };
          observer.unobserve(img);
        }
      });
    },
    {
      rootMargin: '0px 0px 100px 0px',
    }
  );

  lazyImages.forEach((image) => {
    imageObserver.observe(image);
  });

  // Preload images as soon as the page loads
  preloadImages();
});
