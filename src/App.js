import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Home from "./components/Home/Home";
import Navber from "./components/Home/Navber";
import { Route, Routes } from "react-router-dom";
import CourseDetails from "./components/Home/CourseDetails";
import Login from "./components/Authorazation/Login";
import Register from "./components/Authorazation/Register";
import { Toaster } from "react-hot-toast";
import Cart from "./components/Cart/Cart";
import Chackout from "./components/Cart/Chackout";
import OrderReview from "./components/Cart/OrderReview";
import Payment from "./components/Cart/Payment";
import RequreAuth from "./components/Authorazation/RequreAuth";
import PaymentSuccess from "./components/Cart/PaymentSuccess";
import Courses from "./components/Courses/Courses";
import Dashboard from "./components/Dashboard/Dashboard";
import MyOrder from "./components/Dashboard/MyOrder";
import MyProfile from "./components/Dashboard/MyProfile";
import ManageOrder from "./components/Dashboard/ManageOrder";
import ManageOrderDetails from "./components/Dashboard/ManageOrderDetails";
import ManageCourse from "./components/Dashboard/ManageCourse";
import AddCourser from "./components/Dashboard/AddCourser";
import User from "./components/Dashboard/User";
import UpdateCourese from "./components/Dashboard/UpdateCourese";
import RequreAdmin from "./components/Authorazation/RequreAdmin";
import Countact from "./components/Contect/Countact";
import Contect from "./components/Dashboard/Contect";
import ContectDetails from "./components/Dashboard/ContectDetails";
import PaymentCancle from "./components/Cart/PaymentCancle";
import AdviserLogin from "./components/Authorazation/AdviserLogin";
import AdviserSignUp from "./components/Authorazation/AdviserSingUp";
import MyCourse from "./components/Dashboard/MyCourse";
import PendingCourses from "./components/Dashboard/PendingCourses";
import UserCourses from "./components/Dashboard/UserCourses";
import AllPaymentList from "./components/Dashboard/AllPaymentList";
import SallesList from "./components/Dashboard/SallesList";
import PaymentList from "./components/Dashboard/PaymentList";
function App() {
  return (
    <div className="">
      <Navber />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Countact />}></Route>
        <Route path="/course" element={<Courses />}></Route>
        <Route path="/course/details/:id" element={<CourseDetails />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/adviserLogin" element={<AdviserLogin />}></Route>
        <Route path="/signUp" element={<Register />}></Route>
        <Route path="/adviserSignUp" element={<AdviserSignUp />}></Route>
        <Route path="/myCart" element={<Cart />}></Route>
        <Route
          path="/myCart/chackout"
          element={
            <RequreAuth>
              <Chackout />
            </RequreAuth>
          }
        ></Route>
        <Route path="/myCart/chackout/review" element={<OrderReview />}></Route>
        <Route
          path="/myCart/chackout/review/payment"
          element={
            <RequreAuth>
              <Payment />
            </RequreAuth>
          }
        ></Route>
        <Route
          path="/myCart/chackout/review/payment/success"
          element={<PaymentSuccess />}
        ></Route>
        <Route
          path="/myCart/chackout/review/payment/fail"
          element={<PaymentCancle />}
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequreAuth>
              <Dashboard />
            </RequreAuth>
          }
        >
          <Route index element={<MyOrder />} />
          <Route path="/dashboard/myProfile" element={<MyProfile />} />
          <Route path="/dashboard/userMyCourses" element={<UserCourses />} />
          <Route path="/dashboard/sellesList/:id" element={<SallesList />} />
          <Route path="/dashboard/paymentList/:id" element={<PaymentList />} />
          <Route
            path="/dashboard/manageOrder"
            element={
              <RequreAuth>
                <RequreAdmin>
                  <ManageOrder />
                </RequreAdmin>
              </RequreAuth>
            }
          />
          <Route
            path="/dashboard/manageOrder/details/:id"
            element={<ManageOrderDetails />}
          />
          <Route
            path="/dashboard/manageCourse"
            element={
              <RequreAdmin>
                <RequreAdmin>
                  <ManageCourse />
                </RequreAdmin>
              </RequreAdmin>
            }
          />
          <Route
            path="/dashboard/allPaymentList"
            element={
              <RequreAdmin>
                <RequreAdmin>
                  <AllPaymentList />
                </RequreAdmin>
              </RequreAdmin>
            }
          />
          <Route
            path="/dashboard/contect"
            element={
              <RequreAdmin>
                <RequreAdmin>
                  <Contect />
                </RequreAdmin>
              </RequreAdmin>
            }
          />
          <Route
            path="/dashboard/contect/message/:id"
            element={
              <RequreAdmin>
                <RequreAdmin>
                  <ContectDetails />
                </RequreAdmin>
              </RequreAdmin>
            }
          />
          <Route
            path="/dashboard/manageCourse/update/:id"
            element={
              <RequreAuth>
                <RequreAdmin>
                  <UpdateCourese />
                </RequreAdmin>
              </RequreAuth>
            }
          />
          <Route
            path="/dashboard/addCourse"
            element={
              <RequreAuth>
                <AddCourser />
              </RequreAuth>
            }
          />
          <Route
            path="/dashboard/myActiveCourse"
            element={
              <RequreAuth>
                <MyCourse />
              </RequreAuth>
            }
          />
          <Route
            path="/dashboard/pandingCourses"
            element={
              <RequreAuth>
                <RequreAdmin>
                  <PendingCourses />
                </RequreAdmin>
              </RequreAuth>
            }
          />
          <Route
            path="/dashboard/user"
            element={
              <RequreAuth>
                <RequreAdmin>
                  <User />
                </RequreAdmin>
              </RequreAuth>
            }
          />
        </Route>
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
