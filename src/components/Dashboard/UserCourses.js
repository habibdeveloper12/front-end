import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiFillDelete } from "react-icons/ai";
import swal from "sweetalert";
import auth from "../../firebase.init";
import Loading from "../Utilites/Loading";

const UserCourses = () => {
  const [myOrder, setMyOrder] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [user] = useAuthState(auth);
  useEffect(() => {
    
    const userId = localStorage.getItem("userId");
    fetch(`http://localhost:5000/api/v1/order/myCourses/${user?.email}   `)
      .then((res) => res.json())
      .then((data) => {
        
        if (data.success) {
          setMyOrder(data?.order);
          setLoading(false);
        } else {
          setLoading(false);
        }
      });
  }, [show , myOrder]);


  if (loading) {
    return <Loading />;
  }

  const deleteHenedler = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/api/v1/order/order/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.success) {
          swal({
            title: "Course Delete Successfull",
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
          <h3 class="fs-4 mb-3">My Courses</h3>
          <div class="col ">
            <div className="overflow-auto">
              <table class="table bg-white rounded shadow-sm  table-hover ">
                <thead>
                  <tr>
                    <th scope="col">Course Name</th>
                    <th scope="col">category</th>
                    <th scope="col">Status</th>
                    <th scope="col">Limit</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {myOrder?.map((order) => {
                    return (
                      <tr key={order?._id}>
                        <th scope="row">{order?.productId?.name}</th>
                        <td>{order?.productId?.category}</td>
                        <td>{order?.productId?.status}</td>
                        <td>
                          {order?.limit == 0
                            ? "NO LIMITED AVALIABLE"
                            : order?.limit}
                        </td>

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
                          <span
                            onClick={() => deleteHenedler(order?._id)}
                            className="delete-btn"
                          >
                            <AiFillDelete />
                          </span>
                        </td>
                      </tr>
                    );
                  })}
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
          <img src="/picture/noCourse.gif" alt="" />
        </div>
      )}
    </>
  );
};

export default UserCourses;
