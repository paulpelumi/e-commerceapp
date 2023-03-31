import heroBannerImg from "../assets/img/hero-headset-img.webp";
import secondProductContainerImg from "../assets/img/product-cont-second-img.jpg";
import thirdProductContainerImg from "../assets/img/product-cont-third-img.jpg";
import secondCoffeeImg from "../assets/img/coffee-second-image.jpg";
const productInfo = [
    {
        id: 0,
        title: "headphones",
        details: "light blue",
        price: 10.99,
        image: heroBannerImg,
        qty: 1,
    },
    {
        id: 1,
        title: "coffee",
        details: "tasty coffee",
        price: 4.99,
        image: secondProductContainerImg,
        secondImage: secondCoffeeImg,
        qty: 1,
    },
    {
        id: 2,
        title: "earphones",
        details: "amazing sound",
        price: 9.99,
        image: thirdProductContainerImg,
        qty: 1,
    },
];

export default productInfo;
