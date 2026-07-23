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








const taskcard = [...document.querySelectorAll('.taskcard')];
console.log(taskcard)
taskcard.forEach(function(task){
  console.log('wqeld')
  task.onclick = function(){
    window.location.href = '../task/task.html'
  }
});
