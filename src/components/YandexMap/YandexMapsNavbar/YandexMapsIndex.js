import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import YandexTop from "./YandexTop";
import YandexMedium from "./YandexMedium";
import YandexFilter from "./YandexFilter";
import { dressMainData } from "../../../ContextHook/ContextMenu";
export default function YandexMapsIndex() {

  return (
    <div className="w-full flex flex-col justify-center items-center m-0 p-0 box-border ">
      <div className="max-w-[1320px] w-[100%] ss:block md:flex ss:px-4 md:px-0 md:py-0 justify-center items-center m-auto ">
        {/* {!dressInfo?.yandexOpenMenu ? ( */}
        <div
        
        >
          <div className=" px-[40px] rounded-b-[16px] bg-yandexNavbar backdrop-blur-sm	border border-searchBgColor border-t-0">
            <YandexTop />
            <YandexMedium />
          </div>
          <div className=" flex flex-col justify-center">
            <YandexFilter />
          </div>
        </div>
        {/* ) : ( */}
        {/* <div
          className={`${
            dressInfo?.yandexOpenMenu ? "h-fit" : "h-0"
          } flex flex-col justify-center overflow-hidden duration-200`}
        >
          <YandexFilter />
        </div> */}
        {/* )} */}
        <Outlet />
      </div>
    </div>
  );
}
