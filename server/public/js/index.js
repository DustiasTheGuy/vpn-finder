const starContainers = Array.from(document.querySelectorAll('.stars'));
const maxRating = 5;

starContainers.forEach((starContainer) => {
  const rating = Number(starContainer.getAttribute('data-rating'));

  for (let i = 0; i < maxRating; i++) {
    let star = document.createElement('span');
    let classList = ['material-icons-outlined'];
    star.textContent = 'star';

    if (i < rating) {
      classList.push('star-yellow');
    } else {
      classList.push('star-dark');
    }

    star.classList.add(...classList);
    starContainer.appendChild(star);
  }
});
