import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { json, useNavigate, useParams } from "react-router-dom";
import { addToCart, cartClear } from "../Redux/Slice/cartSlice";
import { fetchSinglecourse } from "../Redux/Slice/singleCourseSlice";
import Loading from "../Utilites/Loading";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { clearShippingTotalCostDiscount } from "../Redux/Slice/shippingPriceSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const CourseDetails = () => {
  // const [quantity, setquantity] = useState(1);
  const orderItems = useSelector((state) => state.cart.cart);
  const parseInfo = localStorage.getItem("ShippingInfo");
  const shippingInfo = JSON.parse(parseInfo);
  const subTotalPrice = parseInt(localStorage.getItem("SubTotalPrice"));
  // const shippingPrice = parseInt(localStorage.getItem("ShippingPrice"));
  const totalPrice = parseInt(localStorage.getItem("TotalCost"));
  const discount = parseInt(localStorage.getItem("Discount"));
  const Zooms = 9;
  const { id } = useParams();
  const disPatch = useDispatch();
  const course = useSelector((state) => state.course);
  const [users, setUser] = useState({});
  console.log(orderItems);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    disPatch(fetchSinglecourse(id));

    fetch(`http://localhost:5000/api/v1/user/single/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.success) {
          setUser(data?.user);
        }
      });
  }, [id]);

  // const increasequantity = () => {
  //   setquantity(quantity + 1);
  // };
  // const decreasequantity = () => {
  //   if (quantity > 1) {
  //     setquantity(quantity - 1);
  //   } else {
  //     alert("sorry");
  //   }
  // };

  // const addedToCartHendeler = () => {
  //   const totalPrice =
  //     parseInt(quantity) * parseInt(course?.course?.course?.price);
  //   const shoppingCart = {
  //     name: course?.course?.course?.name,
  //     image: course?.course?.course?.images[0]?.url,
  //     description: course?.course?.course?.description,
  //     price: course?.course?.course?.price,
  //     id: course?.course?.course?._id,
  //     quantity,
  //     product: course?.course?.course?._id,
  //     totalPrice,
  //   };
  //   disPatch(addToCart(shoppingCart));
  //   toast.success("Course Added To Cart");
  // };

  const maptiler = {
    url: "https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=GenbiKMP4GMLsKvVjZHt",
    attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`,
  };

  const markerIcon = new L.Icon({
    iconUrl:
      "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png",
    iconSize: [35, 45],
    iconAnchor: [17, 46],
    popupAnchor: [0, -46],
  });

  const navigate = useNavigate();

  const paymentRequsterHendler = (quantity) => {
    if (users.status === "PAID") {
      const totalPrice =
        parseInt(quantity) * parseInt(course?.course?.course?.price);
      const shoppingCart = {
        name: course?.course?.course?.name,
        image: course?.course?.course?.images[0]?.url,
        description: course?.course?.course?.description,
        price: course?.course?.course?.price,
        id: course?.course?.course?._id,
        quantity,
        product: course?.course?.course?._id,
        totalPrice,
      };
      disPatch(addToCart(shoppingCart));
      const data = {
        shippingInfo,
        orderItems,
        name: user?.displayName,
        email: user?.email,
      };

      fetch(`http://localhost:5000/api/v1/order/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("UserToken")}`,
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            toast.success(<span>Please Contect Seller </span>);
            localStorage.removeItem("SubTotalPrice");
            // localStorage.removeItem("ShippingPrice");
            localStorage.removeItem("TotalCost");
            localStorage.removeItem("Discount");
            localStorage.removeItem("Cart");
            disPatch(cartClear());
            disPatch(clearShippingTotalCostDiscount());
            // disPatch(clearSubTota());
          }
        });
    } else {
      toast.error(
        <span>
          You need to subscribe to use this discount,
          <span
            className=" text-danger pointers"
            onClick={() => navigate("/myCart/chackout")}
          >
            Use Discount
          </span>{" "}
        </span>
      );
      const totalPrice =
        parseInt(quantity) * parseInt(course?.course?.course?.price);
      const shoppingCart = {
        name: course?.course?.course?.name,
        image: course?.course?.course?.images[0]?.url,
        description: course?.course?.course?.description,
        price: course?.course?.course?.price,
        id: course?.course?.course?._id,
        quantity,
        product: course?.course?.course?._id,
        totalPrice,
      };
      disPatch(addToCart(shoppingCart));
      //  toast.success("Course Added To Cart");
    }
  };

  return (
    <div className=" my-5">
      <div className="container pt-4">
        <div className="card detals-card p-5">
          <div className="row gx-5">
            {course.loading && (
              <p>
                <Loading></Loading>
              </p>
            )}
            {!course.loading && course.error ? <p>{course.error}</p> : ""}
            {!course.loading && course?.course?.course ? (
              <>
                <div
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  className="col-lg-6 col-sm-6 gap-3"
                >
                  <img
                    className="img-fluid rounded"
                    src={course?.course?.course?.images[0]?.url}
                    alt=""
                  />
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  className="col-lg-6 gap-3"
                >
                  <small className="text-muted py-0">
                    {course?.course?.course?.category}
                  </small>
                  <h3 className="py-0">{course?.course?.course?.name}</h3>

                  <p>{course?.course?.course?.courseTitle}</p>
                  <div className="w-75 mt-3">
                    <p>{course?.course?.course?.description}</p>
                    {/* <div className="counterCard mt-5 d-flx   justify-content-between">
                      <div className="d-flex gap-2">
                        <button
                          onClick={() => decreasequantity()}
                          className="btn btn-warning"
                        >
                          -
                        </button>
                        <span className="count">{quantity}</span>
                        <button
                          onClick={() => increasequantity()}
                          className="btn btn-warning"
                        >
                          +
                        </button>
                      </div>
                      <div className="mt-3">
                       <h6>Avalible quantity: {course?.course?.course?.Stock}</h6> 
                      </div>
                    </div> */}
                  </div>

                  <div className="cardTop my-3"></div>
                  <div className="d-flex justify-content-between">
                    <div>{/* <h3>{course?.course?.course?.price}$</h3> */}</div>
                    <div>
                      <button
                        // onClick={() => addedToCartHendeler()}
                        onClick={() =>
                          paymentRequsterHendler(course?.course?.course?.Stock)
                        }
                        className="btn btn-warning"
                      >
                        Use Discount
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
        {/* <div className="row">
          <div className="col-lg-8 col-sm-8 gap-2 col-12">
            <div className="cardTop my-4"> */}
      </div>

      <div className="row py-4 mx-3">
        <div
          className={`${
            course?.course?.course?.boxOneImage?.url ||
            course?.course?.course?.boxOneTitle !== ""
              ? "card col-lg-4 gap-1 col-12 p-3 "
              : ""
          }    `}
        >
          {course?.course?.course?.boxOneImage?.url && (
            <img
              className="w-full imagess rounded"
              src={course?.course?.course?.boxOneImage?.url}
              alt=""
            />
          )}

          {course?.course?.course?.boxOneTitle && (
            <p className="">{course?.course?.course?.boxOneTitle}</p>
          )}
        </div>

        <div
          className={`${
            course?.course?.course?.boxTwoImage?.url ||
            course?.course?.course?.boxTwoTitle !== ""
              ? "card col-lg-4 gap-1 col-12 p-3"
              : ""
          }  `}
        >
          {course?.course?.course?.boxTwoImage?.url && (
            <img
              className="w-full imagess rounded"
              src={course?.course?.course?.boxTwoImage?.url}
              alt=""
            />
          )}
          {course?.course?.course?.boxTwoTitle && (
            <p className="">{course?.course?.course?.boxTwoTitle}</p>
          )}
        </div>

        <div
          className={`${
            course?.course?.course?.boxThreeImage?.url ||
            course?.course?.course?.boxThreeTitle !== ""
              ? "card col-lg-4 gap-1 col-12 p-3"
              : "no"
          } `}
        >
          {course?.course?.course?.boxThreeImage?.url && (
            <img
              className="w-full imagess rounded"
              src={course?.course?.course?.boxThreeImage?.url}
              alt=""
            />
          )}
          {course?.course?.course?.boxThreeTitle && (
            <p className="">{course?.course?.course?.boxThreeTitle}</p>
          )}
        </div>
      </div>

      <div className="row mx-3">
        <div className="col-lg-8 col-sm-8 gap-2 col-12 mt-5">
          <h5 className="font-weight-bold">Course About:</h5>{" "}
          <p>{course?.course?.course?.about}</p>
          <div className="mt-4">
            <h5 className="font-weight-bold">Course Goal:</h5>{" "}
            <p>{course?.course?.course?.goal}</p>
          </div>
          <div className="mt-4">
            <h5 className="font-weight-bold">Course Mession:</h5>{" "}
            <p>{course?.course?.course?.mission}</p>
          </div>
        </div>

        <div className="col-lg-4 col-sm-4 gap-2 col-12 mt-5">
          {!course?.course?.course?.lat && !course?.course?.course?.log ? (
            <>
              <Loading />
              <p className="text-center">Location Not Found</p>
            </>
          ) : (
            <MapContainer
              center={[
                course?.course?.course?.lat,
                course?.course?.course?.log,
              ]}
              zoom={Zooms}
            >
              <TileLayer
                url={maptiler.url}
                attribution={maptiler.attribution}
              />
              <Marker
                icon={markerIcon}
                position={[
                  course?.course?.course?.lat,
                  course?.course?.course?.log,
                ]}
              >
                <Popup>
                  Admin Course Location <br /> Here.
                </Popup>
              </Marker>
            </MapContainer>
          )}
        </div>
      </div>
    </div>

    //     </div>
    //   </div>
    // </div>
  );
};

export default CourseDetails;
