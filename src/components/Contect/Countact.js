import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const Countact = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    const contect = {
      name: data.name,
      subject: data.subject,
      email: data.email,
      phone: data.phone,
      message: data.message,
    };

    fetch("http://localhost:5000/api/v1/contect/contect", {
      method: "POST",
      body: JSON.stringify(contect),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.success) {
          reset();
          swal({
            title: "Message Send Successfull",
            text: "Thank you Sir",
            icon: "success",
            buttons: [false],
          });
        }
      });
  };
  return (
    <div className="my-5">
      <div className="container pt-4">
        <h2 className="my-5 pt-3 text-center">Help & Support</h2>
        <div className="context-us">
          <div>
            <span>Address:</span>
            <span className="px-4">xxx</span>
          </div>
          <div>
            <span>Phone:</span>
            <span className="px-4">+ 1235 2355 98</span>
          </div>
          <div>
            <span>Email:</span>
            <span className="px-4">xxx</span>
          </div>
          <div>
            <span>Website:</span>
            <span className="px-4">michigans</span>
          </div>
        </div>

        <div className="my-5 ">
          <h3 className="">Contact Us</h3>

          <div className="mt-4 card contact-container p-3">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="inputGAp mt-3">
                <div className="">
                  <input
                    {...register("name", {
                      required: {
                        value: true,
                        message: "name is Required",
                      },
                    })}
                    placeholder="Name"
                    className="ContextInput"
                    name="name"
                    id="name"
                  />
                  <label class="label">
                    {errors.name?.type === "required" && (
                      <span className="text-danger">{errors.name.message}</span>
                    )}
                  </label>
                </div>
                <div className="">
                  <input
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is Required",
                      },
                    })}
                    placeholder="Email"
                    className="ContextInput"
                    name="email"
                    id="email"
                  />
                  <label class="label">
                    {errors.email?.type === "required" && (
                      <span className="text-danger">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>
              <div className="inputGAp mt-3">
                <div className="">
                  <input
                    {...register("phone", {
                      required: {
                        value: true,
                        message: "Phone is Required",
                      },
                    })}
                    placeholder="Phone"
                    className="ContextInput"
                    name="phone"
                    id="phone"
                  />
                  <label class="label">
                    {errors.phone?.type === "required" && (
                      <span className="text-danger">
                        {errors.phone.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="">
                  <input
                    {...register("subject", {
                      required: {
                        value: true,
                        message: "Subject is Required",
                      },
                    })}
                    placeholder="Subject"
                    className="ContextInput"
                    name="subject"
                    id="subject"
                  />
                  <label class="label">
                    {errors.subject?.type === "required" && (
                      <span className="text-danger">
                        {errors.subject.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>

              {/* <div className="mt-3">
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "email is Required",
                    },
                  })}
                  type="email"
                  placeholder="Email"
                  className="Contex"
                  name="email"
                  id="email"
                />
                <label class="label">
                  {errors.email?.type === "required" && (
                    <span className="text-danger">{errors.email.message}</span>
                  )}
                </label>
              </div> */}

              <div className="mt-3">
                <textarea
                  {...register("message", {
                    required: {
                      value: true,
                      message: "Message is Required",
                    },
                  })}
                  type="textare"
                  placeholder="Message"
                  className="contextTextAre"
                  name="message"
                  id="message"
                />
                <label class="label">
                  {errors.message?.type === "required" && (
                    <span className="text-danger">
                      {errors.message.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="mt-3 text-center">
                <input
                  className="btn btn-primary px-5"
                  type="submit"
                  value="Send Message"
                />
              </div>

              <div></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countact;
