// Basic interactivity for the static site
document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');
navToggle && navToggle.addEventListener('click', ()=> {
  if(nav.style.display === 'flex') nav.style.display = 'none';
  else nav.style.display = 'flex';
});

function subscribe(e){
  e.preventDefault();
  const email = document.getElementById('email').value;
  alert('Thanks! ' + email + ' — we would add you to the mailing list (no backend in this demo).');
  e.target.reset();
}

function contactSubmit(e){
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('contact-email').value;
  const msg = document.getElementById('message').value;
  alert('Thanks, ' + name + '! Message received (demo).\\nWe would email you at ' + email + '.');
  e.target.reset();
}
