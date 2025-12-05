let list = [];

fetch('show')
  .then(res => res.json())
  .then(fileContent => {
    const listContainer = document.getElementById('table');

    listContainer.innerHTML = `
      <colgroup>
        <col style="width:15%">
        <col style="width:20%">
        <col style="width:10%">
        <col style="width:10%">
        <col style="width:45%">
      </colgroup>

      <thead>
        <tr>
          <th>Title</th>
          <th>Person</th>
          <th>Year</th>
          <th>Type</th>
          <th>Description</th>
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
      `;

      listContainer.appendChild(tr);
    });


  });