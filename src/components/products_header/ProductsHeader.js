import React, { useEffect, useState } from "react";
import Styles from "./header.module.scss";
import bag2 from "../../assets/shopping-bag.png";
import cart2 from "../../assets/shopping-cart.png";
// import search from "../../assets/search.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../redux/categoryRedux";
import { userRequest } from "../../requestMethod";

function ComicsHeader() {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.quantity);
  const [prchdPrdQty, setPrchdPrdQty] = React.useState([]);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const user = async () => {
      const result = await userRequest
        .get(`/users/find?username=${currentUser.username}`)
        .then((data) => setPrchdPrdQty(data.data.prchdPrd));
    };
    user();
  }, [currentUser]);

  // console.log(currentUser._id, "pp");

  // const [sort, setSort] = useState("");
  const [productCat, setProductCat] = useState("All_Products");

  const handleProducts = (e) => {
    setProductCat(([e.target.name] = e.target.value));
  };
  useEffect(() => {
    dispatch(setCategory(productCat));
  }, [dispatch, productCat]);

  // useEffect(() => {
  //   const res = async () => {
  //     const items = await userRequest.get(`/users/find/${currentUser._id}`);
  //     setCartItems(items.data.cartItems);
  //   };
  //   res();
  // }, [currentUser._id]);

  // const heading = Object.values(productCat);
  return (
    <>
      <div className={Styles.header}>
        <div className={Styles.top}>
          <div>
            <input placeholder="Search" />
          </div>
          <div className={Styles.io}>
            <div className={Styles.cart_container}>
              <Link to="/prchpds">
                <img src={bag2} alt="cart" />
                {prchdPrdQty ? <span>{prchdPrdQty.length}</span> : null}
              </Link>
            </div>
            <div className={Styles.cart_container}>
              <Link to="/cart">
                <img src={cart2} alt="cart" />
                {quantity ? <span>{quantity.length}</span> : null}
              </Link>
            </div>
          </div>
        </div>
        <ul className={Styles.bottom}>
          <li>
            <select name="productCat" onChange={handleProducts}>
              <option>All_Products</option>
              <option>comics</option>
              <option>posters</option>
              <option>cards</option>
            </select>
          </li>
          <li>
            <select>
              <option value="newest">newest</option>
              <option value="earliest">earliest</option>
              <option value="dec price">high to low price</option>
              <option value="asc price">low to high price</option>
            </select>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ComicsHeader;
// <div className={Styles.heading}>
//   <h4>{heading}</h4>
// </div>;
