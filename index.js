let btn = document.getElementById("btn");
let heroDiv = document.getElementById("hero-section");
let start = 0;
let end = 5;
let data = [];

async function getPost() {
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
        data = await resp.json();
        loadTable();
    } catch (error) {
        console.error("Error loading data:", error);
    }
}

function loadTable() {
    heroDiv.innerHTML = "";

    let table = document.createElement("table");
    table.setAttribute("border", "1");

    let headerRow = document.createElement("tr");
    headerRow.innerHTML = "<th>ID</th><th>Title</th><th>Body</th>";
    table.appendChild(headerRow);


    let paginatedData = data.slice(start, end);


    paginatedData.forEach(e => {
        let row = document.createElement("tr");

        let idCell = document.createElement('td');
        idCell.textContent = e.id;
        row.appendChild(idCell);

        let titleCell = document.createElement('td');
        titleCell.textContent = e.title;
        row.appendChild(titleCell);

        let bodyCell = document.createElement('td');
        bodyCell.textContent = e.body;
        row.appendChild(bodyCell);

        table.appendChild(row);
    });

    heroDiv.appendChild(table);

}

btn.addEventListener('click', () => {
    getPost();
});

document.getElementById("next").addEventListener('click', () => {
    if (end < data.length) {
        start += 5;
        end += 5;
        loadTable();
    }
});

document.getElementById("prev").addEventListener('click', () => {
    if (start > 0) {
        start -= 5;
        end -= 5;
        loadTable();
    }
});