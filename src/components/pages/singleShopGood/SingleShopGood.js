import { Helmet } from 'react-helmet';
import { Link, useParams } from "react-router-dom";
import { useShop, useGoods } from '../../../store';

import AppHeader from "../../appHeader/AppHeader";
import ShowCart from "../../pages/shopPage/ShowCart";
import AppFooter from "../../appFooter/AppFooter";

import "./singleShopGood.scss";

const SingleShopGood = () => {
    const { goods } = useGoods();
    const { addToCart, inputItemCount, oninputItemCount,
        onInputChange,
    } = useShop();
    const { name } = useParams();

    const item = goods.find((item) => item.name === name.replace(/-/g, " "));

    return (
        <>
            <Helmet>
                <title>{item.name}</title>
                <meta name="description" content={item.descr} />
            </Helmet>
            <AppHeader />
            <section className="single_shop_good">
                <div className="container">
                    <div className="good">
                        <div className="good-image">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="good-info">
                            <ShowCart />
                            <div className="good-info-block">
                                <div className="good-info-stock">In stock</div>
                                <Link to="/shop" className="good-info-back btn_small">Back to store</Link>
                            </div>
                            <div className="good-info-title">{item.name}</div>
                            <div className="good-info-code">Product code {item.id}</div>
                            <div className="good-info-price">${item.price.toFixed(2)}</div>
                            <div className="good-info-divider1"></div>
                            <div className="good-info-addtocart">
                                <div className="good-info-addtocart-count">
                                    <input type="number"
                                        value={inputItemCount}
                                        onChange={(e) => onInputChange(console.log(e.target.value))}
                                    />
                                    <div className="arrows">
                                        <div className="up"
                                            onClick={() => oninputItemCount('increase')}>
                                        </div>
                                        <div className="down"
                                            onClick={() => oninputItemCount('decrease')}>
                                        </div>
                                    </div>
                                </div>
                                <div className="good-info-addtocart-btn btn btn_large"
                                    onClick={() => addToCart(item, inputItemCount)}>
                                    Add to cart
                                </div>
                            </div>
                            <div className="good-info-descr-title">DESCRIPTION</div>
                            <div className="good-info-divider2"></div>
                            <div className="good-info-descr">
                                {item.descr}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <AppFooter />
        </>
    );
};
export default SingleShopGood;