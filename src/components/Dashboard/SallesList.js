import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiFillDelete } from "react-icons/ai";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import auth from "../../firebase.init";

const SallesList = () => {
  const { id } = useParams();
  const [selles, setSelles] = useState([]);
  const [reFetch, setRefetch] = useState(false);
  const [user] = useAuthState(auth)

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/order/allsellesList/${id}   `)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setSelles(data?.salles);
        } else {
        }
      });
  }, [ reFetch , selles]);
  console.log(selles)

  const limitReduceHendler = (postId) => {
    console.log(postId);
    fetch(`http://localhost:5000/api/v1/order/limit/${postId}   `, {
      method: "POST",

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.success) {
          setRefetch(true);
          swal({
            title: json?.message,
            text: "Thank you Sir",
            icon: "success",
            buttons: [false],
          });
        } else {
          swal({
            title: json?.message,
            text: "Thank you Sir",
            icon: "success",
            buttons: [false],
          });
        }
        
      });
  };

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
         ;
        } else {
        }
      });
  };

  return (
    <>
      {selles?.length > 0 ? (
        <div class="row my-5">
          <h3 class="fs-4 mb-3">Total Course Salles {selles?.length}</h3>
          <div class="col ">
            <div className="overflow-auto">
              <table class="table bg-white rounded shadow-sm  table-hover ">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">User Limit</th>
                    <th scope="col">Limit Action</th>

                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {selles?.map((order) => (
                    <tr key={order?._id}>
                      <th scope="row">{order?.name}</th>
                      <td>{order?.email}</td>
                      <td>{order?.limit}</td>
                      <td>
                        <span
                          // variant="secondary"
                          className=" px-4  bg-warning py-1 rounded"
                          onClick={() => limitReduceHendler(order?._id)}
                        >
                          Closing limit
                        </span>
                      </td>

                      <td>
                        <span onClick={()=>deleteHenedler(order?._id)} className="delete-btn">
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

export default SallesList;
