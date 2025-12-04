let list = [];

fetch('show')
  .then(res => res.json())
  .then(fileContent => {
    const listContainer = document.getElementById('table');

    listContainer.innerHTML = `
      <tr>
        <th>Title</th>
        <th>Year</th>
        <th>Person</th>
        <th>Type</th>
        <th>Description</th>
      </tr>
    `;

    list = JSON.parse(fileContent);

    list.forEach((item) => {
      const tr = document.createElement('tr');
      tr.className = 'border-bottom-0';

      tr.innerHTML = `
        <td>${item.title}</td>
        <td>${item.year}</td>
        <td>${item.person}</td>
        <td>${item.type}</td>
        <td>${item.description}</td>
      `;

      listContainer.appendChild(tr);
    });


  });