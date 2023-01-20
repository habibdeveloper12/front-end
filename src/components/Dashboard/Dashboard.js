import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../Authorazation/useAdmin";
import useAdviser from "../Authorazation/useAdviser";

const Dashboard = () => {
  useEffect(() => {
    const el = document.getElementById("wrapper");
    const toggleButton = document.getElementById("menu-toggle");
    toggleButton.onclick = function () {
      console.log("click");
      el.classList.toggle("toggled");
    };
  }, []);

  const [user] = useAuthState(auth);

  const [admin] = useAdmin(user);
  const [adviser] = useAdviser(user);
  console.log(adviser);
  console.log();

  return (
    <>
      <div class="d-flex" id="wrapper">
        {/* <!-- Sidebar --> */}
        <div class="bg-white" id="sidebar-wrapper">
          <div class="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
            <i class="fas fa-user-secret me-2"></i>COURSE
          </div>
          <div class="list-group list-group-flush my-3">
            <a
              href="#"
              class="list-group-item list-group-item-action bg-transparent second-text active"
            >
              <i class="fas fa-tachometer-alt me-2"></i>Dashboard
            </a>
           {
            !admin  && <>  <Link
            to="/dashboard"
            class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
          >
            <i class="fas fa-project-diagram me-2"></i>Payment Details
          </Link>
          <Link
            to="userMyCourses"
            class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
          >
            <i class="fas fa-project-diagram me-2"></i>My Courses
          </Link>
          </>
           }
            <Link
              to="myProfile"
              class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <i class="fas fa-chart-line me-2"></i>My Profile
            </Link>

            {adviser && (
              <>
                <Link
                  to="addCourse"
                  class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                >
                  <i class="fas fa-gift me-2"></i>Add Course
                </Link>
                <Link
                  to="myActiveCourse"
                  class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                >
                  <i class="fas fa-gift me-2"></i>My Active Courses
                </Link>
              </>
            )}
            {admin && (
              <>
                <Link
                  to="pandingCourses"
                  class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                >
                  <i class="fas fa-paperclip me-2"></i>Pending Courses
                </Link>
               
                <Link
                  to="manageCourse"
                  class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                >
                  <i class="fas fa-shopping-cart me-2"></i>Manage Active Courses
                </Link>
                {/* <Link
                  to="manageOrder"
                  class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                >
                  <i class="fas fa-paperclip me-2"></i>Manage All Order
                </Link> */}
                {/* <Link
                  to="addCourse"
                  class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                >
                  <i class="fas fa-gift me-2"></i>Add Course
                </Link> */}
                <Link
                  to="user"
                  class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                >
                  <i class="fas fa-comment-dots me-2"></i>User
                </Link>
                <Link
                  to="contect"
                  class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                >
                  <i class="fas fa-comment-dots me-2"></i>All Contact List
                </Link>
                <Link
                  to="allPaymentList"
                  class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                >
                  <i class="fas fa-comment-dots me-2"></i>All Payment List
                </Link>
              </>
            )}

            <span
              href="#"
              class="list-group-item list-group-item-action bg-transparent text-danger fw-bold"
            >
              <i class="fas fa-power-off me-2"></i>Logout
            </span>
          </div>
        </div>
        {/* <!-- /#sidebar-wrapper -->
    
            <!-- Page Content --> */}
        <div id="page-content-wrapper">
          <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
            <div class="d-flex align-items-center pt-5">
              <i
                class="fas fa-align-left primary-text fs-4 me-3"
                id="menu-toggle"
              >
                <GiHamburgerMenu />
              </i>

              <h2 class="fs-2 m-0">Dashboard</h2>
            </div>

            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle second-text fw-bold"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fas fa-user me-2"></i> {user?.displayName}
                  </a>
                  {/* <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="#">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Logout
                      </a>
                    </li>
                  </ul> */}
                </li>
              </ul>
            </div>
          </nav>

          <div class="container-fluid px-4">
            <Outlet />
            {/* <div class="row g-3 my-2">
              <div class="col-md-3">
                <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                  <div>
                    <h3 class="fs-2">720</h3>
                    <p class="fs-5">Products</p>
                  </div>
                  <i class="fas fa-gift fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                </div>
              </div>

              <div class="col-md-3">
                <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                  <div>
                    <h3 class="fs-2">4920</h3>
                    <p class="fs-5">Sales</p>
                  </div>
                  <i class="fas fa-hand-holding-usd fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                </div>
              </div>

              <div class="col-md-3">
                <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                  <div>
                    <h3 class="fs-2">3899</h3>
                    <p class="fs-5">Delivery</p>
                  </div>
                  <i class="fas fa-truck fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                </div>
              </div>

              <div class="col-md-3">
                <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                  <div>
                    <h3 class="fs-2">%25</h3>
                    <p class="fs-5">Increase</p>
                  </div>
                  <i class="fas fa-chart-line fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                </div>
              </div>
            </div> */}

            {/* <div class="row my-5">
              <h3 class="fs-4 mb-3">Recent Orders</h3>
              <div class="col">
                <table class="table bg-white rounded shadow-sm  table-hover">
                  <thead>
                    <tr>
                      <th scope="col" width="50">
                        #
                      </th>
                      <th scope="col">Product</th>
                      <th scope="col">Customer</th>
                      <th scope="col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Television</td>
                      <td>Jonny</td>
                      <td>$1200</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Laptop</td>
                      <td>Kenny</td>
                      <td>$750</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Cell Phone</td>
                      <td>Jenny</td>
                      <td>$600</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Fridge</td>
                      <td>Killy</td>
                      <td>$300</td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>Books</td>
                      <td>Filly</td>
                      <td>$120</td>
                    </tr>
                    <tr>
                      <th scope="row">6</th>
                      <td>Gold</td>
                      <td>Bumbo</td>
                      <td>$1800</td>
                    </tr>
                    <tr>
                      <th scope="row">7</th>
                      <td>Pen</td>
                      <td>Bilbo</td>
                      <td>$75</td>
                    </tr>
                    <tr>
                      <th scope="row">8</th>
                      <td>Notebook</td>
                      <td>Frodo</td>
                      <td>$36</td>
                    </tr>
                    <tr>
                      <th scope="row">9</th>
                      <td>Dress</td>
                      <td>Kimo</td>
                      <td>$255</td>
                    </tr>
                    <tr>
                      <th scope="row">10</th>
                      <td>Paint</td>
                      <td>Zico</td>
                      <td>$434</td>
                    </tr>
                    <tr>
                      <th scope="row">11</th>
                      <td>Carpet</td>
                      <td>Jeco</td>
                      <td>$1236</td>
                    </tr>
                    <tr>
                      <th scope="row">12</th>
                      <td>Food</td>
                      <td>Haso</td>
                      <td>$422</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* //   <!-- /#page-content-wrapper --> */}
    </>
  );
};

export default Dashboard;
