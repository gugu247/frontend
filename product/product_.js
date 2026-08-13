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


//import { API_URL } from "../index(osnova)/api.js";

//const API_URL = "http://127.0.0.1:8000";

const taskcard = [...document.querySelectorAll('.taskcard')];
console.log(taskcard)
taskcard.forEach(function(task){
  console.log('wqeld')
  task.onclick = function(){
    window.location.href = '../task/task.html'
  }
});







async function renderProject(proj_id){
    console.log(proj_id, API_URL)
    console.log(`${API_URL}/projects/${proj_id}`)
    const response = await fetch(`${API_URL}/projects/${proj_id}`);
    if (!response.ok) {
        throw new Error("Project не найден");
    }
    const product = await response.json();
    const pr = mapProject(product);
    console.log(mapProject(product));



    const resptasks = await fetch(`${API_URL}/tasks/${proj_id}`);
    if(!resptasks.ok){
        throw new Error('Task не найден');
    }
    const ta = await resptasks.json()
    const tapr = ta.map()
    console.log(tapr)



    const resppeoples = await fetch(`${API_URL}/peoples/${proj_id}`)
    if(!resppeoples.ok){
        throw new Error('People не найден')
    }
    const pe = await resppeoples.json()
    const pepr = pe.map()
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

    pepr.forEach(project => {
        const peoplecard = document.createElement('div')
        peoplecard.id = `${project.id}`
        peoplecard.className = 'peoplecard'

        peoplecard.innerHTML = `
            <h2>${project.name}</h2>
        `
        peoples.appendChild(peoplecard)
    })

}
const id = sessionStorage.getItem('bebeb')
renderProject(id)
// function bebebe(proj_id){
//   renderProject(proj_id)
// }

// renderProject(1)