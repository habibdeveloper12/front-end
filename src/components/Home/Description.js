import React from "react";
import { Carousel } from "react-bootstrap";

const Description = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-6">
            <div data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="300"  className="h-50 mt-3 mx-4">
              {/* <img
                className="img-fluid rounded"
                src="https://polite-bubblegum-8fcb31.netlify.app/caro/junior%20golf%20foursome%20(2).jpg"
                alt=""
              /> */}
              <Carousel slide={false}>
                <Carousel.Item>
                  <img
                    className="d-block w-100 carouselImg"
                    src="/picture/1.png"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 carouselImg"
                    src="/picture/2.jpg"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 carouselImg"
                    src="/picture/3.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="300">
              <h2>Giving Back</h2>
              <p>
                At Michigan’s Best Golf Deals, we believe in giving back to our
                local communities. That’s why five dollars from every
                subscription go to Junior golf and five dollars goes to the
                Michigan soldier and sailor relief fund.
              </p>
            </div>
            <div className="mt-4">
              <h2>Referral Fee and Fundraising</h2>
              <p>
                In addition to the above mentioned organizations that we
                support, we also want to reward our loyal customers and
                fundraising partners. For every referral we receive we are happy
                to pay a ten dollar referral fee to the person named by the new
                subscriber at the time they sign up. (There is a prompt that
                asks the new subscriber if they were referred by anyone.)
              </p>
              <p className="mt-4">
                We are also happy to join with other local organizations such as
                the VFW and the American Legion by paying them the same ten
                dollar fee for each referral. Both programs require the new
                subscriber to list the referring person or organization’s email
                address. So make sure that they identify you so we know who to
                pay.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
