export async function getAllCoins() {
    const urlAll = `https://economia.awesomeapi.com.br/json/all`

    const response = await fetch(urlAll);
    const data = await response.json();

    return data;
}