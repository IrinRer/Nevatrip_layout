const arrTime = ["12:00", "12:00", "12:00", "12:00", "12:00", "12:00"];
const btnGroupTime = document.body.querySelectorAll(".btn-group");
const article = document.body.querySelector(".article");
let widthArticle = article.clientWidth;

window.addEventListener("resize", () => {
  widthArticle = article.clientWidth;
});

function addTime(arr) {
  const widthArticle = article.clientWidth;

  btnGroupTime.forEach((btnGroupItem) => {
    let sumWidth = 0;
    for (let i = 0; i < arr.length; i++) {
      if (widthArticle - 200 > sumWidth) {
        btnGroupItem.innerHTML += `<button>${arr[i]}</button>`;
        sumWidth += btnGroupItem.querySelector("button").clientWidth;
      } else {
        btnGroupItem.innerHTML += `<select><option>...ещё</option></select>`;
        const select = btnGroupItem.querySelector("select");
        for (let j = i; j < arr.length; j++) {
          select.innerHTML += `<option>${arr[j]}</option>`;
        }
        return;
      }
    }
  });
}

addTime(arrTime);
