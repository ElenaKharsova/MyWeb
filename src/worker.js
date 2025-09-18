const ENDPOINT = 'https://flat-bush-4b41.kapany3u4ek.workers.dev'; 

const form = document.getElementById('contactForm');
const statusEl = document.querySelector('.form-contacts__status');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  statusEl.textContent = 'Sending…';
  const data = Object.fromEntries(new FormData(form).entries());
  console.log("data", data);

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(data)
    });
    if (res.ok) {
      statusEl.textContent = 'The message has sent!';
      form.reset();
    } else {
      statusEl.textContent = 'Error. Try again later!';
    }
  } catch {
    statusEl.textContent = 'The network is unavailable. Try again later';
  }
});