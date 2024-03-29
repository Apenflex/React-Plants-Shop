import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useShop, useGoods } from '../../../store';

import AppHeader from "../../appHeader/AppHeader"
import ErrorMessage from '../../errorMessage/ErrorMessage'
import Spinner from "../../spinner/Spinner"
import ShowCart from "./ShowCart"
import AppFooter from "../../appFooter/AppFooter"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import "./shopPage.scss"

const ShopPage = () => {
    // console.log('render ShopPage')
    const {
        fetchAllGoods,
        goods,
        renderGoods, 
        isLoading,
        isError, 
        perPage, 
        setPerPage, 
        changePages, 
        currentPage,
        inputSearch,
        setInputSearch,
        sortBy,
        setSortBy,} = useGoods();
    const { addToCart } = useShop();

    useEffect(() => {
        // console.log('fetchAllGoods')
        fetchAllGoods();
    }, []);

    useEffect(() => {
        // console.log('useEffect fetchGoods')
        renderGoods();
    }, [perPage, currentPage, inputSearch, sortBy]);

    function renderItems(arr) {
        const items = arr.map((item) => {
            return (
                <div className="shop-wrapper-item" key={item.id}>
                    <Link to={`/shop/${item.name.replace(/\s+/g, '-')}`} >
                        <div className="shop-wrapper-item-img">
                            <img src={item.img} alt={item.name} />
                        </div>
                        <div className="shop-wrapper-item-title">
                            <h3>{item.name}</h3>
                        </div>
                    </Link>
                    <div className="shop-wrapper-item-price">
                        <span>${item.price.toFixed(2)}</span>
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
    const errorMessage = isError && goods.length === 0 ? <ErrorMessage /> : null;
    const spinner = isLoading && goods.length === 0 ? <Spinner /> : null;
    const items = renderItems(goods);
    return (
        <>
            <Helmet>
                <meta name="description" content="Shop" />
                <title>Shop</title>
            </Helmet>
            <AppHeader />
            <section className="shop">
                <div className="container">
                    <div className="shop-searchsort">
                        <div className="shop-search">
                            <input
                                type="text"
                                placeholder="Search"
                                onChange={(e) => setInputSearch(e.target.value)}/>
                        </div>
                        <div className="shop-sort">
                            <select
                                name="sort"
                                id="sort"
                                onChange={(e) => setSortBy(e.target.value)}>
                                <option value="default">Default</option>
                                <option value="nameAsc">Name: A-Z</option>
                                <option value="nameDesc">Name: Z-A</option>
                                <option value="priceAsc">Price: low to high</option>
                                <option value="priceDesc">Price: high to low</option>
                            </select>
                        </div>
                    </div>
                    <div className="shop-wrapper">
                        {errorMessage}
                        {spinner}
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
                                onChange={(e) => setPerPage(parseInt(e.target.value))}>
                                <option value="8">8</option>
                                <option value="16">16</option>
                                <option value="24">24</option>
                            </select>
                        </div>
                        <div className="shop-pagination-list">
                            <div className="btn_prev" onClick={() => changePages('prev')}>
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </div>
                            <div className="shop-pagination-list-count">{currentPage}</div>
                            <div className="btn_next" onClick={() => changePages('next')}>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <AppFooter />
        </>
    )
}
export default ShopPage