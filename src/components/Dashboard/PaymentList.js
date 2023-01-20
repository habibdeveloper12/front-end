import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useParams } from "react-router-dom";
import swal from "sweetalert";

const PaymentList = () => {
  const { id } = useParams();
  const [selless, setSelles] = useState([]);
  const [reFetch, setRefetch] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/order/allPaymentList/${id}   `)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setSelles(data?.salles);
        } else {
        }
      });
  }, [selless, reFetch]);

const limitReduceHendler = (postId) => {
  
  fetch(`http://localhost:5000/api/v1/order/limit/${postId}   `, {
    method: "POST",

    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      if (json.success) {
        swal({
          title: json?.message,
          text: "Thank you Sir",
          icon: "success",
          buttons: [false],
        });
        //   setRefetch(true);
      } else {
        swal({
          title: json?.message,
          text: "Thank you Sir",
          icon: "success",
          buttons: [false],
        });
      }
    });
}

const deleteHenedler = (id) => {
      console.log(id);
      fetch(`http://localhost:5000/api/v1/order/${id}`, {
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
      {selless?.length > 0 ? (
        <div class="row my-5">
          <h3 class="fs-4 mb-3">Total Payment Amount {selless?.length}</h3>
          <div class="col ">
            <div className="overflow-auto">
              <table class="table bg-white rounded shadow-sm  table-hover ">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Pay Amount</th>
                    <th scope="col">Status</th>
                    <th scope="col">country</th>

                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {selless?.map((order) => (
                    <tr key={order?._id}>
                      <th scope="row">{order?.name}</th>
                      <td>{order?.email}</td>
                      <td>{order?.paidPrice} USD</td>
                      <td>{order?.status}</td>
                      <td>{order?.country}</td>
                      

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

export default PaymentList;
