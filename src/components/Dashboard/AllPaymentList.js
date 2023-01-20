import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import swal from "sweetalert";
import Loading from "../Utilites/Loading";

const AllPaymentList = () => {
  const [myOrder, setMyOrder] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/api/v1/order/allPayments   `)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          setMyOrder(data?.order);
          setLoading(false);
        } else {
          setLoading(false);
        }
      });
  }, [show]);
  console.log(myOrder);
  console.log(myOrder);
  if (loading) {
    return <Loading />;
  }

  // const deleteHenedler = (id) => {
  //   console.log(id);
  //   fetch(`http://localhost:5000/api/v1/order/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data)
  //       if (data.success) {
  //         swal({
  //           title: "Course Delete Successfull",
  //           text: "Thank you Sir",
  //           icon: "success",
  //           buttons: [false],
  //         });
  //        ;
  //       } else {
  //       }
  //     });
  // };

  const deleteHenedler = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/api/v1/order/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          swal({
            title: "Order Delete Successfull",
            text: "Thank you Sir",
            icon: "success",
            buttons: [false],
          });
          handleClose();
        } else {
        }
      });
  };

  return (
    <>
      {myOrder?.length !== 0 ? (
        <div class="row my-5">
          <h3 class="fs-4 mb-3">All Payment Information</h3>
          <div class="col ">
            <div className="overflow-auto">
              <table class="table bg-white rounded shadow-sm  table-hover ">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Status</th>
                    <th scope="col">Product Id</th>

                    <th scope="col">Payment Price</th>
                    <th scope="col">Date</th>
                    <th scope="col">Agreement</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {myOrder?.map((order) => {
                    return order?.orderItems?.map((myOrders) => ( */}
                 {
                  myOrder?.map((order) => <tr key={order?._id}>
                  <th scope="row">{order?.name}</th>
                  <td>{order?.status}</td>
                  <td>{order?.productId}</td>
                  <td>{order?.paidPrice}</td>
                  <td>{order?.createdAt}</td>
                  <td>1 Year</td>
                  {/* <td>{order?.orderStatus}</td> */}
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
                            onClick={() => deleteHenedler(order?._id)}
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
                    <span onClick={() => handleShow()} className="delete-btn">
                      <AiFillDelete />
                    </span>
                  </td>
                </tr>)
                 }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className=" card p-5 w-50 mx-auto"
        >
          <img src="/picture/noPayment.gif" alt="" />
        </div>
      )}
    </>
  );
};

export default AllPaymentList;
