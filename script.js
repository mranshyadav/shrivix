
// ── FOOTER template
function footerHTML() {
  return `<footer>
    <div class="fg">
      <div class="fb">
        <button class="logo" onclick="goTo('home')">
          <svg height="28" viewBox="0 0 853 200" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M153.696 43.5913L137.192 65.2688C136.776 65.2212 136.354 65.1967 135.926 65.1967C129.863 65.1967 124.948 70.1117 124.948 76.1747C124.948 82.2377 129.863 87.1527 135.926 87.1527C141.989 87.1527 146.904 82.2377 146.904 76.1747C146.904 74.4821 146.521 72.8789 145.837 71.4471L175.524 32.8219H67.8215L51.4477 53.7574L59.6258 61.4455L72.7466 43.5913H153.696ZM130.846 76.1747C130.846 78.9803 133.12 81.2546 135.926 81.2546C136.156 81.2546 136.382 81.2393 136.604 81.2097C139.087 80.8677 140.999 78.7379 140.999 76.1615C140.999 75.4478 140.852 74.7686 140.587 74.152C139.806 72.3529 138.013 71.0948 135.926 71.0948C133.12 71.0948 130.846 73.3691 130.846 76.1747Z" fill="#0C141E"/><path d="M296.475 82.445V92.2249C296.475 93.5753 295.38 94.6699 294.03 94.6699H237.84C232.438 94.6699 228.06 99.0486 228.06 104.45V106.717C228.06 112.119 232.438 116.497 237.84 116.497H274.321C288.45 116.497 299.904 127.951 299.904 142.081C299.904 156.21 288.45 167.664 274.321 167.664H214.747C213.397 167.664 212.302 166.57 212.302 165.219V155.347C212.302 154.048 213.355 152.994 214.655 152.994H274.321C280.348 152.994 285.234 148.108 285.234 142.081C285.234 136.053 280.348 131.167 274.321 131.167H237.108C222.979 131.167 211.524 119.713 211.524 105.584C211.524 91.4542 222.979 80 237.108 80H294.03C295.38 80 296.475 81.0947 296.475 82.445Z" fill="#0C141E"/><path d="M338.443 80.019H323.603V168H338.443V131.429H399.62V168H414.46V80.019H399.62V116.59H338.443V80.019Z" fill="#0C141E"/></svg>
        </button>
        <p>Modern AI and technology solutions for businesses that want to operate at their very best.</p>
        <div class="fo"><div class="fo-dot"></div>Accepting new clients</div>
      </div>
      <div class="fc"><h5>Company</h5><ul>
        <li><button onclick="goTo('home')">Home</button></li>
        <li><button onclick="goTo('about')">About</button></li>
        <li><button onclick="goTo('careers')">Careers</button></li>
        <li><button onclick="goTo('contact')">Contact</button></li>
      </ul></div>
      <div class="fc"><h5>Services</h5><ul>
        <li><button onclick="goTo('services')">All Services</button></li>
        <li><button onclick="goTo('products')">AI Agents</button></li>
        <li><button onclick="goTo('services')">Web Development</button></li>
        <li><button onclick="goTo('services')">Automation</button></li>
      </ul></div>
      <div class="fc"><h5>Legal</h5><ul>
        <li><button>Privacy Policy</button></li>
        <li><button>Terms of Service</button></li>
        <li><button>Cookie Policy</button></li>
      </ul></div>
    </div>
    <div class="fbot">
      <p>© 2025 Shrivix Technologies. All rights reserved.</p>
      <div class="socs">
        <button class="soc" title="X / Twitter"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.734l7.727-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></button>
        <button class="soc" title="LinkedIn"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></button>
        <button class="soc" title="GitHub"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></button>
        <button class="soc" title="Instagram"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></button>
      </div>
    </div>
  </footer>`;
}

['home','services','products','about','careers','contact'].forEach(p => {
  const el = document.getElementById('footer-' + p);
  if (el) el.outerHTML = footerHTML();
});

const pages = ['home','services','products','about','careers','contact'];
let current = 'home';

function goTo(page) {
  if (!pages.includes(page)) return;
  pages.forEach(p => {
    const el = document.getElementById('page-' + p);
    if (el) el.classList.remove('active');
    const btn = document.getElementById('nav-' + p);
    if (btn) btn.classList.remove('active');
  });
  const target = document.getElementById('page-' + page);
  if (target) {
    target.classList.add('active');
    window.scrollTo({top: 0, behavior: 'instant'});
    document.documentElement.scrollTop = 0;
    setTimeout(() => {
      const els = target.querySelectorAll('.rv:not(.on)');
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on'); });
      }, {threshold: 0.08});
      els.forEach(el => obs.observe(el));
      target.querySelectorAll('.rv').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) el.classList.add('on');
      });
    }, 50);
  }
  const navBtn = document.getElementById('nav-' + page);
  if (navBtn) navBtn.classList.add('active');
  current = page;
}

const navEl = document.getElementById('nav');
window.addEventListener('scroll', () => navEl.classList.toggle('solid', scrollY > 40));

function toggleDrawer() { document.getElementById('drawer').classList.toggle('open'); }
function closeDrawer() { document.getElementById('drawer').classList.remove('open'); }

function openApply(role) {
  document.getElementById('applyRole').textContent = role;
  document.getElementById('applyForm').style.display = 'block';
  document.getElementById('applySuccess').style.display = 'none';
  document.getElementById('applyModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeApply() {
  document.getElementById('applyModal').classList.remove('open');
  document.body.style.overflow = '';
}
function handleModalBg(e) { if (e.target === document.getElementById('applyModal')) closeApply(); }
function submitApply(e) {
  e.preventDefault();
  document.getElementById('applyForm').style.display = 'none';
  document.getElementById('applySuccess').style.display = 'block';
}

function submitForm(e) {
  e.preventDefault();
  document.getElementById('cform').style.display = 'none';
  document.getElementById('fsuccess').style.display = 'block';
}

setTimeout(() => goTo('home'), 100);
