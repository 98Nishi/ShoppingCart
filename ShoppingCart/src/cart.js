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

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  };
  calculation();