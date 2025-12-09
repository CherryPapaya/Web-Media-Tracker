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

    list.forEach((item) => {
      const tr = document.createElement('tr');

      tr.innerHTML = `
        <td>${item.title}</td>
        <td>${item.person}</td>
        <td>${item.year}</td>
        <td>${item.type}</td>
        <td class="d-none d-lg-table-cell">${item.description}</td>
        <td>
          <a href="/edit/${item.idNum}" class="btn btn-outline-warning" id="edit-button">&#x1F589</a>
          <button class="btn btn-outline-danger">&#x1F5D1</button>
        </td>
      `;


      tbody.appendChild(tr);
    });

    listContainer.appendChild(tbody);



  });