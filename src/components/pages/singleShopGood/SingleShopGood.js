import { Link, useParams } from "react-router-dom";
import useGoods from "../../../services/useGoods";

import AppHeader from "../../appHeader/AppHeader";
import AppFooter from "../../appFooter/AppFooter";

import "./singleShopGood.scss";

const SingleShopGood = () => {
    const { goods } = useGoods();

    const { name } = useParams();
    const item = goods.find((item) => item.name === name.replace(/-/g, " "));
    console.log(item);
    return (
        <>
            <AppHeader />
            <section className="single_shop_good">
                <div className="container">
                    <div className="good">
                        <div className="good-image">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="good-info">
                            <div className="good-info-block">
                                <div className="good-info-stock">In stock</div>
                                <Link to="/shop" className="good-info-back btn_small">Back to store</Link>
                            </div>
                            <div className="good-info-title">{item.name}</div>
                            <div className="good-info-code">Product code {item.id}</div>
                            <div className="good-info-price">${item.price}</div>
                            <div className="good-info-divider1"></div>
                            <div className="good-info-addtocart">
                                <div className="good-info-addtocart-count">
                                    <input type="number" value={item.quantity}
                                        // onChange={(e) => onInputChange(e, item)}
                                    />
                                    <div className="arrows">
                                        <div className="up"
                                            // onClick={() => onInputButtonChange('increase', item)}
                                        >
                                        </div>
                                        <div className="down"
                                            // onClick={() => onInputButtonChange('decrease', item)}
                                        >
                                        </div>
                                    </div>
                                </div>
                                <div className="good-info-addtocart-btn btn btn_large">
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