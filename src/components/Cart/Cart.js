import React, { useEffect, useRef, useState } from "react";
import { Table } from "react-bootstrap";
import toast from "react-hot-toast";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteToCart } from "../Redux/Slice/cartSlice";
import {
  addToShippingPrice,
  calculatetTotalTotalCost,
  promoDiscount,
} from "../Redux/Slice/shippingPriceSlice";
import { addToSbTotal } from "../Redux/Slice/subTotalSlice";

const Cart = () => {
  const [promoCode, setPromoCode] = useState("");
  const cart = useSelector((state) => state.cart.cart);
  const subTotal = useSelector((state) => state.subTotal.subTotal);
  ///
  const shippingPrice = useSelector((state) => state.shipping.shipping);
  const totalCost = useSelector((state) => state.shipping.totalCost);
  const discount = useSelector((state) => state.shipping.discount);
  const selectRef = useRef();

  const navigate = useNavigate();

  const disPatch = useDispatch();
  useEffect(() => {
    disPatch(addToSbTotal(cart));
    //     const shippingPrice = parseInt(selectRef?.current?.value)
    disPatch(addToShippingPrice(shippingPrice));
    disPatch(calculatetTotalTotalCost(subTotal));
    setPromoCode("");
  }, [cart, shippingPrice, cart, subTotal]);

  const applayPromoCodeHendeler = () => {
    console.log(promoCode.toLowerCase());
    fetch(
      `http://localhost:5000/api/v1/order/promo/?totalCost=${totalCost}&code=${promoCode?.toLowerCase()}`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          disPatch(promoDiscount(data.discountPrice));
          setPromoCode("");
          toast.success("congaculation you have 99% Descount.Happy Shopping");
        } else {
          toast.error("Sorry Promo code Dont Match");
          setPromoCode("");
        }
      });
  };

  const deleteCartItem = (id) => {
    disPatch(deleteToCart(id));
  };

  return (
    <div className="my-5">
      <div className="container">
        {cart.length > 0 ? (
          <div className="row gx-">
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="col-lg-8 col-sm-12 cartTable"
            >
              {/* <p>Shopping Cart</p> */}
              <Table className="" striped bordered hover>
                <thead>
                  <tr>
                    <th>GOIF COURSE</th>
                    <th>QUANTITY</th>
                    <th>PRICE</th>
                    <th>TOTAL PRICE</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {cart &&
                    cart?.map(({ id, name, price, quantity, totalPrice }) => (
                      <tr className="" key={id}>
                        <td>{name}</td>
                        <td>{quantity}</td>
                        <td>{price}</td>
                        <td>{totalPrice}</td>
                        <td>
                          <span
                            onClick={() => deleteCartItem(id)}
                            className=" delete-btn"
                          >
                            <AiFillDelete />
                          </span>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </div>
            <div
              data-aos="zoom-in-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="col-lg-4 col-sm-12"
            >
              <div className="card p-3">
                <p>Order Summary</p>
                <div className="cardTop"></div>
                <div className="d-flex justify-content-between mt-3">
                  <p>Total Item</p>
                  <p>{cart.length} P</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>SubTotal</p>
                  <p>{subTotal} USD</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Discount</p>
                  <p>{discount} USD</p>
                </div>

                <div className="cardTop"></div>
                <div className="d-flex justify-content-between mt-1">
                  <p>Total Price</p>
                  <p>{totalCost} USD</p>
                </div>

                <div>
                  <p className="py-0"> PROMO CODE</p>
                  <div className=" d-flex gap-3">
                    <input
                      onChange={(e) => setPromoCode(e.target.value)}
                      value={promoCode}
                      className="inputFlied"
                      type="text"
                      placeholder="Enter Your Promo Code"
                    />

                    <button
                      enabled={discount}
                      onClick={() => applayPromoCodeHendeler()}
                      className="btn btn-warning"
                    >
                      APPLY
                    </button>
                  </div>
                  {/* {discount ? (
                    <span className=" text-sm text-red-500" htmlFor="">
                      Congaculation you have 20% Descount.Happy Shopping
                    </span>
                  ) : (
                    <span className=" text-sm text-red-500" htmlFor="">
                      Use Promo code Get 20% Discount
                    </span>
                  )} */}

                  <div className="my-4">
                    <button
                      onClick={() => navigate("/myCart/chackout")}
                      className="btn btn-warning w-100"
                    >
                      CheckOut
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className=" card p-5 w-50 mx-auto">
            <img src="/picture/shoppingCArd.gif" alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
