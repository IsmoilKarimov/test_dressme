import React, { useContext, useState } from "react";
import {
  AutummFemale,
  AutummMale,
  SignInAutumm,
  SignInSpring,
  SignInSummer,
  SignInWinter,
  SignUpAutumm,
  SignUpSpring,
  SignUpSummer,
  SignUpWinter,
  SpringFemale,
  SpringMale,
  SummerFemale,
  SummerMale,
  WinterFemale,
  WinterMale,
  user,
} from "../../../assets/imgs";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { dressMainData } from "../../../ContextHook/ContextMenu";
import { MdAdd } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
const AuthenticationNavbar = () => {
  const [dressInfo] = useContext(dressMainData);
  let genderStyle = "";
  let IconsColor = "";
  if (dressInfo?.type === 1111) {
    IconsColor = "borderSpring";
    genderStyle =
      "text-borderSpring bg-bgSpring border-borderSpring w-[170px] h-[44px]  justify-center flex items-center bg-btnBgColor border  mr-2 rounded-lg";
  }
  if (dressInfo?.type === 2222) {
    IconsColor = "borderSpring";
    genderStyle =
      "text-borderSummer bg-bgSummer border-borderSummer w-[170px] h-[44px]  justify-center flex items-center bg-btnBgColor border  mr-2 rounded-lg";
  }
  if (dressInfo?.type === 3333) {
    IconsColor = "borderSpring";
    genderStyle =
      "text-borderAutumm bg-bgAutumm border-borderAutumm w-[170px] h-[44px]  justify-center flex items-center bg-btnBgColor border  mr-2 rounded-lg";
  }
  if (dressInfo?.type === 4444) {
    IconsColor = "borderSpring";
    genderStyle =
      "text-borderWinter bg-bgWinter border-borderWinter w-[170px] h-[44px]  justify-center flex items-center bg-btnBgColor border  mr-2 rounded-lg";
  }

  const personItems = [
    { id: 1111, signInIcon: SignInSpring, signUpIcon: SignUpSpring },
    { id: 2222, signInIcon: SignInSummer, signUpIcon: SignUpSummer },
    { id: 3333, signInIcon: SignInAutumm, signUpIcon: SignUpAutumm },
    { id: 4444, signInIcon: SignInWinter, signUpIcon: SignUpWinter },
  ];
  const location = useLocation();

  const [locationWindow, setLocationWindow] = useState("");
  useEffect(() => {
    setLocationWindow(location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex flex-col justify-center items-center m-0 p-0 box-border ss:hidden md:block">
      <div className="max-w-[1280px] w-[100%] flex justify-center  py-3 items-center m-auto   ">
        {personItems
          ?.filter((value) => value.id === dressInfo?.type)
          .map((data) => {
            return (
              <div key={data?.id} className=" ">
                {/* {locationWindow !== "/forget_password" ? ( */}
                {locationWindow === "/sign_in" ||
                locationWindow === "/sign_up" ? (
                  <div className="w-fit flex items-center ">
                    <NavLink
                      to={"/sign_in"}
                      className={({ isActive }) =>
                        isActive
                          ? genderStyle
                          : "w-[170px] h-[44px]   justify-center flex items-center bg-btnBgColor border  mr-2 rounded-lg"
                      }
                    >
                      <img className="" src={data?.signInIcon} alt="female" />
                      <span className="mt-1 font-AeonikProMedium ml-1 not-italic text-sm leading-4 tracking-[0,16px]">
                        Войти в систему
                      </span>
                    </NavLink>
                    <NavLink
                      to={"/sign_up"}
                      className={({ isActive }) =>
                        isActive
                          ? genderStyle
                          : "w-[170px] h-[44px]   justify-center flex items-center bg-btnBgColor border  mr-2 rounded-lg"
                      }
                    >
                      <img className="" src={data?.signUpIcon} alt="male" />
                      <span className="mt-1 font-AeonikProMedium not-italic ml-1  text-sm leading-4 tracking-[0,16px]">
                        Создать аккаунт
                      </span>
                    </NavLink>
                  </div>
                ) : null}
                {locationWindow === "/forget_password" ? (
                  <div className="w-fit h-12  flex items-center">
                    <NavLink
                      to="/sign_in "
                      className={`text-${IconsColor} h-[44px] w-[56px] rounded-lg border border-searchBgColor bg-btnBgColor flex items-center justify-center mr-3 `}
                    >
                      <span
                        className={`w-6 h-6 border border-${IconsColor} rounded-full flex items-center justify-center`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="16"
                          fill="currentColor"
                          class={`bi bi-arrow-left  `}
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            strokeWidth={"2"}
                            d={`M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z`}
                          />
                        </svg>
                      </span>
                    </NavLink>
                    <NavLink
                      to={"/forget_password"}
                      className={({ isActive }) =>
                        isActive
                          ? genderStyle
                          : "w-[170px] h-[44px]   justify-center flex items-center bg-btnBgColor border  mr-2 rounded-lg"
                      }
                    >
                      <span>
                        {" "}
                        <AiOutlineEye
                          // className={`text-${IconsColor}`}
                          size={22}
                        />
                      </span>
                      <span className="mt-1 font-AeonikProMedium not-italic ml-1  text-sm leading-4 tracking-[0,16px]">
                        Забыли пароль?{" "}
                      </span>
                    </NavLink>{" "}
                  </div>
                ) : null}
                {locationWindow === "/confirm_password" ? (
                  <div className="w-fit h-12  flex items-center">
                    <NavLink
                      to="/sign_in "
                      className={`text-${IconsColor} h-[44px] w-[56px] rounded-lg border border-searchBgColor bg-btnBgColor flex items-center justify-center mr-3 `}
                    >
                      <span
                        className={`w-6 h-6 border border-${IconsColor} rounded-full flex items-center justify-center`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="16"
                          fill="currentColor"
                          class={`bi bi-arrow-left  `}
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            strokeWidth={"2"}
                            d={`M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z`}
                          />
                        </svg>
                      </span>
                    </NavLink>
                    <NavLink
                      to={"/confirm_password"}
                      className={({ isActive }) =>
                        isActive
                          ? genderStyle
                          : "w-[170px] h-[44px]   justify-center flex items-center bg-btnBgColor border  mr-2 rounded-lg"
                      }
                    >
                      <span>
                        {" "}
                        <AiOutlineEye
                          // className={`text-${IconsColor}`}
                          size={22}
                        />
                      </span>
                      <span className="mt-1 font-AeonikProMedium not-italic ml-1  text-sm leading-4 tracking-[0,16px]">
                        Подтвердите парол
                      </span>
                    </NavLink>{" "}
                  </div>
                ) : null}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AuthenticationNavbar;
