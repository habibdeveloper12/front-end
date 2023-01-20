import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Loading from "../Utilites/Loading";

const ManageOrder = () => {
  const [manageOrder, setManageOrder] = useState([]);
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    setId(id);
  };
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/api/v1/order `)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setManageOrder(data?.order);
          setLoading(false);
        } else {
          setLoading(false);
        }
      });
  }, [show]);

  if (loading) {
    return <Loading />;
  }

  const deleteHenedler = () => {
    console.log(id);
    fetch(`http://localhost:5000/api/v1/order/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setId("");
          swal({
            title: "Order Delete Successfull",
            text: "Thank you Sir",
            icon: "success",
            buttons: [false],
          });
          handleClose();
        } else {
          setId("");
        }
      });
  };
  return (
    <div className="my-5">
      <div data-aos="fade-right"  class="row my-5">
        <h3 class="fs-4 mb-3">Manage Order</h3>
        <div class="col">
        <div className="overflow-auto">
        <table class="table bg-white rounded shadow-sm  table-hover">
            <thead>
              <tr>
                <th scope="col">NAME</th>
                <th scope="col">QUENTITY</th>
                <th scope="col">PRICE</th>
                <th scope="col">Total Price</th>
                <th scope="col">PAYMENT STATUS</th>
                <th scope="col">ORDER STATUS</th>
                <th scope="col">ORDER SHIPPED</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {manageOrder?.map((order) => {
                console.log(order);
                return order?.orderItems?.map((myOrders) => (
                  <tr key={myOrders?._id}>
                    <th scope="row">{myOrders?.name}</th>
                    <td>{myOrders?.quantity}</td>
                    <td>{myOrders?.price}</td>
                    <td>{order?.totalPrice}</td>
                    <td>{order?.paymentInfo?.status}</td>

                    <td>{order?.orderStatus}</td>
                    <td>
                      <button
                        onClick={() =>
                          navigate(
                            `/dashboard/manageOrder/details/${order?._id}`
                          )
                        }
                        className="btn btn-warning"
                      >
                        Shipped Now
                      </button>
                    </td>
                    <td>
                    <Modal show={show} onHide={handleClose}>
                        <div className=" p-5">
                          <Modal.Title className="text-center">
                            Are You Sure Delete?
                          </Modal.Title>

                          <div className=" d-flex justify-content-center mt-2">
                            <Button
                              // variant="secondary"
                              className="btn btn-warning px-5"
                              onClick={() => deleteHenedler()}
                            >
                              ok
                            </Button>
                          </div>
                        </div>
                        {/* <Modal.Header closeButton> */}

                        {/* <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body> */}

                        {/* <Modal.Footer>
         
        </Modal.Footer> */}
                      </Modal>
                      <span onClick={() => handleShow(order?._id)} className="delete-btn">
                        <AiFillDelete />
                      </span>
                    </td>
                  </tr>
                ));
              })}
            </tbody>
          </table>

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ManageOrder;
