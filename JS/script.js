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
