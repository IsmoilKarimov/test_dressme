import React, { useEffect, useRef, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import MoonLoader from "react-spinners/MoonLoader";
import "../index.css";

// -------Navbar VS Footer
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import AddUserNavbar from "../components/header/AddUserNavbar/AddUserNavbar";

// -------Without Lazy

// ---------Only Skeleton
import SkeletonHomeIndex from "../components/Home/Skeleton/SkeletonHomeIndex";
import AddUserPrivateSkeleton from "../components/Home/AddUser/Skeleton/AddUserPrivateSkeleton";
import AddUserBodySkeleton from "../components/Home/AddUser/Skeleton/AddUserPrivateSkeleton";
import SignInSkeletonIndex from "../components/Authentication/SignUpSkeleton";
import SignUpSkeletonIndex from "../components/Authentication/SignUpSkeleton";
import AuthenIndex from "../components/header/AuthenticationNavbar/AuthenIndex";
// import YandexMapsIndex from "../components";
import YandexSkeletonIndex from "../components/YandexMap/YandexMapsSkeleton/YandexSkeletonIndex";
import ForgetPasswordIndex from "../components/Authentication/ForgetPassword";
import ConfirmPassword from "../components/Authentication/ConfirmPassword/ConfirmPassword";

// --------With lazy component
const HomePage = React.lazy(() => import("../Page/Home/Home"));
const AddUserPrivateInfo = React.lazy(() =>
  import("../components/Home/AddUser/AddUserPrivateData/AddUserPrivateData")
);
const AddUserBodyData = React.lazy(() =>
  import("../components/Home/AddUser/AddUserBodyData/AddUserBodyData")
);
const YandexMapDressMe = React.lazy(() =>
  import("../components/YandexMap/index")
);
const SignIn = React.lazy(() =>
  import("../components/Authentication/SignIn/index")
);
const SignUp = React.lazy(() =>
  import("../components/Authentication/SignUp/index")
);
const RouterList = () => {
  const location = useLocation();

  const [locationWindow, setLocationWindow] = useState("");
  useEffect(() => {
    setLocationWindow(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Routes>
        {/* Home Page */}
        <Route element={<Header />}>
          <Route
            path="/"
            element={
              <React.Suspense
                fallback={
                  <div>
                    <SkeletonHomeIndex />
                  </div>
                }
              >
                <HomePage />
              </React.Suspense>
            }
          />
          
        </Route>

        {/* Yandex Maps */}
        <Route>
          <Route
            path="/delivery-points"
            element={
              <React.Suspense
                fallback={
                  <div>
                    <YandexSkeletonIndex />
                  </div>
                }
              >
                <YandexMapDressMe />
              </React.Suspense>
            }
          />
        </Route>

        {/* Add user */}
        <Route element={<AddUserNavbar />}>
          <Route
            path="/add_user_private_data"
            element={
              <React.Suspense
                fallback={
                  <div>
                    <AddUserPrivateSkeleton />
                  </div>
                }
              >
                <AddUserPrivateInfo />
              </React.Suspense>
            }
          />
          <Route
            path="/add_user_body_data"
            element={
              <React.Suspense
                fallback={
                  <div>
                    <AddUserBodySkeleton />
                  </div>
                }
              >
                <AddUserBodyData />
              </React.Suspense>
            }
          />
        </Route>
        {/* Registration page  */}
        <Route element={<AuthenIndex />}>
          <Route
            path="/sign_in"
            element={
              <React.Suspense
                fallback={
                  <div>
                    <SignInSkeletonIndex />
                  </div>
                }
              >
                <SignIn />
              </React.Suspense>
            }
          />
          <Route
            path="/sign_up"
            element={
              <React.Suspense
                fallback={
                  <div>
                    <SignUpSkeletonIndex />
                  </div>
                }
              >
                <SignUp />
              </React.Suspense>
            }
          />
          <Route
            path="/forget_password"
            element={
              <React.Suspense
                fallback={
                  <div>
                    <SignUpSkeletonIndex />
                  </div>
                }
              >
                <ForgetPasswordIndex />
              </React.Suspense>
            }
          />
          <Route
            path="/confirm_password"
            element={
              <React.Suspense
                fallback={
                  <div>
                    <SignUpSkeletonIndex />
                  </div>
                }
              >
                <ConfirmPassword />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>

      {locationWindow !== "/add_user_private_data" &&
      locationWindow !== "/add_user_body_data" &&
      locationWindow !== "/confirm_password" &&
      locationWindow !== "/forget_password" &&
      locationWindow !== "/sign_up" &&
      locationWindow !== "/sign_in" &&
      locationWindow !== "/delivery-points" ? (
        <Footer />
      ) : null}
      {/* {locationWindow !== "/add_user_private_data" ||
      locationWindow !== "/add_user_body_data" ||
      locationWindow !== "/confirm_password" ||
      locationWindow !== "/forget_password" ||
      locationWindow !== "/sign_up" ||
      locationWindow !== "/sign_in" ||
      locationWindow !== "/delivery-points" ? (
        <Footer />
      ) : null} */}
    </>
  );
};
export default RouterList;
