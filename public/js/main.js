import { initHeader } from '../components/js/header.js';

async function loadHtml(selector, url) {
  const el = document.querySelector(selector);
  if (!el) return;
  const res = await fetch(url);
  if (!res.ok) return;
  el.innerHTML = await res.text();
}

document.addEventListener('DOMContentLoaded', async () => {
  await loadHtml('#headerContainer', './components/header.html');
  await loadHtml('#footerContainer', './components/footer.html');
  initHeader();
});
