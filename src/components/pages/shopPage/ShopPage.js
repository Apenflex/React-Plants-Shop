import { useState, useEffect } from "react"

import useGoods from "../../../services/useGoods"
import AppHeader from "../../appHeader/AppHeader"
import AppFooter from "../../appFooter/AppFooter"
import Form from "../../form/Form"

import shopIcon from '../../../resources/img/icons/basket-shopping-solid.svg'
import deleteItemIcon from '../../../resources/img/icons/deleteItemIcon.svg'
import "./shopPage.scss"

const ShopPage = () => {
    const { goods } = useGoods();
    // it shows the cart icon when the user adds an item to the cart
    const [showCartIcon, setShowCartIcon] = useState(false);
    // it stores the items added to the cart
    const [cartItems, setCartItems] = useState([]);
    console.log(cartItems)
    const [quantity, setQuantity] = useState(0);
    // console.log(quantity);
    
    // const addToCart = (item) => {
    //     console.log('render addToCart')
    //     const updatedCartItems = updateCartItems(cartItems, item);
    //     setCartItems(updatedCartItems);
    //     setShowCartIcon(true);
    //     setQuantity(quantity + 1);
    // };
    // const updateCartItems = (cartItems, item) => {
    //     console.log('render updateCartItems')
    //     // console.log(cartItems);
    //     // console.log(item);
    //     const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    //     if (existingItem) {
    //         existingItem.quantity += 1;
    //         return [...cartItems];
    //     } else {
    //         return [...cartItems, { ...item, quantity: 1 }];
    //     }
    // };

    const addToCart = (item) => {
        console.log('render addToCart');
        const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
        if (existingItem) {
            existingItem.quantity += 1;
            setCartItems([...cartItems]);
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
        setShowCartIcon(true);
        setQuantity(quantity + 1);
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
    
    const calculateTotal = (cartItems) => {
        console.log('render calculateTotal')
        const cartItemsArray = Object.values(cartItems);
        const total = cartItemsArray.reduce((acc, item) => {
            return acc + item.quantity * +item.price;
        }, 0).toFixed(2);
        return total;
    }

    const onInputButtonChange = (count, item) => {
        console.log('render onInputButtonChange')
        console.log(item)
        switch (count) {
            case "increase":
                setQuantity((prevQuantity) => prevQuantity + 1);
                break;
            case "decrease":
                if (quantity > 1) {
                    setQuantity((prevQuantity) => prevQuantity - 1);
                }
                break;
            default:
                break;
        }
    };

    const onInputChange = (e) => {
        setQuantity(parseInt(e.target.value));
    };

    const clearCart = () => {
        setCartItems([]);
        setShowCartIcon(false);
    };

    const [isCartOpen, setIsCartOpen] = useState(false);
    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    function renderItems(arr) {
        const items = arr.map((item) => {
            return (
                <div className="shop-wrapper-item" key={item.id}>
                    <div className="shop-wrapper-item-img">
                        <img src={item.img} alt={item.name} />
                    </div>
                    <div className="shop-wrapper-item-title">
                        <h3>{item.name}</h3>
                    </div>
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
                                                                onChange={onInputChange} />
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
                                                            ${item.price}
                                                        </div>
                                                        <div className="modal-body-item-delete">
                                                            <div className="btn_delete" onClick={() => removeFromCart(item) }>
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
                                            <Form onSubmit={() => {
                                                console.log(`Order is sent to server: ${JSON.stringify(cartItems)}`)
                                                toggleCart()
                                                clearCart()}} />
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <AppFooter />
        </>
    )
}

export default ShopPage