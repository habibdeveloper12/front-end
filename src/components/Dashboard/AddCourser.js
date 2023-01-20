import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { MdAddPhotoAlternate } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import axios from "axios";
import toast from "react-hot-toast";
import swal from "sweetalert";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const AddCourser = () => {
  const navigate = useNavigate();
  // const disPatch = useDispatch();
  const [productPictue, setProductPicture] = useState("");
  const [boxOneImage, setboxOneImage] = useState("");
  const [boxTwoImage, setTowOneImage] = useState("");
  const [boxThreeImage, setThreeeImage] = useState("");
  const [user] = useAuthState(auth)
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    const lat = parseFloat(data.courseLocationLat)
    const log = parseFloat(data.courseLocation)
    const myForm = new FormData();
    myForm.append("name", data.name);
    myForm.append("category", data.category);
    myForm.append("description", data.description);
    myForm.append("Stock", data.Stock);
    myForm.append("email", user?.email);
    myForm.append("courseTitle", data.courseTitle);
    // myForm.append("user", userId);
    myForm.append("images", productPictue);
    myForm.append("about", data.about);
    myForm.append("mission", data.mission);
    myForm.append("goal", data.goal)
    myForm.append("lat", lat);
    myForm.append("log", log);
    myForm.append("boxOneImage", boxOneImage);
    myForm.append("boxOneTitle", data.boxOneTitle);
    myForm.append("boxTwoImage", boxTwoImage);
    myForm.append("boxTwoTitle", data.boxTwoTitle);
    myForm.append("boxThreeImage", boxThreeImage);
    myForm.append("boxThreeTitle", data.boxThreeTitle);
    await axios({
      method: "post",
      url: "http://localhost:5000/api/v1/courses/course",
      data: myForm,
      headers: {
        "Content-Type": "multipart/form-data",
        authorization: `Bearer ${localStorage.getItem("UserToken")}`,
      },
    })
      .then((res) => {
        setProductPicture("");
        setboxOneImage("");
        setTowOneImage("");
        setThreeeImage("");
        reset();
        swal({
          title: "Course Add Successfull",
          text: "Thank you Sir",
          icon: "success",
          buttons: [false],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const ProductPictureHendeler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProductPicture(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const boxOneImagePictureHendeler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setboxOneImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const boxTwoImagePictureHendeler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setTowOneImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const boxThreeImagePictureHendeler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setThreeeImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <div className="my-5">
      <div data-aos="fade-right" className="card p-3">
        <h5>Add Course</h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row mt-5">
            <div className="col-lg-6 ">
              <span className="label">Course Name</span>
              <input
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
                placeholder="Course Name"
                className="shippingInput"
                type="text"
                name="name"
                id="name"
              />
              <label class="label">
                {errors.name?.type === "required" && (
                  <span className="text-danger">{errors.name.message}</span>
                )}
              </label>
            </div>
            <div className="col-lg-6">
              <span className="label">Course Title</span>
              <input
                {...register("courseTitle", {
                  required: {
                    value: true,
                    message: "Course Title is Required",
                  },
                })}
                placeholder="Course Title"
                className="shippingInput"
                name="courseTitle"
                id="courseTitle"
              />
              <label class="label">
                {errors.courseTitle?.type === "required" && (
                  <span className="text-danger">
                    {errors.courseTitle.message}
                  </span>
                )}
              </label>
            </div>
          </div>
          <div className="row mt-3">
            {/* <div className="col-lg-6 ">
              <span className="label">Price</span>
              <input
                {...register("price", {
                  required: {
                    value: true,
                    message: "price is Required",
                  },
                })}
                placeholder="Price"
                className="shippingInput"
                type="number"
                name="price"
                id="price"
              />
              <label class="label">
                {errors.price?.type === "required" && (
                  <span className="text-danger">{errors.price.message}</span>
                )}
              </label>
            </div> */}
            <div className="col-lg-6">
              <span className="label">Category</span>
              <input
                {...register("category", {
                  required: {
                    value: true,
                    message: "category is Required",
                  },
                })}
                placeholder="Category"
                className="shippingInput"
                name="category"
                id="category"
              />
              <label class="label">
                {errors.category?.type === "required" && (
                  <span className="text-danger">{errors.category.message}</span>
                )}
              </label>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-6 ">
              <span className="label">Number of usages</span>
              <input
                {...register("Stock", {
                  required: {
                    value: true,
                    message: "Stock is Required",
                  },
                })}
                placeholder="Stock"
                className="shippingInput"
                type="number"
                name="Stock"
                id="Stock"
              />
              <label class="label">
                {errors.Stock?.type === "required" && (
                  <span className="text-danger">{errors.Stock.message}</span>
                )}
              </label>
            </div>
            <div className="col-lg-6">
              <span className="label">Description</span>
              <textarea
                {...register("description", {
                  required: {
                    value: true,
                    message: "Description is Required",
                  },
                })}
                placeholder="Description"
                className="shippingInput"
                name="description"
                id="description"
              />
              <label class="label">
                {errors.description?.type === "required" && (
                  <span className="text-danger">
                    {errors.description.message}
                  </span>
                )}
              </label>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-6 ">
              <span className="label">Image</span>
              <input
                {...register("images", {
                  required: {
                    value: true,
                    message: "images is Required",
                  },
                })}
                onChange={(e) => ProductPictureHendeler(e)}
                type="file"
                name="image-uplode"
                id="product-img"
                hidden
                placeholder="images"
                className="shippingInput"

              // id="images"
              />
              <label htmlFor={!productPictue && "product-img"} className=" ">
                <div>
                  {!productPictue && (
                    <div className="add-image">
                      <div className=" ">
                        <span className="text-6xl text-[#EC255A]">
                          <MdAddPhotoAlternate />
                        </span>
                      </div>
                    </div>
                  )}
                  {productPictue && (
                    <div className="add-image">
                      <div className="mt-3 d-relative">
                        <img
                          className="h-44 w-72 p-1 rounded-lg"
                          src={productPictue}
                          alt="productPicure"
                        />
                        <span
                          onClick={() => setProductPicture("")}
                          className=" absolute text-2xl top-[5px] text-red-500 right-[5px] cursor-pointer"
                        >
                          <TiDelete />
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </label>
              <label class="label">
                {errors.images?.type === "required" && (
                  <span className="text-danger">{errors.images.message}</span>
                )}
              </label>
            </div>
            <div className="col-lg-6">
              <span className="label">About Course</span>
              <textarea
                {...register("about", {
                  required: {
                    value: true,
                    message: "about is Required",
                  },
                })}
                placeholder="About"
                className="shippingInput h-50"
                name="about"
                id="about"
              />
              <label class="label">
                {errors.about?.type === "required" && (
                  <span className="text-danger">
                    {errors.about.message}
                  </span>
                )}
              </label>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-lg-6 ">
              <span className="label">Our Goal</span>
              <input
                {...register("goal", {
                  required: {
                    value: true,
                    message: "goal is Required",
                  },
                })}
                placeholder="Goal"
                className="shippingInput"
                type="text"
                name="goal"
                id="goal"
              />
              <label class="label">
                {errors.goal?.type === "required" && (
                  <span className="text-danger">{errors.goal.message}</span>
                )}
              </label>
            </div>
            <div className="col-lg-6">
              <span className="label">Our Mession</span>
              <input
                {...register("mission", {
                  required: {
                    value: true,
                    message: "Mession is Required",
                  },
                })}
                placeholder="Course Title"
                className="shippingInput"
                name="mission"
                id="mission"
              />
              <label class="label">
                {errors.mission?.type === "required" && (
                  <span className="text-danger">
                    {errors.mission.message}
                  </span>
                )}
              </label>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-lg-6 ">
              <span className="label">Add Your Google Longitude code</span>
              <input
                {...register("courseLocationLat", {
                  required: {
                    value: true,
                    message: "Code is Required",
                  },
                })}
                placeholder="Enter Your Carrent Loaction Code"
                className="shippingInput"
                type="text"
                name="courseLocationLat"
                id="courseLocationLat"
              />
              <label class="label">
                {errors.courseLocationLat?.type === "required" && (
                  <span className="text-danger">{errors.courseLocationLat.message}</span>
                )}
              </label>
            </div>
            <div className="col-lg-6 ">
              <span className="label">Add Your Google Latitude code</span>
              <input
                {...register("courseLocation", {
                  required: {
                    value: true,
                    message: "Code is Required",
                  },
                })}
                placeholder="Enter Your Carrent Loaction Code"
                className="shippingInput"
                type="text"
                name="courseLocation"
                id="courseLocation"
              />
              <label class="label">
                {errors.courseLocation?.type === "required" && (
                  <span className="text-danger">{errors.courseLocation.message}</span>
                )}
              </label>
            </div>

          </div>
          <p className="mt-3">Dear Admin, Google Longitude or Latitude put the code very carefully in the input field.Do Not Put Any alphabet or any fullstap comma in the code.</p>
         
          <div className="mt-5">
            <div className="  row ">
              <div className="col-lg-4 col-12 card p-3 ">
                <span className="label">box-1 image(optional)</span>
                <input
                  {...register("boxOneImage", {
                    // required: {
                    //   value: true,
                    //   message: "images is Required",
                    // },
                  })}
                  onChange={(e) => boxOneImagePictureHendeler(e)}
                  type="file"
                  name="image-uplode"
                  id="boxOneImage"
                  hidden
                  placeholder="images"
                  className="shippingInput"

                // id="images"
                />
                <label htmlFor={!boxOneImage && "boxOneImage"} className=" ">
                  <div>
                    {!boxOneImage && (
                      <div className="add-image">
                        <div className=" ">
                          <span className="text-6xl text-[#EC255A]">
                            <MdAddPhotoAlternate />
                          </span>
                        </div>
                      </div>
                    )}
                    {boxOneImage && (
                      <div className="add-image">
                        <div className="mt-3 d-relative">
                          <img
                            className="h-44 w-72 p-1 rounded-lg"
                            src={boxOneImage}
                            alt="productPicure"
                          />
                          <span
                            onClick={() => setboxOneImage("")}
                            className=" absolute text-2xl top-[5px] text-red-500 right-[5px] cursor-pointer"
                          >
                            <TiDelete />
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </label>

                <span className="label mt-1">Add Someting text (optional)</span>
                <input
                  {...register("boxOneTitle", {
                    // required: {
                    //   value: true,
                    //   message: "Code is Required",
                    // },
                  })}
                  placeholder="title"
                  className="shippingInput"
                  type="text"
                  name="boxOneTitle"
                  id="boxOneTitle"
                />
              </div>
              <div className="col-lg-4 col-12 card p-3 ">
                <span className="label">box-2 image(optional)</span>
                <input
                  {...register("boxTwoImage", {
                    // required: {
                    //   value: true,
                    //   message: "images is Required",
                    // },
                  })}
                  onChange={(e) => boxTwoImagePictureHendeler(e)}
                  type="file"
                  name="image-uplode"
                  id="boxTwoImage"
                  hidden
                  placeholder="images"
                  className="shippingInput"

                // id="images"
                />
                <label htmlFor={!boxTwoImage && "boxTwoImage"} className=" ">
                  <div>
                    {!boxTwoImage && (
                      <div className="add-image">
                        <div className=" ">
                          <span className="text-6xl text-[#EC255A]">
                            <MdAddPhotoAlternate />
                          </span>
                        </div>
                      </div>
                    )}
                    {boxTwoImage && (
                      <div className="add-image">
                        <div className="mt-3 d-relative">
                          <img
                            className="h-44 w-72 p-1 rounded-lg"
                            src={boxTwoImage}
                            alt="productPicure"
                          />
                          <span
                            onClick={() => setTowOneImage("")}
                            className=" absolute text-2xl top-[5px] text-red-500 right-[5px] cursor-pointer"
                          >
                            <TiDelete />
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </label>

                <span className="label mt-1">Add Someting text (optional)</span>
                <input
                  {...register("boxTwoTitle", {
                    // required: {
                    //   value: true,
                    //   message: "Code is Required",
                    // },
                  })}
                  placeholder="title"
                  className="shippingInput"
                  type="text"
                  name="boxTwoTitle"
                  id="boxTwoTitle"
                />
              </div>
              <div className="col-lg-4 col-12 card p-3 ">
                <span className="label">box-3 image(optional)</span>
                <input
                  {...register("boxThreeImage", {
                    // required: {
                    //   value: true,
                    //   message: "images is Required",
                    // },
                  })}
                  onChange={(e) => boxThreeImagePictureHendeler(e)}
                  type="file"
                  name="image-uplode"
                  id="boxThreeImage"
                  hidden
                  placeholder="images"
                  className="shippingInput"

                // id="images"
                />
                <label
                  htmlFor={!boxThreeImage && "boxThreeImage"}
                  className=" "
                >
                  <div>
                    {!boxThreeImage && (
                      <div className="add-image">
                        <div className=" ">
                          <span className="text-6xl text-[#EC255A]">
                            <MdAddPhotoAlternate />
                          </span>
                        </div>
                      </div>
                    )}
                    {boxThreeImage && (
                      <div className="add-image">
                        <div className="mt-3 d-relative">
                          <img
                            className="h-44 w-72 p-1 rounded-lg"
                            src={boxThreeImage}
                            alt="productPicure"
                          />
                          <span
                            onClick={() => setThreeeImage("")}
                            className=" absolute text-2xl top-[5px] text-red-500 right-[5px] cursor-pointer"
                          >
                            <TiDelete />
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </label>

                <span className="label mt-1">Add Someting text (optional)</span>
                <input
                  {...register("boxThreeTitle", {
                    // required: {
                    //   value: true,
                    //   message: "Code is Required",
                    // },
                  })}
                  placeholder="title"
                  className="shippingInput"
                  type="text"
                  name="boxThreeTitle"
                  id="boxThreeTitle"
                />
              </div>
            </div>
          </div>


          <div className="my-5  d-flex justify-content-center ">
            <input type="submit" value="Add Course" className="myButton" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourser;
