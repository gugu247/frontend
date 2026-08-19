// const productDetails = document.querySelector("#productDetails");

// const params = new URLSearchParams(window.location.search);
// const productId = Number(params.get("id"));

// function renderProduct(product) {
//   productDetails.innerHTML = `
//     <div class="product-page">
//       <h2>${product.name}</h2>
//       <p>Категория: ${product.category}</p>
//       <p>Бренд: ${product.brand}</p>
//       <p class="price">${product.price} ₽</p>
//       <p>${product.description}</p>
//       <p>${product.inStock ? `В наличии: ${product.availableItems}` : "Нет в наличии"}</p>

//       <button class="button" id="addToCartButton">
//         Добавить в корзину
//       </button>
//     </div>
//   `;

//   const addToCartButton = document.querySelector("#addToCartButton");

//   addToCartButton.addEventListener("click", function () {
//     addToCart(product.id);
//   });
// }

// async function loadProduct() {
//   productDetails.innerHTML = "<p>Загрузка товара...</p>";

//   try {
//     const product = await getProduct(productId);
//     renderProduct(product);
//   } catch (error) {
//     productDetails.innerHTML = `<p>${error.message}</p>`;
//   }
// }

// function addToCart(productId) {
//   const cart = JSON.parse(localStorage.getItem("cart")) || [];

//   cart.push(productId);

//   localStorage.setItem("cart", JSON.stringify(cart));

//   alert("Товар добавлен в корзину");
// }

// loadProduct();


//import { url } from "../index(osnova)/api.js";

//const url = "http://127.0.0.1:8000";




//const taskcard = [...document.querySelectorAll('.taskcard')];
//console.log(taskcard)
//taskcard.forEach(function(task){
//  console.log('wqeld')
//  task.onclick = function(){
//    window.location.href = '../task/task.html'
//  }
//});







async function renderProject(proj_id){
    const url = "http://127.0.0.1:8000";
    console.log(proj_id, url)
    console.log(`${url}/projects/${proj_id}`)

    const response = await fetch(`${url}/projects/${proj_id}`);
    if (!response.ok) {
        throw new Error("Project не найден");
    }
    const product = await response.json();
    const pr = mapProject(product);
    console.log(pr);



    const resptasks = await fetch(`${url}/tasks/${proj_id}`);
    if(!resptasks.ok){
        throw new Error('Task не найден');
    }
    const ta = await resptasks.json()
    const tapr = ta.map(mapTask)
    console.log(tapr)



    const resppeoples = await fetch(`${url}/peoples/${proj_id}`)
    if(!resppeoples.ok){
        throw new Error('People не найден')
    }
    const pe = await resppeoples.json()
    const pepr = pe.map(mapPeople)
    console.log(pepr)


    // titlepr.innerHTML = `
    //     <h1 id='title'>${pr.title}<h1>
    // `

    const titlepr = document.getElementById('title')
    const descr = document.getElementById('describe')
    const stat = document.getElementById('status')
    const end = document.getElementById('end_time')

    console.log(pr.title, pr.description)

    titlepr.textContent = `${pr.title}`
    descr.textContent = `${pr.description}`
    stat.textContent = `${pr.status}`
    end.textContent = `${pr.end_time}`

    const tasks = document.getElementById('alltasks');
    const peoples = document.getElementById('allpeoples')

    tapr.forEach(project => {
        const taskcard = document.createElement('div');
        taskcard.id = `${project.id}`;
        taskcard.className = 'taskcard';

        taskcard.innerHTML = `
            <h2>${project.title}</h2>
            <h2>${project.description}</h2>
            <h2>${project.status}</h2>
            <h2>${project.priority}</h2>
            <h2>${project.end_time}</h2>
            <button>Выполнен</button>
        `;
        tasks.appendChild(taskcard);
    })


    const taskcard = [...document.querySelectorAll('.taskcard')];
    console.log(taskcard)


    const buttoncreate = document.getElementById('buttoncreate')


    buttoncreate.onclick = async function(){
        const titlecreate = document.getElementById('titlecreate').value
        const describecreate = document.getElementById('describecreate').value
        const statuscreate = document.getElementById('statuscreate').value
        const priopritycreate = document.getElementById('priopritycreate').value
        const end_timecreate = document.getElementById('end_timecreate').value
        console.log(titlecreate)

       const taskcreate = await fetch(`${url}/tasks/${proj_id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'title': titlecreate,
            'description': describecreate,
            'status': statuscreate,
            'priority': priopritycreate,
            'end_time': end_timecreate,
            'proj_id':proj_id
          })
        });
    }


    pepr.forEach(project => {
        const peoplecard = document.createElement('div')
        peoplecard.id = `${project.id}`
        peoplecard.className = 'peoplecard'

        peoplecard.innerHTML = `
            <h2>${project.name}</h2>
        `
        peoples.appendChild(peoplecard)
    })


    taskcard.forEach(function(task){
      console.log('wqeld')
      task.onclick = function(){
        sessionStorage.setItem('ugabuga',task.id)
        window.location.href = '../task/task.html'
      }
    });

}
const id = sessionStorage.getItem('bebeb')
renderProject(id)


const buttonback = document.getElementById('buttonback')
buttonback.onclick = function(){
    window.location.href = '../index(osnova)/index.html'
}