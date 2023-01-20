import React from "react";
import { AiFillTwitterCircle, AiOutlineWifi } from "react-icons/ai";
import {BsFacebook} from "react-icons/bs"
import {BiMessageSquareDots} from "react-icons/bi"

const Footer = () => {
  return (
    <div className="mt-5 foooter">
      <div className="container  ">
        {/* <p className="text-center">
          @2022, MBGD. All right reserved.Global inc
        </p> */}
        <div className="row pt-5 ">
          <div className="col-lg-4 ">
            <span className="fw-semibold d-block textColer">About MyGolfDeals</span>
            <span className=" d-block fw-light">Home</span>
            <span className=" d-block fw-light">About Us</span>
          </div>
          <div className="col-lg-4">
            <span className="fw-semibold d-block textColer" >MyGolfDeals Support Links</span>
            <span className=" d-block fw-light">Faq</span>
            <span className=" d-block fw-light">Terms Of service</span>
            <span className=" d-block fw-light">Privacy Statement</span>
            {/* <span className=" d-block">How its Work</span> */}
          </div>
          <div className="col-lg-4 text-center textColer">
            <span className=" d-block fw-semibold">Unbeatble Golf Course Deals for Golfers In Michging</span>
            <p className="text-small fw-light">MyGolfDeals.com is an easy way to get access to great golf 
              course deals and coupons in Michigan and other great golfing cities..</p>
           
            <span className=" d-block fw-light">Contect MyGolfDeals</span>
            <span className=" d-block fw-light">938473974389</span>
            <span className=" d-block fw-light text-primary">Support@MyGolfDeals.com</span>
           <span>Dowenlode Our App</span>

           <div className="mt-2"> 
            <img className=" footerImg" src="/picture/appic.jpg" alt="" />
            
           </div>
           
          </div>
         
        </div>
        <div>
          <span className="textColer fw-semibold">Follow Us</span>
          <div className="  d-flex gap-3 mt-2">
            <div className="icons d-flex justify-content-center align-items-center">
              <span className="text-white  iconsColor"><BsFacebook/></span>
            </div>
            <div className="icons d-flex justify-content-center align-items-center">
              <span className="text-white  iconsColor"><AiFillTwitterCircle/></span>
            </div>
            <div className="icons d-flex justify-content-center align-items-center">
              <span className="text-white  iconsColor"><BiMessageSquareDots/></span>
            </div>
            <div className="icons d-flex justify-content-center align-items-center">
              <span className="text-white  iconsColor"><AiOutlineWifi/></span>
            </div>
           
            
            
          </div>
          <p className=" textColer mt-1">
          @2022, MBGD. All right reserved.Global inc
        </p> 
        </div>
      </div>
    </div>
  );
};

export default Footer;
