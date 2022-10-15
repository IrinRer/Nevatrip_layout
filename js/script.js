const arrTime = [
  "12:00",
  "12:00",
  "12:00",
  "12:00",
  "12:00",
  "12:00",
  "12:00",
  "12:00",
  "12:00",
];

class createBlock {
  constructor(obj) {
    this.img = obj.img;
    this.color = obj.color;
    this.blockImgCard = obj.blockImgCard;
    this.title = obj.title;
    this.hour = obj.hour;
    this.list = obj.list;
    this.price = obj.price;
    this.availability = obj.availability;
  }

  createList() {
    return this.list
      .map((item) => `<li class="wrapper-li">${item}</li>`)
      .join("");
  }

  create() {
    const article = document.createElement("article");
    article.classList.add("article");
    document.body.append(article);

    article.innerHTML = `
    <div class="wrapper-img-card">
    <img src=${this.img} alt="peterburg" class="img-card" />
    <div class="img-card-block" data-color=${this.color}>
      ${this.blockImgCard}
    </div>
  </div>
  <div class="wrapper">
    <h5 class="title">
      ${this.title}
    </h5>
    <div class="wrapper-icon">
      <img
        src="/icons//clock-circular-outline.svg"
        alt="icon-clock-circular"
      />
      <span>${this.hour} часа</span>
    </div>
    <ul class='wrapper-ul'>
    ${this.createList()}
    <li class="wrapper-li-btn-group">
    <p>Ближайший рейс сегодня</p>
    <div class="btn-group"></div>
  </li>
    </ul>
  <div class="wrapper-footer">
      <div class="wrapper-footer-price">
        <p class="footer-price">${this.price} ₽</p>
        <p class="footer-availability">${this.availability}</p>
      </div>
      <button class="btn-more_detailed">Подробнее</button>
    </div>
  </div>
    `;
  }
}

const block1 = new createBlock({
  img: "/img/peterburg.jpg",
  blockImgCard: "Новинка",
  color: 'yellow',
  title:
    "АКЦИЯ - Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2019",
  hour: "2",
  list: [
    "Билет на целый день",
    "Неограниченное число катаний",
    "6 остановок у главных достопримечательностей",
  ],
  price: 900,
  availability: "1200 р на причале",
});

const block2 = new createBlock({
  img: "/img/piter2.png",
  blockImgCard: "Новинка",
  color: 'purple',
  title:
    "Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2020",
  hour: "2",
  list: [
    "Билет на целый день",
    "Неограниченное число катаний",
    "6 остановок у главных достопримечательностей",
  ],
  price: 900,
  availability: "1200 р на причале",
});

const block3 = new createBlock({
  img: "/img/piter3.png",
  blockImgCard: "Круглый год",
  color: 'blue',
  title:
    "Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2020",
  hour: "2",
  list: [
    "Билет на целый день",
    "Неограниченное число катаний",
    "6 остановок у главных достопримечательностей",
  ],
  price: 900,
  availability: "1200 р на причале",
});

block1.create();
block2.create();
block3.create();

const btnGroupTime = document.body.querySelectorAll(".btn-group");
const wrapperMain = document.body.querySelector(".wrapper");

let widthWrapperMain = wrapperMain.clientWidth;

window.addEventListener("resize", () => {
  widthWrapperMain = wrapperMain.clientWidth;
});

function addTime(arr) {
  btnGroupTime.forEach((btnGroupItem) => {
    let sumWidth = 0;
    for (let i = 0; i < arr.length; i++) {
      if (widthWrapperMain - 310 > sumWidth) {
        btnGroupItem.innerHTML += `<button>${arr[i]}</button>`;
        sumWidth += btnGroupItem.querySelector("button").clientWidth;
      } else {
        btnGroupItem.innerHTML += `<select><option>...ещё</option></select>`;
        const select = btnGroupItem.querySelector("select");
        select.classList.add("select");
        for (let j = i; j < arr.length; j++) {
          select.innerHTML += `<option>${arr[j]}</option>`;
        }
        return;
      }
    }
  });
}

addTime(arrTime);
