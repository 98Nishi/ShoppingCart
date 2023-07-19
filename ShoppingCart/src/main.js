let shop = document.getElementById("shop");

let shopItemsData = [
  {
    id: "jfbdofvdfb",
    name: "Lehnga",
    price: 9999,
    desc: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
    img: "Images/Img-1lehanga.jpg",
  },
  {
    id: "kdfbdsbjsd",
    name: "Casual Shirt",
    price: 60,
    desc: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
    img: "Images/Img-2shirt.jpg",
  },
  {
    id: "jdfsdhkf",
    name: "Saree",
    price: 500,
    desc: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
    img: "Images/Img-3saree.jpg",
  },
  {
    id: "oivkhrewm",
    name: "T-Shirt",
    price: 30,
    desc: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
    img: "Images/Img-4tshirt.jpg",
  },
  {
    id: "kgpowej",
    name: "Mens Suit",
    price: 900,
    desc: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
    img: "Images/Img-5.jpg",
  },
  {
    id: "djsbsfo",
    name: "Kurti",
    price: 800,
    desc: "Lorem ipsum dolor sit amet.Lorem ipsum dolor.",
    img: "Images/Img-6.jpg",
  },
  {
    id: "ewiohwr",
    name: "Kurta",
    price: 80,
    desc: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
    img: "Images/Img-7.jpg",
  },
  {
    id: "jsfdofwe",
    name: "Gown",
    price: 800,
    desc: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
    img: "Images/Img-8.jpg",
  },
  {
    id: "jkebfjo",
    name: "Nayra Cut",
    price: 500,
    desc: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
    img: "Images/Img-9.jpg",
  },
  {
    id: "rfoijpwq",
    name: "Plazzo Suit",
    price: 200,
    desc: "Lorem ipsum dolor sit amet.Lorem ipsum.",
    img: "Images/Img-10.jpg",
  },
  {
    id: "ewoeijp",
    name: "Sharara Kurti",
    price: 400,
    desc: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
    img: "Images/Img-11.jpg",
  },
  {
    id: "jksbjd",
    name: "Formal Shirt",
    price: 500,
    desc: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
    img: "Images/Img-12.jpg",
  },
];

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, desc, img } = x;

      let search = basket.find((x) => x.id === id) || [];
      return `<div id=product-id-${id} class="item">
        <img  src= ${img} alt="img">
        <div class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
                <h2>$ ${price}</h2>
                <div class="button">
                    <i onclick="decrement(${id})"  class="bi bi-patch-minus-fill"></i>
                    <div id=${id} class="quantity">
                    ${search.item === undefined ? 0 : search.item}
                    </div>
                    <i onclick="increment(${id})"  class="bi bi-patch-plus-fill"></i>
                </div>
            </div>
        </div>
    </div>`;
    })
    .join(""));
};

generateShop();

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

 
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};

let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);
  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }


  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);

 

  localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
calculation();
