let btn = document.getElementById("btn");

async function getPost() {
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await resp.json();

        const table = document.createElement('table');
        table.setAttribute("border", 1);
        const tr = document.createElement('tr');
        tr.innerHTML = "<th>id</th><th>title</th><th>body</th>"
        table.appendChild(tr);


        data.forEach(e => {
            const row = document.createElement("tr");

            const idCell = document.createElement('td');
            idCell.textContent = e.id;
            row.appendChild(idCell);

            const titleCell = document.createElement('td');
            titleCell.textContent = e.title;
            row.appendChild(titleCell);

            const bodyCell = document.createElement('td');
            bodyCell.textContent = e.body;
            row.appendChild(bodyCell)

            table.appendChild(row)

            document.body.appendChild(table);
        });
    } catch (err) {
        console.log("Error: ", err)
    }

};

btn.addEventListener('click', () => {
    getPost()

})
