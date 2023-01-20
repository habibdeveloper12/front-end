import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Loading from "../Utilites/Loading";
const Contect = () => {
  const [contect, setContect] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refetch, setReFetch] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/api/v1/contect/contect")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setContect(data.contect);
          setLoading(false);
          setReFetch(false);
        } else {
          setLoading(false);
          setReFetch(false);
        }
      });
  }, [refetch]);
  console.log(contect);
  if (loading) return <Loading />;

  const contectDeleteHendeler = (id) => {
    fetch(`http://localhost:5000/api/v1/contect/contect/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setReFetch(true);
          swal({
            title: "Message Delete Successfull",
            text: "Thank you Sir",
            icon: "success",
            buttons: [false],
          });
        } else {
        }
      });
  };

  return (
    <div>
      <div className="card p-5">
        <div  class="row my-5">
          <h3 class="fs-4 mb-3">All Contact List</h3>
          <div class="col">
            <div data-aos="fade-right" className="overflow-auto">
              <table class="table bg-white rounded shadow-sm  table-hover">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">View Message</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {contect?.map((userss) => (
                    <tr key={userss?._id}>
                      <th scope="row">{userss?.name}</th>
                      <td>{userss.email}</td>
                      <td>{userss.phone}</td>
                      <td>
                        <button
                          onClick={() =>
                            navigate(
                              `/dashboard/contect/message/${userss?._id}`
                            )
                          }
                          className="btn btn-warning"
                        >
                          View Message
                        </button>
                      </td>

                      <td>
                        <span
                          onClick={() => contectDeleteHendeler(userss?._id)}
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

export default Contect;
