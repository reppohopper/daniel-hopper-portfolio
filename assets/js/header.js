(function () {
  const header = document.getElementById('site-header');
  if (!header) return;

  header.innerHTML = `
    <nav>
      <ul>
        <li><strong>Daniel Hopper<br>Portfolio</strong></li>
      </ul>
      <ul>
        <li><a href="index.html" data-nav="index">Home</a></li>
        <li><a href="about.html" data-nav="about">About</a></li>
        <li><a href="projects.html" data-nav="projects">Projects</a></li>
        <li><a href="resume.html" data-nav="resume">Resume</a></li>
        <li><a href="contact.html" data-nav="contact">Contact</a></li>
      </ul>
    </nav>
  `;

  // Figure out which page we're on
  const path = window.location.pathname;
  // e.g. /cs-portfolio/index.html -> index.html
  let file = path.split('/').filter(Boolean).pop() || 'index.html';

  // Handle `/` or `/cs-portfolio/` (no explicit file)
  if (!file.includes('.')) {
    file = 'index.html';
  }

  const pageKey = file.replace('.html', '') || 'index';

  // Add aria-current to the matching link
  const activeLink = header.querySelector(`a[data-nav="${pageKey}"]`);
  if (activeLink) {
    activeLink.setAttribute('aria-current', 'page');
  }
})();
  