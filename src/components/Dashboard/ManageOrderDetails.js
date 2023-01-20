import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import Loading from "../Utilites/Loading";

const ManageOrderDetails = () => {
  const { id } = useParams();
  const [manageOrder, setManageOrder] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/api/v1/order/${id} `)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setManageOrder(data?.order);
          setLoading(false);
        } else {
          setLoading(false);
        }
      });
  }, [success]);
  if (loading) {
    return <Loading />;
  }
  const orderShippedHendeler = (id) => {
    fetch(`http://localhost:5000/api/v1/order/${id}`, {
      method: "PUT",
      body: JSON.stringify({ status: "Shipped" }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          swal({
            title: "Order Shipped Successfull",
            text: "Thank you Sir",
            icon: "success",
            buttons: [false],
          });
          setSuccess(true);
        }
      });
    console.log(id);
  };
  console.log(manageOrder);
  return (
    <div className="my-5">
      <div className="row">
        <div className="col-lg-6">
          <div className="card p-3">
            <h5>Shippment Informatin</h5>
            <div className="row mt-3">
              <div className="col-lg-6">
                {/* <p className="my-2 text-gary">Costomer Name</p> */}
                <p className="my-2 text-gary">Email</p>
                <p className="my-2 text-gary">Address</p>
                <p className="my-2 text-gary">City</p>
                <p className="my-2 text-gary">Country</p>
                <p className="my-2 text-gary">Contact Number</p>
                <p className="my-2 text-gary">Pin Code</p>
              </div>
              <div className="col-lg-6">
                {/* <p className="my-2 text-gary">{manageOrder?.shippingInfo?.name}</p> */}
                <p className="my-2 text-gary">
                  {manageOrder?.shippingInfo?.email}
                </p>
                <p className="my-2 text-gary">
                  {manageOrder?.shippingInfo?.address}
                </p>
                <p className="my-2 text-gary">
                  {manageOrder?.shippingInfo?.city}
                </p>
                <p className="my-2 text-gary">
                  {manageOrder?.shippingInfo?.country}
                </p>
                <p className="my-2 text-gary">
                  {manageOrder?.shippingInfo?.phoneNo}
                </p>
                <p className="my-2 text-gary">
                  {manageOrder?.shippingInfo?.pinCode}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card p-3 h-100">
            <h5>Order Information</h5>

            <div className="mt-3">
              <div class="col">
                <table class="table bg-white rounded shadow-sm  table-hover">
                  <thead>
                    <tr>
                      <th scope="col">NAME</th>
                      <th scope="col">QUENTITY</th>
                      <th scope="col">PRICE</th>
                      <th scope="col">TOTAL PRICE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {manageOrder?.orderItems?.map((myOrders) => (
                      <tr key={myOrders?._id}>
                        <th scope="row">{myOrders?.name}</th>
                        <td>{myOrders?.quantity}</td>
                        <td>{myOrders?.price}</td>
                        <td>{manageOrder?.totalPrice}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-2">
                <p className=" my-1">
                  SubTotal Price: {manageOrder.subTotalPrice}
                </p>
                <p className=" my-1">Discount Price: {manageOrder.discount}</p>
                <p className=" my-1">Total Price: {manageOrder.totalPrice}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <div className="card p-3">
            <h5>Payment Information</h5>
            <div className="row mt-3">
              <div className="col-lg-6">
                {/* <p className="my-2 text-gary">Costomer Name</p> */}
                <p className="my-2 text-gary">Total Payment</p>
                <p className="my-2 text-gary">Peyment Method</p>
                <p className="my-2 text-gary">Peyment Status</p>
                <p className="my-2 text-gary">Peyment Id</p>
                <p className="my-2 text-gary">Peyment Date</p>
              </div>
              <div className="col-lg-6">
                {/* <p className="my-2 text-gary">{manageOrder?.shippingInfo?.name}</p> */}
                <p className="my-2 text-gary">{manageOrder.totalPrice} USD</p>
                <p className="my-2 text-gary">CARD</p>
                <p className="my-2 text-gary">
                  {manageOrder?.paymentInfo?.status}
                </p>
                <p className="my-2 text-gary">{manageOrder?.paymentInfo?.id}</p>
                <p className="my-2 text-gary">{manageOrder?.paidAt}</p>
              </div>
            </div>

            <div className="my-3">
              <button
                onClick={() => orderShippedHendeler(manageOrder._id)}
                disabled={manageOrder?.orderStatus === "Shipped"}
                className="btn btn-warning w-100"
              >
                {" "}
                SHIPPED NOW
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          {/* <div className="card p-3 h-100">
            <h5>Order Information</h5>

            <div className="mt-3">
              <div class="col">
                <table class="table bg-white rounded shadow-sm  table-hover">
                  <thead>
                    <tr>
                      <th scope="col">NAME</th>
                      <th scope="col">QUENTITY</th>
                      <th scope="col">PRICE</th>
                      <th scope="col">TOTAL PRICE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {manageOrder?.orderItems?.map((myOrders) => (
                      <tr key={myOrders?._id}>
                        <th scope="row">{myOrders?.name}</th>
                        <td>{myOrders?.quantity}</td>
                        <td>{myOrders?.price}</td>
                        <td>{manageOrder?.totalPrice}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-2">
                <p className=" my-1">SubTotal Price: {manageOrder.subTotalPrice}</p>
                <p className=" my-1">Discount Price: {manageOrder.discount}</p>
                <p className=" my-1">Total Price: {manageOrder.totalPrice}</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ManageOrderDetails;
