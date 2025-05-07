// Navbar Toggle
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.navbar__hamburger');
    const navCenter = document.querySelector('.navbar__center');
  
    if (hamburger) {
      hamburger.addEventListener('click', () => {
        navCenter.style.display = navCenter.style.display === 'flex' ? 'none' : 'flex';
      });
    }
  
    // Thumbnail Selector
    const thumbs = document.querySelectorAll('.thumb');
    const mainImage = document.querySelector('.gallery__image');
    
    thumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        // Remove active class from all thumbs
        thumbs.forEach(t => t.classList.remove('active'));
        // Add active class to clicked thumb
        thumb.classList.add('active');
        // Update main image
        mainImage.src = thumb.src.replace('thumb', 'product-main');
      });
    });
  
    // Size Selector
    const sizeOptions = document.querySelectorAll('.size__option');
    sizeOptions.forEach(option => {
      option.addEventListener('click', () => {
        sizeOptions.forEach(btn => btn.classList.remove('active'));
        option.classList.add('active');
      });
    });
  
    // Cart Counter
    const addToBag = document.querySelector('.add-to-bag');
    const bagCounter = document.querySelector('.bag-count');
    let count = 0;
  
    if (addToBag) {
      addToBag.addEventListener('click', () => {
        count++;
        bagCounter.textContent = count;
        bagCounter.style.animation = 'bump 300ms ease-out';
        setTimeout(() => {
          bagCounter.style.animation = '';
        }, 300);
      });
    }
  });