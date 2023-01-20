import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Utilites/Loading";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [profile, setProfile] = useState({});
  const [loading, setLodoing] = useState(false);
  useEffect(() => {
    setLodoing(true);
    const userId = localStorage.getItem("userId");
    fetch(`http://localhost:5000/api/v1/user/single/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setProfile(data.user);
          setLodoing(false);
        } else {
          setLodoing(false);
        }
      });
  }, []);

  if (loading) return <Loading />;
  return (
    <div data-aos="fade-up"
      data-aos-anchor-placement="center-bottom" className="my-5 card p-5 lg-w-50 mx-auto">
      <div className=" d-flex gap-3">
        <td>
          <span>Role:</span>
        </td>
        <span>{profile?.role}</span>
      </div>
      <div className=" d-flex gap-3">
        <span>Name:</span>
        <span>{profile?.name}</span>
      </div>
      <div className=" d-flex gap-3">
        <span>Email:</span>
        <span>{profile?.email}</span>
      </div>
      {/* <div className=' d-flex gap-3'> 
                 <span>Role:</span>
                  <span>{profile?.role}</span>
                 </div> */}
    </div>
  );
};

export default MyProfile;
