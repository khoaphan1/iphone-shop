import React from "react";
import { NavLink } from "react-router-dom";
import DATA from "../Data";

const Product = () => {
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Danh sách sản phẩm</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">
          {DATA.map((cardItem, index) => {
            return(
              <div key={index} className="card my-5 py-4" style={{width: "18rem"}}>
                <img src={cardItem.img} className="card-img-top" alt={cardItem.title} />
                <div className="card-body text-center">
                  <h5 className="card-title">{cardItem.title}</h5>
                  <p className="lead">${cardItem.price}</p>
                  <NavLink to={`/products/${cardItem.id}`} className="btn btn-outline-primary">
                    Xem sản phẩm
                  </NavLink>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
