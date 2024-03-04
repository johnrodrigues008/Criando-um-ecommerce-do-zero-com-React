import React, { useContext } from "react";
import "./ProductDisplay.css";

import start_icon from "../Assets/star_icon.png";
import start_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="sss" />
          <img src={product.image} alt="sss" />
          <img src={product.image} alt="sss" />
          <img src={product.image} alt="sss" />
        </div>

        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={product.image}
            alt="sss"
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={start_icon} alt="sss" />
          <img src={start_icon} alt="sss" />
          <img src={start_icon} alt="sss" />
          <img src={start_icon} alt="sss" />
          <img src={start_dull_icon} alt="sss" />
          <p>(122)</p>
        </div>

        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>

        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          alias, expedita temporibus obcaecati, aliquid eos vitae consequuntur
          rem quo quasi at dicta recusandae? Facilis officia minus ipsum dolor
          distinctio exercitationem.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>

        <button onClick={() => {addToCart(product.id)}}>ADD TO CART</button>

        <p className="productdisplay-right-category">
          <span>Category : </span>Women, T-shirt, Crop top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags : </span>Morden, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
