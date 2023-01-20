import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Utilites/Loading";

const ContectDetails = () => {
  const { id } = useParams();
  const [contect, setContect] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/api/v1/contect/contect/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setContect(data.contect);
          setLoading(false);
        } else {
          setLoading(false);
        }
      });
  }, []);

  console.log(contect);

  if (loading) return <Loading />;
  return (
    <div className="my-5">
      <div className="card p-3">
        <h4>Contect Details</h4>

        <div className="mt-5">
          <p>
            {" "}
            <span>Coustomer Name:</span>
            <span className="px-4">{contect?.name}</span>
          </p>
          <p>
            {" "}
            <span>Coustomer Email:</span>
            <span className="px-4">{contect?.email}</span>
          </p>
          <p>
            {" "}
            <span>Coustomer Phone:</span>
            <span className="px-4">{contect?.phone}</span>
          </p>
          <p>
            {" "}
            <span>Message Subject:</span>
            <span className="px-4">{contect?.subject}</span>
          </p>
          <p>
            {" "}
            <span>Message:</span>
            <span className="px-4">{contect?.message}</span>
          </p>
        </div>
      </div>
      {id}
    </div>
  );
};

export default ContectDetails;
