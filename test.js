fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
.then((data) => {
  console.log(data);
  return data.json();
})
.then((objectData) => {
  
  console.log(objectData);
  let tableData = "";
  objectData.map((values) => {
    tableData += `<tr>
      <td><img width="50px" src="${values.image}" /></td>
      <td>${values.name}</td>
      <td>${values.symbol}</td>
      <td>${values.current_price}</td>
      <td>${values.total_volume}</td>
      <td class=${values.market_cap_change_percentage_24h > 0 ? "text-success" : "text-danger"}>${values.market_cap_change_percentage_24h}%</td>
      <td>${values.market_cap}</td>
      </tr>`;
  });
  document.getElementById("table_body").innerHTML=tableData;
});