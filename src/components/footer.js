import React, { useState } from "react";
import { Menu, Badge } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const { SubMenu, Item } = Menu;

const Footer = () => {
  const [current, setCurrent] = useState("home");

//   let dispatch = useDispatch();
  let { cart } = useSelector((state) => ({ ...state }));

//   let history = useHistory();

  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };


  return (

<div style={{display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent:'space-between', padding:'15px', background:'rgb(0,21,41)'}}>
    
    <div>
    <Link style={{'color':'white','font-weight':'bold','font-size':'1.5rem'}} to="/">
        &copy; { new Date().getFullYear() } ElectroBoom.com 
    </Link>
    </div>

    <Menu theme="dark" onClick={handleClick} mode="horizontal">

       <Item key="home" icon={<AppstoreOutlined />}>
        <Link to="/">Home</Link>
      </Item>

      <Item key="shop" icon={<ShoppingOutlined />}>
        <Link to="/shop">Shop</Link>
      </Item>

      <Item key="cart" icon={<ShoppingCartOutlined />}>
        <Link to="/cart">
          <Badge count={cart.length} offset={[9, 0]}>
            Cart
          </Badge>
        </Link>
      </Item>

    </Menu>

  </div>
  );
};

export default Footer;
