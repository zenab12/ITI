let table = document.querySelector("table tbody");
console.log(table);
fetch("/db")
  .then((response) => response.json())
  .then((json) =>
    json.forEach((item) => {
      let tr = document.createElement("tr");
      table?.appendChild(tr);
      tr.innerHTML = `<td>${item.title}</td> <td>${item.status}</td>`;
    })
  );
