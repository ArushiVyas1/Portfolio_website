const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('main section');

tabs.forEach(tab => {
  tab.addEventListener('click', e => {
    e.preventDefault();
    tabs.forEach(t => t.classList.remove('active'));
    sections.forEach(sec => sec.style.display = 'none');

    tab.classList.add('active');
    const target = document.querySelector(tab.getAttribute('href'));
    target.style.display = 'block';
  });
});
