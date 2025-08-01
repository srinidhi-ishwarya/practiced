import React from 'react'
import "./titlebar.css"
import { CiHeart } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import logo from '../../assets/logo.png';
import { RiShoppingBagLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";


const TitleBar = () => {
  return (
    <div className="titlebar">
        <div className="logo">
                <img src={logo} alt="Logo" />
        </div>
        <div className="search_bar">
            <p>Search Products...</p>
            <p><IoIosSearch /></p>
        </div>

        <div className="title_list">
              <ul>
                <span className="icon"><GoPerson /></span><li><div> Account</div><div>Login</div> </li>
                <span className="icon"><CiHeart /></span><li><div>Wishlist</div><div>3-items</div></li>
                <span className="icon"><RiShoppingBagLine /></span><li><div>Cart</div>3-items</li>
              </ul>

        </div>
        
    </div>
  )
}

export default TitleBar