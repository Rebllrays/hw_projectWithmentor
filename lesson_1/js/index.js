let page = 1;

function render() {
    let container = document.querySelector('.container');
    container.innerHTML ="";

    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
        .then(res => res.json())
        .then(data => {
            data.forEach(item=> {
                container.innerHTML +=`
                <div class="card">
                    <div class="card-header">
                        <b>POst ID: ${item.id}</b><br />
                        <b>${item.title}</b>
                    </div>
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                            <p>${item.body}</p>
                        </blockquote>
                        <button class="btn btn-dark user-btn" data-bs-toggle="modal"
                        data-bs-target="#exampleModal" id="authorID-${item.userId}">About Author</button>
                    </div>
              </div>
                `;
            });
        });

        addModalEvent();
};
render();

function writeAuthorObj(id) {
    let modal = document.querySelector('.modal-body');
    modal.innerHTML = `
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>`;

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setTimeout(() => {
                modal.innerHTML = `
                <p><b>Author ID</b>: ${data.id}</p>
                <p><b>Email</b>: ${data.email}</p>
                <p><b>Name</b>: ${data.name}</p>
                <p><b>Username</b>: ${data.username}</p>`
            }, 1000);

        })
};

function getPostAuthor(e) {
    let authorId = e.target.id.split("-")[1];   //"authorID-1" -> [1]-> 10
    // let authorId = parseInt(e.target.id);    //NaN
    // console.log(authorId);
    writeAuthorObj(authorId);
};

function addModalEvent() {
    setTimeout(() => {
        let authorBtns = document.querySelectorAll(".user-btn");
        // console.log(authorBtns);
        authorBtns.forEach(item => item.addEventListener('click', getPostAuthor));
    }, 2000);

};

let prevPage = document.querySelector("#prev-page");
let nextPage = document.querySelector("#next-page");

function checkPages() {
    if(page ===1) {
        prevPage.style.display = "none";
        nextPage.style.display = 'block';
    } else if(page === 10) {
        prevPage.style.display = 'block';
        nextPage.style.display = 'none';
    } else {
        prevPage.style.display = 'block';
        nextPage.style.display = 'block';
    }
};
checkPages();

nextPage.addEventListener('click', () => {
    page++;
    render();
    checkPages();
});

prevPage.addEventListener('click', () => {
    page--;
    render();
    checkPages();
});

let homeBtn = document.querySelector('#home-btn');
homeBtn.addEventListener('click', () => {
    page =1;
    render();
    checkPages();
});