import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import auth from "../../firebase.init";
import Loading from "../Utilites/Loading";

const MyCourse = () => {
  const [myCourses, setmyCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [user] = useAuthState(auth);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/courses/myCourses/${user?.email}   `)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setmyCourses(data?.course);
          setLoading(false);
        } else {
          setLoading(false);
        }
      });
  }, [show, myCourses]);

  if (loading) {
    return <Loading />;
  }

  console.log(myCourses);
  const deleteHenedler = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/api/v1/courses/course/${id}`, {
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
      {myCourses.length > 0 ? (
        <div class="row my-5">
          <h3 class="fs-4 mb-3">My Active Courses</h3>
          <div class="col ">
            <div className="overflow-auto">
              <table class="table bg-white rounded shadow-sm  table-hover ">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Status</th>
                    <th scope="col">Selles List</th>
                    <th scope="col">Payment List</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {myCourses?.map(
                    (order) =>
                      order?.status !== "Pending" && (
                        <tr key={order?._id}>
                          <th scope="row">{order?.name}</th>
                          <td>{order?.category}</td>
                          <td>{order?.status}</td>
                          <td>
                            <span
                              // variant="secondary"
                              className=" px-5  bg-warning py-1 rounded"
                              onClick={() =>
                                navigate(`/dashboard/sellesList/${order?._id}`)
                              }
                            >
                              Details
                            </span>
                          </td>
                          <td>
                            <span
                              // variant="secondary"
                              className=" px-5  bg-warning py-1 rounded"
                              onClick={() =>
                                navigate(`/dashboard/paymentList/${order?._id}`)
                              }
                            >
                              Details
                            </span>
                          </td>
                          <td>
                            <Modal show={show} onHide={handleClose}>
                              <div className=" p-5">
                                <Modal.Title className="text-center">
                                  Are You Sure Delete?
                                </Modal.Title>

                                <div className=" d-flex justify-content-center mt-2">
                                  <span
                                    // variant="secondary"
                                    className="btn btn-warning px-5"
                                    onClick={() => deleteHenedler(order?._id)}
                                  >
                                    Details
                                  </span>
                                </div>
                              </div>
                              {/* <Modal.Header closeButton> */}

                              {/* <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body> */}

                              {/* <Modal.Footer>
             
            </Modal.Footer> */}
                            </Modal>
                            <span
                              onClick={() => deleteHenedler(order?._id)}
                              className="delete-btn"
                            >
                              <AiFillDelete />
                            </span>
                          </td>
                        </tr>
                      )
                  )}
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
          <img src="/picture/order.gif" alt="" />
        </div>
      )}
    </>
  );
};

export default MyCourse;
