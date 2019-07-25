


//-----------------------------------
// using DOM API
//-----------------------------------

let box = document.querySelector('.alert-info')
let showBtn = document.querySelector('.btn-primary')
let hideBtn = document.querySelector('.btn-danger')
let nexBtn = document.querySelector('.btn-success')


hideBtn.addEventListener('click', e => {
    box.style.display = 'none'
})
showBtn.addEventListener('click', e => {
    box.style.display = ''
})
nexBtn.addEventListener('click', e => {
    box.innerHTML = "Lean React.js"
})


//-----------------------------------
// using DOM + XHR/Fetch API 
//-----------------------------------

let todosBtn = document.getElementById('todos-btn');
todosBtn.addEventListener('click', e => {
    let apiUrl = 'https://jsonplaceholder.typicode.com/todos?_limit=5'
    let promise = fetch(apiUrl)
    promise
        .then(response => response.json())
        .then(todos => {
            let liEles = todos.map((todo, idx) => {
                return `
                    <li class="list-group-item">
                        <span class="badge badge-dark">${todo.id}</span> &nbsp;
                        ${todo.title}&nbsp;
                        <span class="badge ${todo.completed ? 'badge-success' : 'badge-danger'}">${todo.completed}</span> 
                    </li>
                `
            })
            document.getElementById('todos').innerHTML = liEles.join(" ")
        })
})


//-----------------------------------
// using DOM + Timer API 
//-----------------------------------
let timeEle=document.getElementById('time');
setInterval(() => {
    timeEle.innerHTML = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/kolkata' })
}, 1000)
