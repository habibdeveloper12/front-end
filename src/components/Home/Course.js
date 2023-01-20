import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchCourse } from "../Redux/Slice/proudctSlice";
import Loading from "../Utilites/Loading";

const Course = () => {
  const navigate = useNavigate();
  const courses = useSelector((state) => state.courses);
  const [cetagory, setCetagory] = useState([]);
  const disPatch = useDispatch();
  useEffect(() => {
    const config = {
      headers: { authorization: `Bearer ${localStorage.getItem("UserToken")}` },
    };
    // setshart(true);
    disPatch(fetchCourse());
    axios
      .get("http://localhost:5000/api/v1/courses/course", config)
      .then((res) => setCetagory(res?.data?.course));
  }, []);

  console.log(cetagory);
  const getUniqeData = (data, property) => {
    let SpecficCetagory = data.map((ctgy) => {
      return ctgy[property];
    });

    return (SpecficCetagory = ["All", ...new Set(SpecficCetagory)]);
  };
 console.log(courses )
  const categoryOnlyData = getUniqeData(cetagory, "category");

  const cetagoryFilterDataHendeler = (cetagory) => {
    console.log(cetagory);
    disPatch(fetchCourse(cetagory));
  };

  const searchHendeler = (text) => {
    console.log(text);
    disPatch(fetchCourse(text));
  };
  return (
    <div className="my-5">
      <div className="cardTop"></div>
      <div className="container mt-5">
        <div className="card-section">
          <div className="car">
            <div className="row gx-5" >
              <div data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" className="col-lg-2 mt-5">
                <h5>CATEGORY</h5>
                <div className="cardTop mt-2"></div>

                <div className="filterCetagory ">
                  {categoryOnlyData.map((cetagory, index) => {
                    return (
                      <p
                        onClick={() => cetagoryFilterDataHendeler(cetagory)}
                        className="my-0 cursor-pointers"
                        key={index}
                      >
                        {cetagory}
                      </p>
                    );
                  })}
                </div>

                <div className=" mt-5">
                  <h5>FIND COURSE</h5>
                  <input
                    onChange={(e) => searchHendeler(e.target.value)}
                    placeholder="FIND SINGLE COURSE"
                    className="searchBox"
                    type="text"
                  />

                  {/* <button className=" btn btn-warning w-100 mt-3">Search Now</button> */}
                </div>
              </div>
              <div className="col-lg-10 col-xl-10">
                <div data-aos="fade-left"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="500"
                  data-aos-duration="500" className="cards mt-4">
                  {courses.loading && (
                    <div className=" flex  justify-end">
                      <Loading></Loading>
                    </div>
                  )}
                  {!courses.loading && courses.error ? (
                    <p>{courses.error}</p>
                  ) : (
                    ""
                  )}
                  {!courses.loading && !courses.error ? (
                    <>
                      {courses?.courses?.course?.slice(0, 4).map((course) =>  course.status !== "Pending" && <Card className="myCards" key={courses._id}>
                          <Card.Img
                            className="cardImg"
                            variant="top"
                            src={course.images[0]?.url}
                          />
                          <Card.Body>
                            <Card.Title>{course.name}</Card.Title>
                            <h2 className="">{course.price}</h2>
                            <Card.Text>{course.courseTitle}</Card.Text>
                            <Button
                              onClick={() =>
                                navigate(`/course/details/${course._id}`)
                              }
                              variant="warning"
                            >
                              View Deal
                            </Button>
                          </Card.Body>
                        </Card>
                      )}
                    </>
                  ) : null}
                </div>

                <div className="mt-4 text-end">
                  <button
                    onClick={() => navigate("/course")}
                    className="btn btn-warning px-4"
                  >
                    See All Course
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
