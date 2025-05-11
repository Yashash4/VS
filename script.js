
// =========== ACCORDION (Composition / More) ===========
document.querySelectorAll('.accordion-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    const isOpen = btn.classList.toggle('active');
    if (isOpen) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = null;
    }
  });
});

// =========== SIZE SELECTION ===========
const sizeButtons = document.querySelectorAll('.sizes .size');
sizeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // remove selected from all
    sizeButtons.forEach(b => b.classList.remove('selected'));
    // add to clicked
    btn.classList.add('selected');
  });
});

// =========== QUANTITY CONTROLS ===========
const qtyInput = document.querySelector('.qty-input');
document.querySelectorAll('.qty-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    let current = parseInt(qtyInput.value, 10);
    if (btn.textContent.trim() === '+') {
      qtyInput.value = current + 1;
    } else if (btn.textContent.trim() === '–' && current > 1) {
      qtyInput.value = current - 1;
    }
  });
});
