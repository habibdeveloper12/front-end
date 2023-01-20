import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import swal from "sweetalert";
import Loading from "../Utilites/Loading";

const User = () => {
  const [user, setUser] = useState([]);
  const [owner, setOwner] = useState([]);
  const [adviser, setAdviser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [deleteShow, setdeleteShow] = useState(false);
  const [myUser, setMyUser] = useState({});
  const [id, setId] = useState("");
  const [role, setRole] = useState("");
  const handleClose = () => setShow(false);
  const handleDeleteClose = () => setdeleteShow(false);
  const handleDeleteShow = (id) => {
    setdeleteShow(true);
    fetch(`http://localhost:5000/api/v1/user/single/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setMyUser(data?.user);
          // setUser(data?.user);
          // setLoading(false);
        } else {
          // setLoading(false);
        }
      });
  };
  const [fetchData, setFetch] = useState(false);
  const [userRole, setUserRole] = useState("user");
  const handleShow = (id) => {
    setId(id);
    setShow(true);
    fetch(`http://localhost:5000/api/v1/user/single/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setMyUser(data?.user);
          // setUser(data?.user);
          // setLoading(false);
        } else {
          // setLoading(false);
        }
      });
  };
  useEffect(() => {
    setLoading(true);
    //     const userId = localStorage.getItem("userId");
    fetch(`http://localhost:5000/api/v1/user/user`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUser(data?.user);
          setLoading(false);
          setFetch(false);
        } else {
          setLoading(false);
        }
      });
    fetch(`http://localhost:5000/api/v1/user/owner`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setOwner(data?.user);
          setLoading(false);
        } else {
          setLoading(false);
        }
      });
    fetch(`http://localhost:5000/api/v1/user/adviser`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          setAdviser(data?.user);
          setLoading(false);
        } else {
          setLoading(false);
        }
      });
  }, [fetchData]);

  if (loading) {
    return <Loading />;
  }

  const makeUserAdminHendeler = () => {
    fetch(
      `http://localhost:5000/api/v1/user/admin/${myUser?.email}?roleAction=${role}`,
      {
        method: "PUT",
        headers: {
          authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          // disPatch(fetchUser());
          // disPatch(fetchAdmin());
          // toast("Admin Make Successfull");
          // closeModal();
          setFetch(true);
          handleClose();
          swal({
            title: "Admin Make Succssfull",
            text: "Thank you Sir",
            icon: "success",
            buttons: [false],
          });
        }
      });
  };

  const action = [
    { name: "Please Select Role" },
    { name: "Adviser" },
    { name: "owner" },
  ];

  const removeAdminHendeler = (userss) => {
    fetch(
      `http://localhost:5000/api/v1/user/remove/${userss}?roleAction=${userRole}`,
      {
        method: "PUT",
        headers: {
          authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setFetch(true);
          handleClose();
          swal({
            title: "Remove Admin Succssfull",
            text: "Thank you Sir",
            icon: "success",
            buttons: [false],
          });
        }
      });
  };

  const deleteHenedler = () => {
    fetch(`http://localhost:5000/api/v1/user/delete/${myUser?._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          swal({
            title: "User Delete Successfull",
            text: "Thank you Sir",
            icon: "success",
            buttons: [false],
          });
          handleDeleteClose();
        } else {
          handleDeleteClose();
        }
      });
  };

  return (
    <div className="my-5">
      <div className="card p-5">
        <div class="row my-5">
          <h3 class="fs-4 mb-3">All User</h3>
          <div class="col">
            <div data-aos="fade-right" className="overflow-auto">
          <table class="table bg-white rounded shadow-sm  table-hover">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                  <th scope="col">Make Admin</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {user?.map((userss) => (
                  <tr key={userss?._id}>
                    <th scope="row">{userss?.name}</th>
                    <td>{userss.email}</td>
                    <td>{userss.role}</td>
                    <td>
                      <Modal show={show} onHide={handleClose}>
                        <div className=" p-5">
                          <Modal.Title className="text-center">
                            <div className="">
                              <span className="label">Name</span>
                              <input
                                // {...register("name", {
                                //   required: {
                                //     value: true,
                                //     message: "Name is Required",
                                //   },
                                // })}
                                value={myUser?.name}
                                placeholder="Course Name"
                                className="shippingInput"
                                type="text"
                                name="name"
                                id="name"
                              />
                            </div>
                            <div className="mt-2">
                              <span className="label">Email</span>
                              <input
                                // {...register("name", {
                                //   required: {
                                //     value: true,
                                //     message: "Name is Required",
                                //   },
                                // })}
                                value={myUser?.email}
                                placeholder="Course Name"
                                className="shippingInput"
                                type="text"
                                name="name"
                                id="name"
                              />
                            </div>
                            <div className="mt-2">
                              <span className="label">Role</span>
                              {/* <label for="role" class="block text-sm text-black ">
                          Role
                        </label> */}
                              <select
                                // {...register("name", {
                                //   required: {
                                //     value: true,
                                //     message: "Name is Required",
                                //   },
                                // })}
                                onChange={(e) => setRole(e.target.value)}
                                value={myUser?.email}
                                // placeholder="Course Name"
                                className="shippingInput"
                                type="select"
                                name="role"
                                id="role"
                              >
                                {/* <option value="Please Select Role">
                                  Please Select Role
                                </option> */}
                                {/* <option value="advaiser" selected>
                                  Advaiser
                                </option>
                                <option value="owner">Owner</option> */}
                                {action.map((role) => (
                                  <option key={role.name} value={role.name}>
                                    {role.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </Modal.Title>

                          <div className=" d-flex justify-content-center mt-2 px-4">
                            <Button
                              // variant="secondary"
                              className="btn btn-warning w-100"
                              onClick={() => makeUserAdminHendeler()}
                            >
                              Make Admin
                            </Button>
                          </div>
                        </div>
                        {/* <Modal.Header closeButton> */}

                        {/* <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body> */}

                        {/* <Modal.Footer>
         
        </Modal.Footer> */}
                      </Modal>
                      <button
                        onClick={() => handleShow(userss?._id)}
                        className="btn btn-warning"
                      >
                        Make Admin
                      </button>
                    </td>

                    <td>
                      <span
                        onClick={() => handleDeleteShow(userss?._id)}
                        className="delete-btn"
                      >
                        <Modal show={deleteShow} onHide={handleDeleteClose}>
                          <div className=" p-5">
                            <Modal.Title className="text-center">
                              Are You Sure Delete?
                            </Modal.Title>

                            <div className=" d-flex justify-content-center mt-2">
                              <Button
                                // variant="secondary"
                                className="btn btn-warning px-5"
                                onClick={() => deleteHenedler(userss?._id)}
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
                        <AiFillDelete />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
           
          </div>
        </div>
        <div class="row my-5">
          <h3 class="fs-4 mb-3">All Owner</h3>
          <div class="col">
            <div data-aos="fade-right" className="overflow-auto">
          <table class="table bg-white rounded shadow-sm  table-hover">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                  {/* <th scope="col">Make Admin</th> */}
                  <th scope="col">Remove Owner</th>
                </tr>
              </thead>
              <tbody>
                {owner?.map((user) => (
                  <tr key={user?._id}>
                    <th scope="row">{user?.name}</th>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    {/* <td>
                      <button className="btn btn-warning">Make Admin</button>
                    </td> */}

                    <td>
                      <span
                        onClick={() => removeAdminHendeler(user?.email)}
                        className="delete-btn"
                      >
                        <AiFillDelete />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
            
          </div>
        </div>
        <div class="row my-5">
          <h3 class="fs-4 mb-3">All Adviser</h3>
          <div class="col">
            <div data-aos="fade-right" className="overflow-auto">
          <table class="table bg-white rounded shadow-sm  table-hover">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                  {/* <th scope="col">Make Admin</th> */}
                  <th scope="col">Remove Woner</th>
                </tr>
              </thead>
              <tbody>
                {adviser?.map((user) => (
                  <tr key={user?._id}>
                    <th scope="row">{user?.name}</th>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    {/* <td>
                      <button className="btn btn-warning">Make Admin</button>
                    </td> */}

                    <td>
                      <span
                        onClick={() => removeAdminHendeler(user?.email)}
                        className="delete-btn"
                      >
                        <AiFillDelete />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
