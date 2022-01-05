import React, { useState } from "react";
import { Card, Tooltip,CardMedia } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import laptop from "../../images/laptop.png";
import { Link } from "react-router-dom";
import { showAverage } from "../../functions/rating";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';
import { useHistory } from "react-router";
const { Meta } = Card;

// const Product = ({ product }) => {
//   const { images, title, description, slug, price } = product;
//   return (
//     <Link to={`/product/${product._id}`}>
//     <Container>
//       <Circle />
//       <Image src={images && images.length ? images[0].url : laptop} />
//       <Info>
//         <Icon>
//           <ShoppingCartOutlined className="text-danger" />
//         </Icon>
//         <Icon>
//           <Link to={`/product/${product._id}`}>
//           {/* <SearchOutlined /> */}
//           </Link>
//         </Icon>
//         <Icon>
//           {/* <FavoriteBorderOutlined /> */}
//           <EyeOutlined className="text-warning" />
//         </Icon>
//       </Info>
      
//     </Container>
//     </Link>
  
//   );
// };

const ProductCard = ({ product }) => {
  const [tooltip, setTooltip] = useState("Click to add");
  const history = useHistory();
  // redux
  const { user, cart } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    // create cart array
    let cart = [];
    if (typeof window !== "undefined") {
      // if cart is in local storage GET it
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      // push new product to cart
      cart.push({
        ...product,
        count: 1,
      });
      // remove duplicates
      let unique = _.uniqWith(cart, _.isEqual);
      // save to local storage
      // console.log('unique', unique)
      localStorage.setItem("cart", JSON.stringify(unique));
      // show tooltip
      setTooltip("Added");

      // add to reeux state
      dispatch({
        type: "ADD_TO_CART",
        payload: unique,
      });
      // show cart items in side drawer
      dispatch({
        type: "SET_VISIBLE",
        payload: true,
      });
    }
  };

  // destructure
  const { images, title, description, slug, price } = product;
  return (
    <>
      {product && product.ratings && product.ratings.length > 0 ? (
        showAverage(product)
      ) : (
        <div className="text-center pt-1 pb-3">No rating yet</div>
      )}

      <Card onClick={()=> history.push(`/product/${slug}`)} hoverable style={{display:"flex",flexDirection:"column",justifyItems:"center" }}
        cover={
          <img
            src={images && images.length ? images[0].url : laptop}
            style={{ height:300,width:"100%",objectFit:"contain"}}
            className="p-1"
          />
        }
        actions={[
          <Link to={`/product/${slug}`}>
            <EyeOutlined className="text-warning" /> <br /> View Product
          </Link>,
          <Tooltip title={tooltip}>
            <a onClick={handleAddToCart} disabled={product.quantity < 1}>
              <ShoppingCartOutlined className="text-danger" /> <br />
              {product.quantity < 1 ? "Out of stock" : "Add to Cart"}
            </a>
          </Tooltip>,
        ]}
      >
  
        <Meta
          title={`${title} - $${price}`}
        />
      </Card>
    </>
  );
};

export default ProductCard;
