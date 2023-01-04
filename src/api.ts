export function fetchCoins() {
  // 갈결한 코드를 위해 async-await이 아닌 이전 Promise를 이용
  return fetch("https://api.coinpaprika.com/v1/coins").then((response) =>
    response.json()
  );
}
