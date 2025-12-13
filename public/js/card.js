document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('cards-container');

  container.addEventListener('click', (e) => {
    const card = e.target.closest('.card');

    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') return;

    const id = card.dataset.id;
    window.location.href = `/entry/${id}`;
  });

  const deleteForms = document.querySelectorAll('form[action^="/remove/"]');
  deleteForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      const confirmed = confirm('Are you sure you want to delete this entry?');
      if (!confirmed) e.preventDefault();
    });
  });
});