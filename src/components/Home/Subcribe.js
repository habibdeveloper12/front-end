import React from "react";
import { Button, Form } from "react-bootstrap";

const Subcribe = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="bg-success rounded subcribe">
          <div data-aos="zoom-in" className="p-5 text-center">
            <h2 className="my-1 text-white">Stay Informed</h2>
            <p className="my-2 text-white">Get updates, special offers and more</p>
            <Form>
              <Form.Group className="" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Button className="mt-3" variant="secondary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subcribe;
