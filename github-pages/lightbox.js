// 画像をクリックしたときに拡大表示するライトボックス
const lightbox = document.querySelector('#lightbox');
const lightboxImage = lightbox.querySelector('img');
const lightboxCaption = lightbox.querySelector('.caption');

const open = ({ currentSrc, src, alt }) => {
  lightboxImage.src = currentSrc || src;
  lightboxImage.alt = alt;
  lightboxCaption.textContent = alt;
  lightbox.classList.add('open');
  document.body.classList.add('lb-open');
};

const close = () => {
  lightbox.classList.remove('open');
  document.body.classList.remove('lb-open');
  lightboxImage.removeAttribute('src');
};

for (const image of document.querySelectorAll('figure img')) {
  image.addEventListener('click', () => open(image));
}

lightbox.addEventListener('click', close);

document.addEventListener('keydown', ({ key }) => {
  if (key === 'Escape') close();
});
