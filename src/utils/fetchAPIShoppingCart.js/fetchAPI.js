export async function getAllProduts() {
    const urlAll = `https://api.mercadolibre.com/sites/MLB/search?q=computador`

    const response = await fetch(urlAll);
    const data = await response.json();

    return data;
}

export async function searchProducts(searchItem) {
  const urlSearch = `https://api.mercadolibre.com/sites/MLB/search?q=${searchItem}`;

  const reponse = await fetch(urlSearch);
  const data = await reponse.json();

  return data;
}

export async function getAllCategories() {
  const urlAll = `https://api.mercadolibre.com/sites/MLB/categories`

  const response = await fetch(urlAll);
  const data = await response.json();

  return data;
}



