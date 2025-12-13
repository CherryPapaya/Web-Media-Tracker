document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('cards-container');

  container.addEventListener('click', (e) => {
    const card = e.target.closest('.card');

    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') return;

    const id = card.dataset.id;
    window.location.href = `/entry/${id}`;
  });
});



