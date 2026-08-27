const menuButton = document.querySelector('[data-menu-button]');
const mobileNav = document.querySelector('[data-mobile-nav]');

if (menuButton && mobileNav) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    mobileNav.classList.toggle('is-open', !open);
  });

  mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    mobileNav.classList.remove('is-open');
  }));
}

document.querySelectorAll('[data-compare]').forEach((compare) => {
  const range = compare.querySelector('[data-compare-range]');
  const after = compare.querySelector('[data-compare-after]');
  const line = compare.querySelector('[data-compare-line]');
  const update = () => {
    after.style.width = `${range.value}%`;
    line.style.left = `${range.value}%`;
  };
  range.addEventListener('input', update);
  update();
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
