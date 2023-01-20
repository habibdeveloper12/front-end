import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Loading from "../Utilites/Loading";

const PendingCourses = () => {
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    setId(id);
  };
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/courses/course")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setLoading(false);
          setCourse(data.course);
        }
      });
  }, [show, course]);

  const deleteHenedler = () => {
    fetch(`http://localhost:5000/api/v1/courses/course/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setId("");
          swal({
            title: "Course Delete Successfull",
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
  if (loading) return <Loading />;

  const activeHendler = (id) => {
    fetch(`http://localhost:5000/api/v1/courses/course/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        status: "Active",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.success) {
          swal({
            title: "Course Active Succssfull",
            text: "Thank you Sir",
            icon: "success",
            buttons: [false],
          });
        }
      });
  };
  return (
    <div className="my-5">
      <div data-aos="fade-right" class="row my-5">
        <h3 class="fs-4 mb-3">All Pending Courses</h3>
        <div class="col">
          <div className="overflow-auto">
            <table class="table bg-white rounded shadow-sm  table-hover">
              <thead>
                <tr>
                  <th scope="col">NAME</th>
                  <th scope="col">CATEGORY</th>
                  {/* <th scope="col">PRICE</th> */}
                  <th scope="col">STOCK</th>
                  <th scope="col">STATUS</th>
                  <th scope="col">ACTIVE ACTION</th>
                  <th scope="col">DETAILS</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {course?.map(
                  (course) =>
                    course?.status !== "Active" && (
                      <tr key={course?._id}>
                        <th scope="row">{course?.name}</th>
                        <td>{course?.category}</td>
                        {/* <td>{course?.price}</td> */}
                        <td>{course?.Stock}</td>
                        <td>{course?.status}</td>
                        <td>
                          {" "}
                          <button
                            onClick={() => activeHendler(`${course?._id}`)}
                            className="btn btn-warning"
                          >
                            Active Now
                          </button>
                        </td>

                        <td>
                          <button
                            onClick={() =>
                              navigate(`/course/details/${course?._id}`)
                            }
                            className="btn btn-warning"
                          >
                            Detalils
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
                          <span
                            onClick={() => handleShow(course?._id)}
                            className="delete-btn"
                          >
                            <AiFillDelete />
                          </span>
  <span
                            onClick={() =>
                              navigate(
                                `/dashboard/manageCourse/update/${course?._id}`
                              )
                            }
                            className="delete-btn px-2"
                          >
                             <FaRegEdit />
                          </span>
                          {/* <span
                              onClick={() =>
                                navigate(
                                  `/dashboard/manageCourse/update/${course?._id}`
                                )
                              }
                              className="delete-btn px-2"
                            >
                              <FaRegEdit />
                            </span> */}
                        </td>
                      </tr>
                    )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingCourses;
