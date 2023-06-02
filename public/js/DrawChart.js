window.onload = Main;

function Main() {
  const givenData = document.getElementById("givenData");
  let stringArray = [];
  let dataArray = [];
  let labels = [];
  console.log(givenData);
  if (givenData == null || givenData.innerText != "") {
    stringArray = givenData.innerText.split(',');
    dataArray = stringArray.map(x => { return Number(x); });
    labels = [];
    for (let i = 1; i <= dataArray.length; i++) {
      labels.push(i);
    }
  }
  console.log(dataArray);

  let ctx = document.getElementById("myChart");    // 描画領域のCanvasを取得

  let myChart = new Chart(ctx, {   // Chartオブジェクトの生成
    type: "line",
    data: {
      labels: labels,    // x軸のラベル
      datasets: [  // グラフごとにオブジェクトを定義する
        {
          label: "data1",
          data: dataArray,
          borderWidth: 2,    // 線の太さ
          borderColor: "rgba(0, 100, 0, 0.5)",    // 線の色
          fill: false   // 線の下の領域塗り潰しなし
        }
      ]
    },
    options: {
      responsive: true
    }
  });
}