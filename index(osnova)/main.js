const productsList = document.querySelector("#productsList");
const searchInput = document.querySelector("#searchInput");
const categorySelect = document.querySelector("#categorySelect");

let products = [];

function renderProducts(items) {
  productsList.innerHTML = "";

  if (items.length === 0) {
    productsList.innerHTML = "<p>Товары не найдены</p>";
    return;
  }

  items.forEach(function (product) {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${product.name}</h3>
      <p>Категория: ${product.category}</p>
      <p>Бренд: ${product.brand}</p>
      <p class="price">${product.price} ₽</p>
      <p>${product.description}</p>
      <p>${product.inStock ? `В наличии: ${product.availableItems}` : "Нет в наличии"}</p>
      <a class="button" href="product.html?id=${product.id}">Подробнее</a>
    `;

    productsList.appendChild(card);
  });
}

function filterProducts() {
  const searchText = searchInput.value.toLowerCase();
  const selectedCategory = categorySelect.value;

  const filteredProducts = products.filter(function (product) {
    const nameMatches = product.name.toLowerCase().includes(searchText);
    const categoryMatches =
      selectedCategory === "all" || product.category === selectedCategory;

    return nameMatches && categoryMatches;
  });

  renderProducts(filteredProducts);
}

async function loadProducts() {
  productsList.innerHTML = "<p>Загрузка товаров...</p>";

  try {
    products = await getProjects();
    renderProducts(products);
  } catch (error) {
    productsList.innerHTML = `<p>${error.message}</p>`;
  }
}

searchInput.addEventListener("input", filterProducts);
categorySelect.addEventListener("change", filterProducts);

loadProducts();