import React from "react";
import { useParams } from "react-router";
import { useState } from "react";
import DATA from "../Data";
import { useDispatch } from 'react-redux';
import {addItem, delItem} from '../redux/actions/index'

const ProductDetail = () => {
  const [cartBtn, setCartBtn] = useState("Thêm sản phẩm vào giỏ hàng");
  const proid = useParams();
  const proDetail = DATA.filter((x) => x.id === Number(proid.id));
  const product = proDetail[0];
  console.log(proid);

  const dispatch = useDispatch()

  const handleCart = () => {
      if (cartBtn === "Thêm sản phẩm vào giỏ hàng") {
          dispatch(addItem(product))
          setCartBtn("Xóa sản phẩm khỏi giỏ hàng")
      }
      else{
          dispatch(delItem(product))
          setCartBtn("Thêm sản phẩm vào giỏ hàng")
      }
  }

  return (
    <>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img src={product.img} alt={product.title} height="400px" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold">{product.title}</h1>
            <hr />
            <h2 className="my-4">${product.price}</h2>
            <p className="lead">{product.desc}</p>
            <button
              onClick={() => handleCart(product)}
              className="btn btn-outline-primary my-5"
            >
              {cartBtn}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
