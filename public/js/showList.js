let list = [];

fetch('show')
  .then(res => res.json())
  .then(fileContent => {
    const listContainer = document.getElementById('table');

    listContainer.innerHTML = `
      <colgroup>
        <col style="width:15%">
        <col style="width:10%">
        <col style="width:15%">
        <col style="width:10%">
        <col style="width:50%">
      </colgroup>

      <thead>
        <tr>
          <th>Title</th>
          <th>Year</th>
          <th>Person</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
    `;

    list = JSON.parse(fileContent);

    list.forEach((item) => {
      const tr = document.createElement('tr');
      // tr.className = 'border-bottom-0';

      tr.innerHTML = `
        <td>${item.title}</td>
        <td class="col-1">${item.year}</td>
        <td>${item.person}</td>
        <td>${item.type}</td>
        <td class="truncate">${item.description}</td>
      `;

      listContainer.appendChild(tr);
    });


  });