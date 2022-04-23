import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CartBtn = () => {
  const state = useSelector((state) => state.handleItem)
  return (
    <div>
        <NavLink to="/cart" className="btn btn-outline-primary ms-2">
          <i class="fa-solid fa-cart-shopping"></i> Giỏ Hàng ({state.length})
        </NavLink>
    </div>
  )
}

export default CartBtn