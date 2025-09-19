const ENDPOINT = 'https://flat-bush-4b41.kapany3u4ek.workers.dev'; 

const dlg = document.getElementById('statusDialog');
const titleEl = document.getElementById('statusTitle');
const textEl  = document.getElementById('statusText');
const iconEl  = document.getElementById('statusIcon');
const okBtn   = document.getElementById('okBtn');
const form    = document.getElementById('contactForm');
const sendBtn = document.querySelector('.contacts__button');

function showPopup({title, text, type='success'}) {
  dlg.classList.remove('success','error');
  dlg.classList.add(type === 'success' ? 'success' : 'error');
  titleEl.textContent = title;
  textEl.textContent = text;
  if (!dlg.open) dlg.showModal();
  okBtn.focus();
}
okBtn.addEventListener('click', () => dlg.close());
dlg.addEventListener('cancel', e => { e.preventDefault(); dlg.close(); }); 

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  sendBtn.disabled = true; 
  sendBtn.textContent = 'Sending…';

  const data = Object.fromEntries(new FormData(form).entries());
  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      form.reset();
      showPopup({
        title: 'The message has been sent',
        text: 'Thank you for your message. I will contact you soon.',
        type: 'success'
      });
    } else {
      const err = await res.text();
      showPopup({
        title: "Couldn't send",
        text: 'Please try again later or email to elena.kharsova@gmail.com. (' + err.slice(0,120) + ')',
        type: 'error'
      });
    }
  } catch {
    showPopup({
      title: 'The network is unavailible',
      text: 'Check your connection and try again',
      type: 'error'
    });
  } finally {
    sendBtn.disabled = false; 
    sendBtn.textContent = 'Sent';
  }
});