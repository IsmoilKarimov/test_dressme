import React, { useContext, useState } from "react";
import {
  discount,
  bucket,
  video,
  delivery,
  heart,
  shirt,
  addBag,
  cardImg,
  star,
  setpersonIcons,
  InputCheck,
} from "../../../assets/imgs";
import { dressMainData } from "../../../ContextHook/ContextMenu";

import SetClothesWear from "../WearCollectionSet/SetClothesWear";

export default function CollectionCards() {
  console.log("CollectionCards Page");

  const [productList, setProductList] = useState([
    {
      id: 1,
      discount: "-30%",
      video: true,
      diliver: true,
      like: true,
      buy: true,
      ProducImg:
        "https://images.uzum.uz/cfrous7hj8j9g698ann0/t_product_540_high.jpg#1677854670106",
      noProductImg: cardImg,
      title: "Line-Pattern Zipper Sweatshirt (Original Quality)",
      starCount: 256,
      shirtSize: "M | 3XL",
      sale: "258.000",
      price: "372.000",
      changeColor: [
        { id: 1, value: 1, action: false, colors: "bg-purple-700" },
        { id: 2, value: 2, action: false, colors: "bg-green-600" },
        { id: 3, value: 3, action: false, colors: "bg-red-700" },
        { id: 4, value: 4, action: false, colors: "bg-yellow-500" },
        { id: 5, value: 5, action: false, colors: "bg-black" },
        { id: 6, value: 6, action: false, colors: "bg-sky-500" },
      ],
    },
    {
      id: 2,
      discount: "-30%",
      video: true,
      diliver: true,
      like: true,
      buy: true,
      ProducImg:
        "https://images.uzum.uz/cfvjvm7hj8j9g698q1qg/t_product_540_high.jpg#1677854670118",
      noProductImg: cardImg,
      title: "Line-Pattern Zipper Sweatshirt (Original Quality)",
      starCount: 256,
      shirtSize: "M | 3XL",
      sale: "258.000",
      price: "372.000",
      changeColor: [
        { id: 1, value: 1, action: false, colors: "bg-purple-700" },
        { id: 2, value: 2, action: false, colors: "bg-green-600" },
        { id: 3, value: 3, action: false, colors: "bg-red-700" },
        { id: 4, value: 4, action: false, colors: "bg-yellow-500" },
        { id: 5, value: 5, action: false, colors: "bg-black" },
        { id: 6, value: 6, action: false, colors: "bg-sky-500" },
      ],
    },
    {
      id: 3,
      discount: "-30%",
      video: true,
      diliver: true,
      like: true,
      buy: true,
      ProducImg:
        "https://images.uzum.uz/cee9lmov1htd23aj6gjg/t_product_540_high.jpg#1677855157929",
      noProductImg: cardImg,
      title: "Line-Pattern Zipper Sweatshirt (Original Quality)",

      starCount: 256,
      shirtSize: "M | 3XL",
      sale: "",
      price: "372.000",
      changeColor: [
        { id: 1, value: 1, action: false, colors: "bg-purple-700" },
        { id: 2, value: 2, action: false, colors: "bg-green-600" },
        { id: 3, value: 3, action: false, colors: "bg-red-700" },
        { id: 4, value: 4, action: false, colors: "bg-yellow-500" },
        { id: 5, value: 5, action: false, colors: "bg-black" },
        { id: 6, value: 6, action: false, colors: "bg-sky-500" },
      ],
    },
    {
      id: 4,
      discount: "-30%",
      video: true,
      diliver: true,
      like: true,
      buy: true,
      ProducImg:
        "https://images.uzum.uz/cfh16dd40v9uauhi42hg/t_product_540_high.jpg#1677855222081",
      noProductImg: cardImg,
      title: "Line-Pattern Zipper Sweatshirt (Original Quality)",

      starCount: 256,
      shirtSize: "M | 3XL",
      sale: "258.000",
      price: "372.000",
      changeColor: [
        { id: 1, value: 1, action: false, colors: "bg-purple-700" },
        { id: 2, value: 2, action: false, colors: "bg-green-600" },
        { id: 3, value: 3, action: false, colors: "bg-red-700" },
        { id: 4, value: 4, action: false, colors: "bg-yellow-500" },
        { id: 5, value: 5, action: false, colors: "bg-black" },
        { id: 6, value: 6, action: false, colors: "bg-sky-500" },
      ],
    },
    {
      id: 5,
      discount: "-30%",
      video: true,
      diliver: true,
      like: true,
      buy: true,
      ProducImg:
        "https://images.uzum.uz/cfmebc7hgiopn8lcdoh0/t_product_540_high.jpg#1677855264045",
      noProductImg: cardImg,
      title: "Line-Pattern Zipper Sweatshirt (Original Quality)",

      starCount: 256,
      shirtSize: "M | 3XL",
      sale: "258.000",
      price: "372.000",
      changeColor: [
        { id: 1, value: 1, action: false, colors: "bg-purple-700" },
        { id: 2, value: 2, action: false, colors: "bg-green-600" },
        { id: 3, value: 3, action: false, colors: "bg-red-700" },
        { id: 4, value: 4, action: false, colors: "bg-yellow-500" },
        { id: 5, value: 5, action: false, colors: "bg-black" },
        { id: 6, value: 6, action: false, colors: "bg-sky-500" },
      ],
    },
    {
      id: 6,
      discount: "-30%",
      video: true,
      diliver: true,
      like: true,
      buy: true,
      ProducImg:
        "https://images.uzum.uz/cf557s8l08k0o9qi31gg/t_product_540_high.jpg#1677855329602",
      noProductImg: cardImg,
      title: "Line-Pattern Zipper Sweatshirt (Original Quality)",

      starCount: 256,
      shirtSize: "M | 3XL",
      sale: "258.000",
      price: "372.000",
      changeColor: [
        { id: 1, value: 1, action: false, colors: "bg-purple-700" },
        { id: 2, value: 2, action: false, colors: "bg-green-600" },
        { id: 3, value: 3, action: false, colors: "bg-red-700" },
        { id: 4, value: 4, action: false, colors: "bg-yellow-500" },
        { id: 5, value: 5, action: false, colors: "bg-black" },
        { id: 6, value: 6, action: false, colors: "bg-sky-500" },
      ],
    },
    {
      id: 7,
      discount: "-30%",
      video: true,
      diliver: true,
      like: true,
      buy: true,
      ProducImg:
        "https://images.uzum.uz/cfmebc7hgiopn8lcdoh0/t_product_540_high.jpg#1677855264045",
      noProductImg: cardImg,
      title: "Line-Pattern Zipper Sweatshirt (Original Quality)",

      starCount: 256,
      shirtSize: "M | 3XL",
      sale: "258.000",
      price: "372.000",
      changeColor: [
        { id: 1, value: 1, action: false, colors: "bg-purple-700" },
        { id: 2, value: 2, action: false, colors: "bg-green-600" },
        { id: 3, value: 3, action: false, colors: "bg-red-700" },
        { id: 4, value: 4, action: false, colors: "bg-yellow-500" },
        { id: 5, value: 5, action: false, colors: "bg-black" },
        { id: 6, value: 6, action: false, colors: "bg-sky-500" },
      ],
    },
    {
      id: 8,
      discount: "-30%",
      video: true,
      diliver: true,
      like: true,
      buy: true,
      ProducImg:
        "https://images.uzum.uz/cf2h9jqvtie1lhbgt6mg/t_product_540_high.jpg#1677855329588",
      noProductImg: cardImg,
      title: "Line-Pattern Zipper Sweatshirt (Original Quality)",

      starCount: 256,
      shirtSize: "M | 3XL",
      sale: "258.000",
      price: "372.000",
      changeColor: [
        { id: 1, value: 1, action: false, colors: "bg-purple-700" },
        { id: 2, value: 2, action: false, colors: "bg-green-600" },
        { id: 3, value: 3, action: false, colors: "bg-red-700" },
        { id: 4, value: 4, action: false, colors: "bg-yellow-500" },
        { id: 5, value: 5, action: false, colors: "bg-black" },
        { id: 6, value: 6, action: false, colors: "bg-sky-500" },
      ],
    },
    {
      id: 9,
      discount: "-30%",
      video: true,
      diliver: true,
      like: true,
      buy: true,
      ProducImg:
        "https://images.uzum.uz/cf53ng0v1htd23al4sqg/t_product_540_high.jpg#1677855423341",
      noProductImg: cardImg,
      title: "Line-Pattern Zipper Sweatshirt (Original Quality)",

      starCount: 256,
      shirtSize: "M | 3XL",
      sale: "15.000",
      price: "372.000",
      changeColor: [
        { id: 1, value: 1, action: false, colors: "bg-purple-700" },
        { id: 2, value: 2, action: false, colors: "bg-green-600" },
        { id: 3, value: 3, action: false, colors: "bg-red-700" },
        { id: 4, value: 4, action: false, colors: "bg-yellow-500" },
        { id: 5, value: 5, action: false, colors: "bg-black" },
        { id: 6, value: 6, action: false, colors: "bg-sky-500" },
      ],
    },
    {
      id: 10,
      discount: "-30%",
      video: true,
      diliver: true,
      like: true,
      buy: true,
      ProducImg:
        "https://images.uzum.uz/cf5vfb2vtie1lhbh7h50/t_product_540_high.jpg#1677855423352",
      noProductImg: cardImg,
      title: "Line-Pattern Zipper Sweatshirt (Original Quality)",

      starCount: 256,
      shirtSize: "M | 3XL",
      sale: "258.000",
      price: "372.000",
      changeColor: [
        { id: 1, value: 1, action: false, colors: "bg-purple-700" },
        { id: 2, value: 2, action: false, colors: "bg-green-600" },
        { id: 3, value: 3, action: false, colors: "bg-red-700" },
        { id: 4, value: 4, action: false, colors: "bg-yellow-500" },
        { id: 5, value: 5, action: false, colors: "bg-black" },
        { id: 6, value: 6, action: false, colors: "bg-sky-500" },
      ],
    },
    {
      id: 11,
      discount: "-30%",
      video: true,
      diliver: true,
      like: true,
      buy: true,
      ProducImg:
        "https://images.uzum.uz/cf53ng0v1htd23al4sqg/t_product_540_high.jpg#1677855423341",
      noProductImg: cardImg,
      title: "Line-Pattern Zipper Sweatshirt (Original Quality)",

      starCount: 256,
      shirtSize: "M | 3XL",
      sale: "",
      price: "75.000",
      changeColor: [
        { id: 1, value: 1, action: false, colors: "bg-purple-700" },
        { id: 2, value: 2, action: false, colors: "bg-green-600" },
        { id: 3, value: 3, action: false, colors: "bg-red-700" },
        { id: 4, value: 4, action: false, colors: "bg-yellow-500" },
        { id: 5, value: 5, action: false, colors: "bg-black" },
        { id: 6, value: 6, action: false, colors: "bg-sky-500" },
      ],
    },
    {
      id: 12,
      discount: "-30%",
      video: true,
      diliver: true,
      like: true,
      buy: true,
      ProducImg:
        "https://images.uzum.uz/cf8g3tivtie1lhbhf1p0/t_product_540_high.jpg#1677855423420",
      noProductImg: cardImg,
      title: "Line-Pattern Zipper Sweatshirt (Original Quality)",

      starCount: 256,
      shirtSize: "M | 3XL",
      sale: "258.000",
      price: "372.000",
      changeColor: [
        { id: 1, value: 1, action: false, colors: "bg-purple-700" },
        { id: 2, value: 2, action: false, colors: "bg-green-600" },
        { id: 3, value: 3, action: false, colors: "bg-red-700" },
        { id: 4, value: 4, action: false, colors: "bg-yellow-500" },
        { id: 5, value: 5, action: false, colors: "bg-black" },
        { id: 6, value: 6, action: false, colors: "bg-sky-500" },
      ],
    },
    {
      id: 13,
      discount: "-30%",
      video: true,
      diliver: true,
      like: true,
      buy: true,
      ProducImg:
        "https://images.uzum.uz/cfcdqlavtie1lhbhs490/t_product_540_high.jpg#1677855423521",
      noProductImg: cardImg,
      title: "Line-Pattern Zipper Sweatshirt (Original Quality)",

      starCount: 256,
      shirtSize: "M | 3XL",
      sale: "258.000",
      price: "372.000",
      changeColor: [
        { id: 1, value: 1, action: false, colors: "bg-purple-700" },
        { id: 2, value: 2, action: false, colors: "bg-green-600" },
        { id: 3, value: 3, action: false, colors: "bg-red-700" },
        { id: 4, value: 4, action: false, colors: "bg-yellow-500" },
        { id: 5, value: 5, action: false, colors: "bg-black" },
        { id: 6, value: 6, action: false, colors: "bg-sky-500" },
      ],
    },
    {
      id: 14,
      discount: "-30%",
      video: true,
      diliver: true,
      like: true,
      buy: true,
      ProducImg:
        "https://images.uzum.uz/cfmebc7hgiopn8lcdoh0/t_product_540_high.jpg#1677855264045",
      noProductImg: cardImg,
      title: "Line-Pattern Zipper Sweatshirt (Original Quality)",

      starCount: 256,
      shirtSize: "M | 3XL",
      sale: "",
      price: "140.000",
      changeColor: [
        { id: 1, value: 1, action: false, colors: "bg-purple-700" },
        { id: 2, value: 2, action: false, colors: "bg-green-600" },
        { id: 3, value: 3, action: false, colors: "bg-red-700" },
        { id: 4, value: 4, action: false, colors: "bg-yellow-500" },
        { id: 5, value: 5, action: false, colors: "bg-black" },
        { id: 6, value: 6, action: false, colors: "bg-sky-500" },
      ],
    },
    {
      id: 15,
      discount: "-30%",
      video: true,
      diliver: true,
      like: true,
      buy: true,
      ProducImg:
        "https://images.uzum.uz/cfcdvh0l08k0o9qiqgcg/t_product_540_high.jpg#1677855423619",
      noProductImg: cardImg,
      title: "Line-Pattern Zipper Sweatshirt (Original Quality)",

      starCount: 256,
      shirtSize: "M | 3XL",
      sale: "",
      price: "372.000",
      changeColor: [
        { id: 1, value: 1, action: false, colors: "bg-purple-700" },
        { id: 2, value: 2, action: false, colors: "bg-green-600" },
        { id: 3, value: 3, action: false, colors: "bg-red-700" },
        { id: 4, value: 4, action: false, colors: "bg-yellow-500" },
        { id: 5, value: 5, action: false, colors: "bg-black" },
        { id: 6, value: 6, action: false, colors: "bg-sky-500" },
      ],
    },
  ]);

  const [dressInfo] = useContext(dressMainData);

  let dataStyle = "";
  let shadowStyle = "";
  if (dressInfo?.type === 1111) {
    dataStyle = "text-borderSpring ";
    shadowStyle = "hover:shadow-green-300/100 ";
  }
  if (dressInfo?.type === 2222) {
    dataStyle = "text-borderSummer";
    shadowStyle = "hover:shadow-amber-200/100  ";
  }
  if (dressInfo?.type === 3333) {
    dataStyle = "text-borderAutumm";
    shadowStyle = "hover:shadow-orange-200/100   ";
  }
  if (dressInfo?.type === 4444) {
    dataStyle = "text-borderWinter";
    shadowStyle = "hover:shadow-sky-200/100  ";
  }

  const onColorChecked = (itemId, colorId) => {
    setProductList((current) => {
      return current?.map((data) => {
        if (data?.id == itemId) {
          let newDataColor = data.changeColor.map((e) => {
            if (e.id == colorId) {
              return { ...e, action: !e.action };
            } else return e;
          });
          return { ...data, changeColor: [...newDataColor] };
        } else return data;
      });
    });
  };

  const [clothesSetWear, setClothesSetWear] = useState(true);

  return (
    <div className="flex flex-col box-border mt-[86px]">
      <div className="w-full ss:block sm:flex justify-between items-center mb-[25px] md:mb-0 md:px-0">
        <div className="not-italic font-AeonikProMedium lg:w-fit lg:text-2xl xl:text-3xl flex items-center leading-8 text-black">
          <span>Коллекция одежд, которые вам подходят</span>
        </div>
        <div className="rounded-lg overflow-hidden  h-[42px] md:h-[52px] ss:w-full md:w-[308px] md:mx-0 flex justify-between bg-slate-50 border border-solid ss:mt-5 md:mt-0 mx-auto ">
          <button
            onClick={() => setClothesSetWear(true)}
            className={`ss:w-1/2 md:w-[152px] md:h-[50px]  h-[42px] text-base text-black text-center font-AeonikProRegular not-italic ${
              clothesSetWear
                ? ` bg-white border  border-searchBgColor rounded-lg  ${dataStyle}`
                : ""
            } `}
          >
            {" "}
            Одежда
          </button>
          <button
            onClick={() => setClothesSetWear(false)}
            className={`ss:w-1/2 md:w-[152px] md:h-[50px]  h-[42px] text-base text-black text-center font-AeonikProRegular not-italic ${
              !clothesSetWear
                ? ` bg-white border  border-searchBgColor rounded-lg  ${dataStyle} `
                : ""
            } `}
          >
            Образы
          </button>
        </div>
      </div>
      {clothesSetWear ? (
        <>
          <div className="flex justify-between flex-wrap  md:mx-0 md:mt-[50px] gap-y-5 lg:gap-y-5 ">
            {productList.map((data) => {
              return (
                <div
                  key={data.id}
                  // onClick={() => handleGetCardId(data?.id)}
                  className={` ss:w-[48%] md:w-[24%] lg:w-[240px] transition ease-in-out delay-50 hover:shadow-cardShadow ${shadowStyle} xs:h-[456px] lg:h-[440px] border border-solid borderColorCard overflow-hidden rounded-lg`}
                >
                  <div className="relative w-full cursor-pointer ss:h-[206px] ls:h-[238px] xs:h-[309px] lg:h-[320px] flex content-between items-center overflow-hidden border-b border-solid flex-nowrap">
                    {data.ProducImg ? (
                      <img
                        className="w-full h-full m-auto hover:scale-105 transition duration-700 ease-in-out"
                        src={data.ProducImg}
                        alt="ProducImg"
                      />
                    ) : (
                      <img
                        className="w-full h-fit"
                        src={data.noProductImg}
                        alt="noProductImg"
                      />
                    )}
                    <div className="w-full flex absolute top-px p-[5px]  ss:justify-end xs:justify-between">
                      <ul className="nav-lists flex-col gap-y-1 justify-center h-full ss:hidden xs:flex">
                        <p className="group w-8 hover:w-[70px] bg-bgCard hover:bg-white  duration-300 rounded-lg overflow-hidden border border-borderColorCard flex items-center">
                          <span className="w-8 h-8 flex items-center justify-center  ">
                            <img src={discount} alt="" />
                          </span>
                          <span className=" w-0 flex items-center -mr-[1px] group-hover:w-10 duration-300  text-red-700 not-italic  font-AeonikProRegular text-[11px]">
                            -30%
                          </span>
                        </p>
                        <p className="group w-8 hover:w-[70px] bg-bgCard hover:bg-white  duration-300 rounded-lg overflow-hidden border border-borderColorCard flex items-center">
                          <span className="w-8 h-8 flex items-center justify-center">
                            <img src={video} alt="" />
                          </span>
                          <span className=" w-0 flex items-center -mr-[1px] group-hover:w-10 duration-300 not-italic  font-AeonikProRegular text-[11px]">
                            Video
                          </span>
                        </p>
                        <p className="group w-8 hover:w-[85px] bg-bgCard hover:bg-white  duration-300 rounded-lg overflow-hidden border border-borderColorCard flex items-center">
                          <span className="w-8 h-8 flex items-center justify-center  ">
                            <img src={delivery} alt="" />
                          </span>
                          <span className=" w-0 flex items-center  group-hover:w-[40px] duration-300 not-italic  font-AeonikProRegular text-[11px]">
                            Delivery
                          </span>
                        </p>
                      </ul>

                      <div className="flex flex-col gap-y-1" >
                        <p className="w-8 h-8  rounded-lg flex items-center bg-bgCard justify-center border border-solid border-borderColorCard hover:bg-white transition ease-out duration-500">
                          <img src={heart} alt="" />
                        </p>
                        <p className="w-8 h-8 ss:hidden rounded-lg bg-bgCard xs:flex items-center justify-center border border-solid border-borderColorCard hover:bg-white transition ease-out duration-500">
                          <img src={bucket} alt="" />
                        </p>
                      </div>
                    </div>
                    <div className="w-full  flex absolute bottom-[31px] pb-[6px] pr-[5px] justify-end ">
                      <p
                        onClick={() => setClothesSetWear(false)}
                        className="group w-8 hover:w-[138px] bg-bgCard hover:bg-white   duration-300 rounded-lg overflow-hidden border border-borderColorCard flex items-center justify-between"
                      >
                        <span className="  flex flex-nowrap items-center ml-[-100px] group-hover:ml-[10px] w-[92px]   not-italic overflow-hidden    duration-300   font-AeonikProMedium leading-3  text-black text-[11px] ">
                          Страница образа
                        </span>
                        <span className="w-8 h-8 flex items-center justify-center">
                          <img
                            className="ml-[2px]"
                            src={setpersonIcons}
                            alt="setpersonIcons"
                          />
                        </span>
                      </p>
                    </div>

                    <div className="absolute w-full flex justify-between items-center px-1 bottom-0 border-solid xs:h-[38px] lg:h-8 ss:h-[30px] xs:px-2 md:px-4 bg-white hover:backdrop-brightness-125 hover:bg-white/60 transition ease-out duration-500">
                      {data?.changeColor.map((itemValue) => {
                        return (
                          <div
                            key={itemValue?.id}
                            onClick={() =>
                              onColorChecked(data?.id, itemValue?.id)
                            }
                            className={`rounded-full flex items-center justify-center hover:scale-110 duration-300 ls:w-[22px] ls:h-[22px] w-5 h-5 lg:w-6 lg:h-6 ${itemValue?.colors} cursor-pointer  border border-solid border-borderColorCard mr-[3px]`}
                            htmlFor="Color1"
                          >
                            {itemValue?.action ? (
                              <img
                                className="w-[14px]"
                                src={InputCheck}
                                alt=""
                              />
                            ) : null}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="w-full rounded-b-1xl bg-white  flex flex-wrap   ss:h-[124px] xs:h-[147px] lg:h-[120px] ">
                    <div className="w-full  xs:px-3 ss:px-3 xs:mt-3 ss:mt-2">
                      <div className="w-full  not-italic font-AeonikProRegular text-[10px] ls:text-xs lg:text-[14px] leading-4 text-black mb-2 md:mb-0  cursor-pointer">
                        {data?.title || "NoData"}
                      </div>
                      <div className="w-full flex justify-between items-center xs:mt-3">
                        <div className="flex items-center justify-between">
                          <span>
                            {" "}
                            <img src={star} alt="" />
                          </span>
                          {/* <span><img src={} alt=""/></span> */}
                          <span className="not-italic font-AeonikProRegular text-[10px] ls:text-xs leading-4 text-right text-gray-500 ml-[2px] md:ml-1 flex items-center">
                            <span className="font-AeonikProMedium text-[10px] ls:text-xs not-italic mx-1 text-black md:mr-[6px] md:text-[13px]">
                              5.0{" "}
                            </span>
                            ({data?.starCount || 0}{" "}
                            <span className="ss:hidden lg:block md:ml-1 md:text-[11px]">
                              голосов
                            </span>
                            )
                          </span>
                        </div>
                        <div className="not-italic xs:font-AeonikProMedium ss:font-AeonikProRegular leading-4 text-black  ss:text-[11px] sm:text-xs  md:text-[13px] ">
                          <b>
                            <span>{data?.shirtSize || 0}</span>
                          </b>
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex items-center justify-between  pl-3 pr-[5px]">
                      <div className="flex items-center ">
                        {data.sale ? (
                          <div className="flex ss:flex-col-reverse md:flex-row	text-start items-start ">
                            <div className="text-start m-0 p-0  not-italic font-AeonikProMedium text-[18px] md:text-base leading-1 text-red-700 xs:text-base xs:leading-4 mr-1">
                              {data?.sale}
                            </div>
                            <div className="text-start m-0 p-0 text-[12px] mt-[8px]  line-through not-italic font-AeonikProRegular leading-3  text-borderColorCard ss:leading-1 md:text-[11px]">
                              {data?.price}
                            </div>
                          </div>
                        ) : (
                          <p
                            className="not-italic font-AeonikProMedium text-base leading-4"
                            style={{ color: "black" }}
                          >
                            {data?.price}{" "}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center">
                        <button className="w-[32px] h-[32px] mb-[4px]  rounded-lg border border-searchBgColor bg-btnBgColor flex items-center justify-center">
                          <img src={addBag} alt="addbag" className="w-8" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-full h-fit flex items-center justify-center mt-14">
            <div className="w-[760px] h-[60px] cursor-pointer not-italic font-AeonikProMedium text-base leading-4 text-center text-black flex items-center justify-center rounded-lg border border-searchBgColor bg-btnBgColor">
              Показать ещё 12 наборов
            </div>
          </div>
        </>
      ) : (
        <div className="mt-[50px]">
          <SetClothesWear />
        </div>
      )}
    </div>
  );
}
