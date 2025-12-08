let list = [];

fetch('show')
  .then(res => res.json())
  .then(fileContent => {
    const listContainer = document.getElementById('table');

    listContainer.innerHTML = `
      <thead>
        <tr>
          <th class="col-2">Title</th>
          <th class="col-2">Person</th>
          <th class="col-1">Year</th>
          <th class="col-2">Type</th>
          <th class="col-5">Description</th>
        </tr>
      </thead>
    `;

    list = JSON.parse(fileContent);

    list.forEach((item) => {
      const tr = document.createElement('tr');

      tr.innerHTML = `
        <td>${item.title}</td>
        <td>${item.person}</td>
        <td>${item.year}</td>
        <td>${item.type}</td>
        <td>${item.description}</td>
      `;;

      listContainer.appendChild(tr);
    });


  });