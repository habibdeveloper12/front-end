import React from 'react';
import Banner from './Banner';
import Course from './Course';
import Description from './Description';
import Footer from './Footer';
import Navber from './Navber';
import Subcribe from './Subcribe';
import Wark from './Wark';

const Home = () => {
      return (
            <div>
                 {/* <Navber/> */}
                 <Banner/>
                 <Course/>
                 <Description/>
                 <Wark/>
                 <Subcribe/>
                 <Footer/>
            </div>
      );
};

export default Home;