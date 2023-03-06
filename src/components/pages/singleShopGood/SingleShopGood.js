import { Link, useParams } from "react-router-dom";
import useGoods from "../../../services/useGoods";

import AppHeader from "../../appHeader/AppHeader";
import AppFooter from "../../appFooter/AppFooter";

const SingleShopGood = () => {
    const { goods } = useGoods();

    const { name } = useParams();
    const item = goods.find((item) => item.name === name.replace(/-/g, " "));
    console.log(item);
    return (
        <>
            <AppHeader />
            <section className="single_shop_good"></section>
            <AppFooter />
        </>
    );
};

export default SingleShopGood;