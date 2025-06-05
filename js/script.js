// script.js

(function() {
  const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  // Check localStorage for saved theme (optional)
  if (localStorage.getItem('preferred-theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleBtn.textContent = 'Light Mode';
  }

  toggleBtn.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark-mode');
    toggleBtn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    localStorage.setItem('preferred-theme', isDark ? 'dark' : 'light');
  });
})();
