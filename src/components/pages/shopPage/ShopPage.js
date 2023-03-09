import useShop from '../../../store';
import { Link } from "react-router-dom"
import useGoods from "../../../services/useGoods"

import AppHeader from "../../appHeader/AppHeader"
import ShowCart from "./ShowCart"
import AppFooter from "../../appFooter/AppFooter"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import "./shopPage.scss"

const ShopPage = () => {
    const { goods } = useGoods();
    const { addToCart } = useShop();

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
    const items = renderItems(goods);
    return (
        <>
            <AppHeader />
            <section className="shop">
                <div className="container">
                    <div className="shop-wrapper">
                        {items}
                        <ShowCart />
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