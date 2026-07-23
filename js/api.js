const API_URL = "http://127.0.0.1:8000";

function mapProject(product) {

  return {

    id: product.id,

    name: product.title,

    category: product.category,

    brand: product.brand,

    price: product.price,

    description: product.description,

    inStock: product.available_items > 0,

    availableItems: product.available_items,

  };

}

async function getProjects() {

    const response = await fetch($`{API_URL}`/projects);

    if (!response.ok) {

        throw new Error("Не удалось загрузить товары");

    }

    const products = await response.json();

    return products.map(mapProduct);

}

async function getProject(productId) {

    const response = await fetch($`{API_URL}`/projects/$`{productId}`);

    if (!response.ok) {

        throw new Error("Товар не найден");

    }

    const product = await response.json();

    return mapProject(product);

}

async function buyProduct(productId) {

    const response = await fetch($`{API_URL}`/projects/$`{productId}`/buy, {

        method: "POST",

    });

    if (!response.ok) {

        const error = await response.json();

        throw new Error(error.detail || "Не удалось купить товар");

    }

    const product = await response.json();

    return mapProject(product);

}