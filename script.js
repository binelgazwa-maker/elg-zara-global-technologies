document.addEventListener('DOMContentLoaded', () => {

  // Automatically update the copyright year
  const year = document.getElementById('year');

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Mobile navigation menu
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');

      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.textContent = isOpen ? '✕' : '☰';
    });
  }

  // Contact form
  const form = document.getElementById('contactForm');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const data = new FormData(form);

      const subject = encodeURIComponent(
        'Project enquiry - ELGZARA GLOBAL TECHNOLOGIES'
      );

      const body = encodeURIComponent(
        `Name: ${data.get('name')}\n` +
        `Email: ${data.get('email')}\n` +
        `Service: ${data.get('service')}\n\n` +
        `Project details:\n${data.get('message')}`
      );

      // Your official business email
      const recipient = 'binelgazwa@gmail.com';

      const note = document.getElementById('formNote');

      if (note) {
        note.textContent = 'Opening your email app...';
      }

      window.location.href =
        `mailto:${recipient}?subject=${subject}&body=${body}`;
    });
  }

});
