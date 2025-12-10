let list = [];

fetch('show')
  .then(res => res.json())
  .then(fileContent => {
    const listContainer = document.getElementById('table');

    listContainer.innerHTML = `
      <thead>
        <tr>
          <th class="title">Title</th>
          <th class="person">Person</th>
          <th class="year">Year</th>
          <th class="type">Type</th>
          <th class="d-none d-lg-table-cell desc">Description</th>
          <th class="edit">Edit</th>
        </tr>
      </thead>
    `;


    const tbody = document.createElement('tbody');

    list = JSON.parse(fileContent);

    list.forEach((entry) => {
      const tr = document.createElement('tr');

      tr.innerHTML = `
        <td>${entry.title}</td>
        <td>${entry.person}</td>
        <td>${entry.year}</td>
        <td>${entry.type}</td>
        <td class="d-none d-lg-table-cell">${entry.description}</td>
        <td>
          <a href="/edit/${entry.id}" class="btn btn-outline-warning" id="edit-button">&#x1F589</a>
          <form action="/remove/${entry.id}" method="POST">
            <button type="submit" class="btn btn-outline-danger">&#x1F5D1</button>
          </form>
        </td>
      `;

      tr.addEventListener('click', () => {
        window.location.href = `/entry/${entry.id}`;
      })

      tbody.appendChild(tr);
    });

    listContainer.appendChild(tbody);
  });