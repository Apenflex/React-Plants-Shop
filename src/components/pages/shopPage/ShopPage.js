import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import useGoods from "../../../services/useGoods"
import AppHeader from "../../appHeader/AppHeader"
import AppFooter from "../../appFooter/AppFooter"
import OrderForm from "../../orderForm/OrderForm"

import shopIcon from '../../../resources/img/icons/basket-shopping-solid.svg'
import deleteItemIcon from '../../../resources/img/icons/deleteItemIcon.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import "./shopPage.scss"

const ShopPage = () => {
    const { goods } = useGoods();

    const [showCartIcon, setShowCartIcon] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const [cartItems, setCartItems] = useState([]);
    console.log(cartItems)
    const [quantity, setQuantity] = useState(0);
    // console.log(quantity);

    const addToCart = (item) => {
        // console.log('render addToCart');
        const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
        if (existingItem) {
            existingItem.quantity += 1;
            setCartItems([...cartItems]);
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
        setShowCartIcon(true);
        // Розрахунок кількості товарів в корзині
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const removeFromCart = (item) => {
        const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
        setCartItems(updatedCartItems);
        setQuantity(quantity - item.quantity);
        if (updatedCartItems.length === 0) {
            setShowCartIcon(false);
            setQuantity(0);
            toggleCart();
        }
    };

    const calculateItemTotal = (item) => {
        return (item.quantity * +item.price).toFixed(2);
    };

    const calculateTotal = (cartItems) => {
        const cartItemsArray = Object.values(cartItems);
        const total = cartItemsArray.reduce((acc, item) => {
            return acc + item.quantity * +item.price;
        }, 0).toFixed(2);
        return total;
    }

    const onInputButtonChange = (count, item) => {
        // console.log('render onInputButtonChange')
        console.log(item.quantity)
        switch (count) {
            case "increase":
                if (item.quantity < 100) {
                    setQuantity((prevQuantity) => prevQuantity + 1);
                    cartItems.find((cartItem) => cartItem.id === item.id).quantity += 1;
                }
                break;
            case "decrease":
                if (item.quantity > 1) {
                    setQuantity((prevQuantity) => prevQuantity - 1);
                    cartItems.find((cartItem) => cartItem.id === item.id).quantity -= 1;
                }
                break;
            default:
                break;
        }
    };

    const onInputChange = (e, item) => {
        let newQuantity = parseInt(e.target.value);
        console.log(newQuantity);
        if (isNaN(newQuantity) || newQuantity < 1) {
            newQuantity = 1; // or any default value
        } else if (newQuantity > 100) {
            newQuantity = 100; // or any max value you want
        }
        const updatedCartItems = cartItems.map((cartItem) => {
            if (cartItem.id === item.id) {
                return { ...cartItem, quantity: newQuantity };
            } else {
                return cartItem;
            }
        });
        setQuantity((prevQuantity) => prevQuantity - item.quantity + newQuantity);
        setCartItems(updatedCartItems);
    };

    const clearCart = () => {
        setCartItems([]);
        setShowCartIcon(false);
        setQuantity(0);
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    function renderItems(arr) {
        const items = arr.map((item) => {
            return (
                <div className="shop-wrapper-item" key={item.id}>
                    <Link to={`/shop/${item.name.replace(/\s+/g, '-') }`} >
                            <div className="shop-wrapper-item-img">
                                <img src={item.img} alt={item.name} />
                            </div>
                            <div className="shop-wrapper-item-title">
                                <h3>{item.name}</h3>
                            </div>
                    </Link>
                        <div className="shop-wrapper-item-price">
                            <span>${item.price}</span>
                        </div>
                        <div className="shop-wrapper-item-btn">
                            <button
                                className="btn_buy"
                                onClick={() => addToCart(item)}>
                                BUY
                            </button>
                        </div>
                </div>
            )
        });
        return items;
    }
    // const items = renderItems(goods);

    return (
        <>
            <AppHeader />
            <section className="shop">
                <div className="container">
                    <div className="shop-wrapper">
                        {renderItems(goods)}
                        {showCartIcon && (
                            <div className="cart-icon" onClick={toggleCart}>
                                <div className="cart-icon-img">
                                    <img src={shopIcon} alt="shopIcon" />
                                </div>
                                <span className="cart-count">{quantity}</span>
                            </div>
                        )}

                        {isCartOpen && (
                            <div className="modal">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h2>Shopping Cart</h2>
                                        <div className="btn_close" onClick={toggleCart}>+</div>
                                    </div>
                                    <div className="modal-body">
                                        <ul>
                                            {cartItems.map((item) => (
                                                <li key={item.id}
                                                    className="modal-body-item">
                                                    <div className="modal-body-item-wrapper">
                                                        <div className="modal-body-item-img">
                                                            <img src={item.img} alt="" />
                                                        </div>
                                                        <div className="modal-body-item-title">
                                                            {item.name}
                                                        </div>
                                                    </div>
                                                    <div className="modal-body-item-wrapper">
                                                        <div className="modal-body-item-count">
                                                            <input type="number" value={item.quantity}
                                                                onChange={(e) => onInputChange(e, item)} />
                                                            <div className="arrows">
                                                                <div className="up"
                                                                    onClick={() => onInputButtonChange('increase', item)}>
                                                                </div>
                                                                <div className="down"
                                                                    onClick={() => onInputButtonChange('decrease', item)}>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="modal-body-item-price">
                                                            ${calculateItemTotal(item)}
                                                        </div>
                                                        <div className="modal-body-item-delete">
                                                            <div className="btn_delete" onClick={() => removeFromCart(item)}>
                                                                <img src={deleteItemIcon} alt="deleteItemIcon" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                            <div className="modal-body-order-total">
                                                <div className="modal-body-order-total-title">
                                                    Order Total:
                                                </div>
                                                <div className="modal-body-order-total-price">
                                                    ${calculateTotal(cartItems)}
                                                </div>
                                            </div>
                                            <OrderForm onSubmit={() => {
                                                console.log(`Order is sent to server: ${JSON.stringify(cartItems)}`)
                                                toggleCart()
                                                clearCart()
                                            }} />
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>   
                    <div className="shop-pagination">
                        <div className="shop-per-page">
                            <div className="shop-per-page-title">
                                <h3>Products per page::</h3>
                            </div>
                                <select
                                    name="perPage"
                                    id="perPage"
                                    // onChange={onPerPageChange}
                                >
                                    <option value="12">12</option>
                                    <option value="24">24</option>
                                    <option value="50">50</option>
                                </select>
                        </div>
                        <div className="shop-pagination-list">
                        <div className="btn_prev"><FontAwesomeIcon icon={faChevronLeft} /></div>
                            <div className="shop-pagination-list-count">1</div>
                        <div className="btn_next"><FontAwesomeIcon icon={faChevronRight} /></div>
                        </div>
                    </div>
                </div>
            </section>
            <AppFooter />
        </>
    )
}

export default ShopPage