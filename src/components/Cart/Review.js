import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Review = () => {
  const cart = useSelector((state) => state.cart.cart);
  const subtotal = useSelector((state) => state.subTotal.subTotal);
  const shipping = useSelector((state) => state.shipping.shipping);
  // const totalCost = useSelector((state) => state.shipping.totalCost);
  const discount = useSelector((state) => state.shipping.discount);
  const navigate = useNavigate();
  const [totalCost , setTotalCost] = useState(30)
  return (
    <div className="my-5">
      <h5>Order History</h5>
      {/* <div className="row">
        <div className="col-lg-4 col-4 col-md-4">
          <p>Total Order Item</p>
        </div>
        <div className="col-lg-4 col-4 col-md-4"></div>
        <div className="col-lg-4 col-4 col-md-4">
          <p>{cart.length} P</p>
        </div>
      </div> */}
{/* 
      <div>
        {cart?.map((myOrder) => (
          <div key={myOrder.id} className="row">
            <div className="col-lg-4 col-4 col-md-4">
              <b>{myOrder.name}</b>
            </div>
            <div className="col-lg-4 col-4 col-md-4">
              <p> {myOrder.quantity} P</p>
            </div>
            <div className="col-lg-4 col-4 col-md-4">
              <p> {myOrder.price} USD</p>
            </div>
          </div>
        ))}

        <div className="cardTop"></div>
        <div className="row">
          <div className="col-lg-4 col-4 col-md-4">
            <p>Total Amount</p>
          </div>
          <div className="col-lg-4 col-4 col-md-4"></div>
          <div className="col-lg-4 col-4 col-md-4">
            <p>{subtotal} USD</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-4 col-md-4">
            <small>Discount</small>
          </div>
          <div className="col-lg-4 col-4 col-md-4"></div>
          <div className="col-lg-4 col-4 col-md-4">
            <small className="text-danger">{discount} USD</small>
          </div>
        </div>
      </div> */}
      <div className="cardTop mt-2"></div>

      <div className="row">
        <div className="col-lg-4 col-4 col-md-4">
          <b>Total Cost</b>
        </div>
        <div className="col-lg-4 col-4 col-md-4"></div>
        <div className="col-lg-4 col-4 col-md-4">
          <p>{totalCost} USD</p>
        </div>
      </div>
      <div className="my-5  d-flex justify-content-center ">
        <form
          action={`https://course-commerce-back-end.vercel.app/pay?price=${totalCost}`}
          method="post"
        >
          <input
            className="btn btn-warning px-5"
            type="submit"
            value="Pay With Paypal"
          />
        </form>
        {/* if you need to stripe payment get way jast uncomment this button  */}
        {/* <button onClick={()=>navigate("/myCart/chackout/review/payment")}  className='btn btn-warning px-5'>Confrom Order</button> */}
      </div>
    </div>
  );
};

export default Review;
