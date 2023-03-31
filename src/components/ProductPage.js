import React, { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Products } from "./Home";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useAlert } from "react-alert";

const ProductPage = () => {
    let { id } = useParams();
    const { products, cartDispatch, setDrawer } = useContext(Products);
    const [productState, setproductState] = useState([]);
    const [selectedImage, setselectedImage] = useState(0);
    const [productNumber, setproductNumber] = useState(1);


    const alert = useAlert();

    useEffect(() => {
        setproductState(products.filter(({ title }) => title === id));
        setproductNumber(1)
    }, [id]);

    const handleImageClick = (index) => {
        setselectedImage(index);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setselectedImage((selectedImage + 1) % 2);
        }, 5000);
        return () => clearTimeout(timer);
    }, [selectedImage]);

    const decQty = () => {
        if (productNumber > 1) setproductNumber(productNumber - 1);
        else setproductNumber(productNumber);
    };

    const incQty = () => {
        setproductNumber(productNumber + 1);
    };

    const updateCart = () => {
        // setcartNumber(cartNumber + productNumber);
    };

    return (
        <>
            {productState.map(({ id, title, image, details, price, secondImage }) => {
                return (
                    <div key={id}>
                        <div className="product-detail-container">
                            <div>
                                <div className="image-container">
                                    {title !== "coffee" ? (
                                        <img src={image} alt="" className="product-detail-image" />
                                    ) : (
                                        <img
                                            src={selectedImage === 0 ? image : secondImage}
                                            alt=""
                                            className="product-detail-image"
                                        />
                                    )}
                                </div>
                                <div className="small-images-container">
                                    <img
                                        src={image}
                                        alt=""
                                        className={
                                            selectedImage === 0
                                                ? "selected-image small-image"
                                                : "small-image"
                                        }
                                        onClick={() => handleImageClick(0)}
                                    />
                                    {title === "coffee" && (
                                        <img
                                            src={secondImage}
                                            alt=""
                                            className={
                                                selectedImage === 1
                                                    ? "selected-image small-image"
                                                    : "small-image"
                                            }
                                            onClick={() => handleImageClick(1)}
                                        />
                                    )}
                                </div>
                            </div>
                            <div className="product-detail-desc">
                                <h1>{title}</h1>
                                <h4>Details</h4>
                                <p>{details}</p>
                                <p className="price">{`$${price}`}</p>
                                <div className="quantity">
                                    <h3>Quantity:</h3>
                                    <p className="quantity-desc">
                                        <span className="minus" onClick={decQty}>
                                            <AiOutlineMinus />
                                        </span>
                                        <span className="num">{productNumber}</span>
                                        <span className="plus" onClick={incQty}>
                                            <AiOutlinePlus />
                                        </span>
                                    </p>
                                </div>
                                <div className="buttons">
                                    <button
                                        className="add-to-cart"
                                        onClick={() => {
                                            alert.success(`${productNumber} ${title} added to cart`);
                                            cartDispatch(
                                                {
                                                    type: "ADD_TO_CART",
                                                    payload: {
                                                        item: {
                                                            id,
                                                            title,
                                                            image,
                                                            details,
                                                            price,
                                                            secondImage,
                                                            qty: productNumber
                                                        }

                                                    }
                                                }
                                            )
                                        }
                                        }
                                    >
                                        Add to Cart
                                    </button>
                                    <button className="buy-now"
                                        onClick={() => {
                                            alert.success(`${productNumber} ${title} added to cart`);
                                            setDrawer(true)
                                            cartDispatch(
                                                {
                                                    type: "ADD_TO_CART",
                                                    payload: {
                                                        item: {
                                                            id,
                                                            title,
                                                            image,
                                                            details,
                                                            price,
                                                            secondImage,
                                                            qty: productNumber
                                                        }

                                                    }
                                                }
                                            )
                                        }
                                        }
                                    >Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="maylike-products-wrapper">
                            <h2>You may also like</h2>
                            <div className="marquee">
                                <div className="maylike-products-container track">
                                    {products.map(({ image, title, price, id }) => {
                                        return (
                                            <Link to={`/product/${title}`} key={id}>
                                                <div className="product-card">
                                                    <img src={image} alt="" className="product-image" />
                                                    <p className="product-name">{title}</p>
                                                    <p className="product-price">{`$${price}`}</p>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default ProductPage;
