let btn = document.getElementById("btn");
let body = document.getElementById("body");
async function getPost() {
    try{
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await resp.json();
        
        data.forEach(e => {
            console.log(e);
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
            body.appendChild(row);
        });
    } catch(err){
        console.log("Error: ", err)
    }
    
};

btn.addEventListener('click',()=>{
    getPost()
    
})
