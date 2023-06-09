import React, { useContext } from "react";

import {
  YMaps,
  Map,
  ZoomControl,
  FullscreenControl,
  GeolocationControl,
  SearchControl,
  TrafficControl,
  TypeSelector,
  RulerControl,
  RouteEditor,
  Placemark,
  Clusterer,
} from "react-yandex-maps";
import {
  Clock,
  ClothesHang,
  ColorLessLocation,
  MenuClose,
  MenuOpen,
  locationIcons,
  markerIcons,
  searchIcons,
  shirtMaps,
  shop,
  star,
} from "../../assets/imgs";

import { useState } from "react";
import "./yandex.css";
import YandexMapsIndex from "./YandexMapsNavbar/YandexMapsIndex";
import { dressMainData } from "../../ContextHook/ContextMenu";
import { GrFormDown } from "react-icons/gr";
import NavbarTopOpenMenu from "./YandexMapsNavbar/NavbarTopOpenMenu";
function YandexMapsDressMe() {
  // const [openMenuYandex, setOpenMenuYandex] = useState(false);

  const map = React.createRef();
  const ymaps = React.createRef();
  const [points, setPoints] = useState([
    {
      id: 1,
      accordion: false,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.343505, 69.247869],
    },
    {
      id: 2,
      accordion: false,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.304935, 69.235164],
    },
    {
      id: 3,
      accordion: false,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.344238, 69.242964],
    },
    {
      id: 4,
      accordion: false,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.323764, 69.359813],
    },
    {
      id: 5,
      accordion: false,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.341694, 69.420043],
    },
    {
      id: 6,
      accordion: false,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.321907, 69.254526],
    },
    {
      id: 7,
      accordion: false,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.320452, 69.219132],
    },
    {
      id: 8,
      accordion: false,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.307447, 69.249306],
    },
    {
      id: 9,
      accordion: false,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.292876, 69.261085],
    },
    {
      id: 10,
      accordion: false,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.32621, 69.248896],
    },
    {
      id: 11,
      accordion: false,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.318716, 69.248341],
    },
    {
      id: 12,
      accordion: false,
      address: "Ильинское-Усово (Московская область) Заповедная улица",
      workTime: "Ежедневно 08:00-22:00",
      star: "4.55",
      imgs: [{ id: 1, img: "" }],
      direction:
        'From the bus stop "LCD Usovo Park", cross the road. Opposite the Locals restaurant.',
      cordinate: [41.282263, 69.216182],
    },
  ]);
  const [dressInfo, setDressInfo] = useContext(dressMainData);

  const handleToggleMenu = () => {
    setDressInfo({ ...dressInfo, yandexOpenMenu: !dressInfo?.yandexOpenMenu });
    // setOpenMenuYandex(!dressInfo);
  };
  console.log(dressInfo?.yandexOpenMenu, "dressInfo");
  const handleAccordion = (value) => {
    setPoints((current) => {
      return current?.map((data) => {
        if (data?.id == value) {
          return { ...data, accordion: !data.accordion };
        } else return data;
      });
    });
  };

  return (
    <div className=" h-fit w-full flex justify-center overflow-x-none  ">
      <div className="w-[100%] h-[100vh] border-b border-searchBgColor overflow-hidden">
        <div
          className={`absolute z-50  ${
            !dressInfo?.yandexOpenMenu ? "top-0 duration-300 " : "top-[-250px] duration-300 "
          }  duration-300 w-full`}
        >
          <YandexMapsIndex />
        </div>
        <div
          className={`absolute z-50  ${
            dressInfo?.yandexOpenMenu ? "top-2 duration-300 " : "top-[-250px] duration-300 "
          }  duration-300 w-full ml-[450px]`}
        >
          <NavbarTopOpenMenu />
        </div>
        <YMaps
          className="w-full"
          query={{ apikey: "8b56a857-f05f-4dc6-a91b-bc58f302ff21" }}
        >
          <Map
            state={{ center: [41.311153, 69.279729], zoom: 11 }}
            instanceRef={map}
            onLoad={(ymapsInstance) => {
              ymaps.current = ymapsInstance;
            }}
            width="100%"
            height="100%"
            modules={["control.ZoomControl", "control.FullscreenControl"]}
          >
            {/* ---------- */}
            <Clusterer
              // className="bg-green-500 text-red-500"
              className={"placemarkCLuster"}
              options={{
                preset: "islands##004773ClusterIcons",
                groupByCoordinates: false,
              }}
            >
              {points.map((data, index) => (
                <Placemark
                  className={"placemarkCLuster"}
                  // className="bg-green-500 text-red-500 p-2 border border-red-500"
                  key={index}
                  geometry={data?.cordinate}
                  options={{
                    iconLayout: "default#image",
                    iconImageHref: markerIcons,
                    iconImageSize: [32, 32],
                  }}
                  modules={["geoObject.addon.balloon"]}
                  properties={{
                    balloonContentHeader: `<div class="balloonContentHeader"><a class="title" href = "#">Пункт выдачи</a><br><span class="description11">${data?.address}</span></div>`,

                    // // Зададим содержимое основной части балуна.
                    balloonContentBody:
                      `<div class="bodyImgs"><img  className="data" src="https://images.wbstatic.net/PickupOffice/Img154040_Photo1.jpg"/><img  className="data" src="https://images.wbstatic.net/PickupOffice/Img154040_Photo1.jpg"/> </div><br/>` +
                      // `<div class="bodySana"><span class='text'>Режим работы:<span>${data?.workTime}</span></span></div><br/>` +
                      // `<div class="bodySana"><span class='text'>Примерочные: <span>${data?.imgs.length} шт</span></span></div><br/>` +

                      `<div class="bodySana">
                          <span class='text'>Режим работы:<span>${data?.workTime}</span></span><br/>
                          <span class='text'>Примерочные: <span>${data?.imgs.length} шт</span></span>
                      </div><br/>` +
                      `<div class="BtnUzGroup"><div class='BtnUz'>Выбрать</div></div>`,

                    balloonContentFooter: `<div class="footerText"><span>Directions:</span> ${data?.direction}</div>`,
                  }}
                />
              ))}
            </Clusterer>
            <div className="relative">
              <div className="absolute cursor-pointer top-[16px] left-[16px] z-50 bg-white shadow-lg overflow-hidden rounded w-[141px] h-[40px] ">
                <div
                  onClick={handleToggleMenu}
                  className="flex items-center justify-center  cursor-pointer w-full h-full "
                >
                  <div className="w-full h-full  select-none cursor-pointer flex items-center justify-around ">
                    <span>
                      {" "}
                      <img src={MenuOpen} alt="" />
                    </span>
                    <span className="not-italic font-AeonikProMedium text-[16px] leading-[120%] text-black tracking-[1%]">
                      Магазины
                    </span>
                  </div>
                </div>{" "}
              </div>
              <div
                className={`${
                  dressInfo?.yandexOpenMenu ? " ml-[0px]" : "  ml-[-1000px]"
                } absolute cursor-pointer top-2 left-2 z-50 h-[100vh] rounded-lg overflow-hidden w-[436px] p-2 duration-500 bg-yandexNavbar backdrop-blur-sm	   border border-searchBgColor`}
              >
                <div
                  onClick={handleToggleMenu}
                  className="w-full h-[42px] flex items-center justify-center  "
                >
                  {" "}
                  <div className="absolute left-2 top-2 w-[40px] h-[40px] rounded-lg bg-white  border border-searchBgColor flex items-center justify-center">
                    <img src={MenuClose} alt="" />
                  </div>
                  <div className="w-fit ">
                    <span className="not-italic font-AeonikProMedium text-xl leading-6 text-center tracking-[1%] text-black">
                      Магазины
                    </span>
                  </div>
                </div>
                <div className="w-full h-12 flex items-center justify-between px-3 rounded-lg bg-white mt-3 border border-searchBgColor">
                  <div className="w-fit pr-3">
                    <img src={shop} alt="" className="w-6 h-6" />
                  </div>
                  <div className="w-[82%] h-full  ">
                    <input
                      className="w-[100%] h-full "
                      type="text"
                      name="search"
                      placeholder="Поиск магазина (имя или район)"
                    />
                  </div>
                  <div className="w-fit border-l pl-3 border-searchBgColor">
                    <button type="button">
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        // className=" fill-Alyuminy "
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.50019 9.11702e-08C6.33057 0.000275652 5.17723 0.274097 4.13231 0.799587C3.0874 1.32508 2.17986 2.08767 1.48222 3.02644C0.78457 3.96521 0.316154 5.05413 0.114389 6.20621C-0.0873753 7.35829 -0.0168949 8.54159 0.320199 9.66157C0.657294 10.7816 1.25166 11.8072 2.05581 12.6565C2.85995 13.5058 3.8516 14.1553 4.9515 14.553C6.05141 14.9508 7.2291 15.0857 8.39048 14.9472C9.55186 14.8086 10.6647 14.4004 11.6402 13.755L15.5862 18.415C15.772 18.6007 15.9926 18.748 16.2353 18.8484C16.4781 18.9488 16.7382 19.0005 17.0009 19.0004C17.2636 19.0003 17.5237 18.9485 17.7664 18.8479C18.009 18.7472 18.2295 18.5998 18.4152 18.414C18.6009 18.2282 18.7481 18.0076 18.8486 17.7649C18.949 17.5221 19.0007 17.262 19.0006 16.9993C19.0005 16.7366 18.9487 16.4765 18.848 16.2338C18.7474 15.9912 18.6 15.7707 18.4142 15.585L13.7552 11.64C14.5034 10.5097 14.9314 9.19773 14.9935 7.84362C15.0556 6.48951 14.7495 5.14389 14.1079 3.94984C13.4662 2.75579 12.513 1.75796 11.3495 1.06246C10.186 0.366956 8.85572 -0.000211234 7.50019 9.11702e-08ZM2.00019 7.5C2.00019 6.04131 2.57965 4.64236 3.6111 3.61091C4.64255 2.57946 6.0415 2 7.50019 2C8.95888 2 10.3578 2.57946 11.3893 3.61091C12.4207 4.64236 13.0002 6.04131 13.0002 7.5C13.0002 8.95869 12.4207 10.3576 11.3893 11.3891C10.3578 12.4205 8.95888 13 7.50019 13C6.0415 13 4.64255 12.4205 3.6111 11.3891C2.57965 10.3576 2.00019 8.95869 2.00019 7.5Z"
                          fill="#4D4D4D"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="w-full h-[80vh] mt-3 py-1 flex flex-col gap-y-2 overflow-auto   YandexListScroll ">
                  {points?.map((data) => {
                    return (
                      <div
                        key={data?.id}
                        className={`w-full ${
                          data?.accordion ? "!h-[426px]" : "!h-[202px]"
                        }  p-4 flex flex-col gap-y-[11px] rounded-lg  bg-white border border-searchBgColor`}
                      >
                        <div className="w-full flex justify-between">
                          <span className="not-italic font-AeonikProMedium text-lg leading-5 text-black tracking-[1%]">
                            Button (Чиланзар)
                          </span>
                          <span className="flex">
                            <span>
                              <img src={star} alt="" />
                            </span>
                            <span className="not-italic ml-[6px] flex font-AeonikProMedium text-lg leading-5 text-black tracking-[1%]">
                              4.8
                            </span>
                          </span>
                        </div>
                        <div className="w-full flex">
                          <span>
                            <img src={ColorLessLocation} alt="" />
                          </span>
                          <span className="w-[70%] not-italic ml-4 font-AeonikProRegular text-base leading-5 text-setTexOpacity">
                            г. Ташкент, Чиланзарский район, квартал-7, д 45б
                            (Катартал)
                          </span>
                        </div>
                        <div className="w-full flex items-center">
                          <span>
                            <img src={ClothesHang} alt="" />
                          </span>
                          <span className="not-italic ml-4 font-AeonikProRegular text-base leading-4 text-black tracking-[1%]">
                            Есть примерочная
                          </span>
                        </div>
                        <div
                          onClick={() => handleAccordion(data.id)}
                          className="w-full flex items-center justify-between"
                        >
                          <div className="flex items-center ">
                            <span>
                              <img src={Clock} alt="" />
                            </span>
                            <span className="not-italic ml-4 font-AeonikProRegular text-base leading-4 text-black tracking-[1%]">
                              10:00 - 20:00, без выходных
                            </span>
                          </div>{" "}
                          <div className="flex items-center justify-end">
                            <span
                              className={`${
                                data?.accordion
                                  ? "rotate-[-180deg]"
                                  : "rotate-0"
                              } duration-300`}
                            >
                              <GrFormDown size={20} />
                            </span>
                          </div>
                        </div>
                        {data?.accordion ? (
                          <div className="h-fit  flex flex-col justify-center w-full">
                            <div className="w-[80%] h-[2px] bg-OpacitySignIn mx-auto  mb-6 mt-4"></div>
                            <div className="flex flex-col gap-y-5">
                              <div className=" flex justify-between items-center">
                                <div className="flex items-center">
                                  <span>
                                    <img src={shirtMaps} alt="" />
                                  </span>
                                  <span className="ml-4 not-italic font-AeonikProMedium text-base leading-4 text-black">
                                    Футболки
                                  </span>
                                </div>
                                <div className="flex justify-end items-center">
                                  <span className="not-italic font-AeonikProMedium text-xl leading-5 text-right text-setTexOpacity">
                                    от
                                    <span className="not-italic font-AeonikProMedium text-xl leading-5 text-right text-black">
                                      {" "}
                                      59 000{" "}
                                    </span>
                                    сум
                                  </span>
                                </div>
                              </div>
                              <div className=" flex justify-between items-center">
                                <div className="flex items-center">
                                  <span>
                                    <img src={shirtMaps} alt="" />
                                  </span>
                                  <span className="ml-4 not-italic font-AeonikProMedium text-base leading-4 text-black">
                                    Футболки
                                  </span>
                                </div>
                                <div className="flex justify-end items-center">
                                  <span className="not-italic font-AeonikProMedium text-xl leading-5 text-right text-setTexOpacity">
                                    от
                                    <span className="not-italic font-AeonikProMedium text-xl leading-5 text-right text-black">
                                      {" "}
                                      59 000{" "}
                                    </span>
                                    сум
                                  </span>
                                </div>
                              </div>
                              <div className=" flex justify-between items-center">
                                <div className="flex items-center">
                                  <span>
                                    <img src={shirtMaps} alt="" />
                                  </span>
                                  <span className="ml-4 not-italic font-AeonikProMedium text-base leading-4 text-black">
                                    Футболки
                                  </span>
                                </div>
                                <div className="flex justify-end items-center">
                                  <span className="not-italic font-AeonikProMedium text-xl leading-5 text-right text-setTexOpacity">
                                    от
                                    <span className="not-italic font-AeonikProMedium text-xl leading-5 text-right text-black">
                                      {" "}
                                      59 000{" "}
                                    </span>
                                    сум
                                  </span>
                                </div>
                              </div>{" "}
                            </div>
                            <div className="w-[80%] h-[2px] bg-OpacitySignIn mx-auto  mt-6"></div>
                            <div className="w-full h-12 mt-3 flex justify-center items-center rounded-lg bg-searchBgColor border border-OpacitySignIn">
                              <span>
                                <img src={shop} alt="" />
                              </span>
                              <span className="ml-3 not-italic font-AeonikProMedium text-base leading-4 text-right text-black">
                                Посетит страницу магазина
                              </span>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* <div className="absolute border border-red-500 bottom-0 w-full border "> */}
            <div
              className="absolute bottom-[24px] left-1/2 right-1/2 translate-x-[-50%] translate-y-[-50%]  overflow-hidden z-50 bg-yandexNavbar backdrop-blur-sm rounded-lg
             h-[48px] w-fit shadow-lg"
            >
              <div className="w-full h-full flex justify-between ">
                <div className="w-[100%] h-full flex gap-x-2 items-center px-3">
                  <div>
                    <img src={locationIcons} alt="" />
                  </div>
                  <div className="h-full flex items-center w-[240px] mx-3">
                    <input
                      type="text"
                      name="search"
                      className="h-full  w-full bg-transparent"
                      placeholder="Поиск мест и адресов"
                    />
                  </div>
                  <button type="button">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      // className=" fill-Alyuminy "
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.50019 9.11702e-08C6.33057 0.000275652 5.17723 0.274097 4.13231 0.799587C3.0874 1.32508 2.17986 2.08767 1.48222 3.02644C0.78457 3.96521 0.316154 5.05413 0.114389 6.20621C-0.0873753 7.35829 -0.0168949 8.54159 0.320199 9.66157C0.657294 10.7816 1.25166 11.8072 2.05581 12.6565C2.85995 13.5058 3.8516 14.1553 4.9515 14.553C6.05141 14.9508 7.2291 15.0857 8.39048 14.9472C9.55186 14.8086 10.6647 14.4004 11.6402 13.755L15.5862 18.415C15.772 18.6007 15.9926 18.748 16.2353 18.8484C16.4781 18.9488 16.7382 19.0005 17.0009 19.0004C17.2636 19.0003 17.5237 18.9485 17.7664 18.8479C18.009 18.7472 18.2295 18.5998 18.4152 18.414C18.6009 18.2282 18.7481 18.0076 18.8486 17.7649C18.949 17.5221 19.0007 17.262 19.0006 16.9993C19.0005 16.7366 18.9487 16.4765 18.848 16.2338C18.7474 15.9912 18.6 15.7707 18.4142 15.585L13.7552 11.64C14.5034 10.5097 14.9314 9.19773 14.9935 7.84362C15.0556 6.48951 14.7495 5.14389 14.1079 3.94984C13.4662 2.75579 12.513 1.75796 11.3495 1.06246C10.186 0.366956 8.85572 -0.000211234 7.50019 9.11702e-08ZM2.00019 7.5C2.00019 6.04131 2.57965 4.64236 3.6111 3.61091C4.64255 2.57946 6.0415 2 7.50019 2C8.95888 2 10.3578 2.57946 11.3893 3.61091C12.4207 4.64236 13.0002 6.04131 13.0002 7.5C13.0002 8.95869 12.4207 10.3576 11.3893 11.3891C10.3578 12.4205 8.95888 13 7.50019 13C6.0415 13 4.64255 12.4205 3.6111 11.3891C2.57965 10.3576 2.00019 8.95869 2.00019 7.5Z"
                        fill="#4D4D4D"
                      />
                    </svg>
                  </button>
                </div>
                {/* <div className="w-[20%] h-full flex items-center border border-red-400"></div> */}
              </div>
            </div>
            {/* </div> */}
            {/* ---------- */}
            <GeolocationControl
              options={{
                float: "right",
                position: { bottom: 250, right: 10 },
              }}
            />
            <ZoomControl
              options={{
                float: "right",
                position: { bottom: 300, right: 10 },
              }}
            />

            {/* <SearchControl
              options={{
                float: "left",
              }}
            /> */}

            {/* <RulerControl options={{ float: "right" }} /> */}
          </Map>
        </YMaps>
      </div>
    </div>
  );
}
// ClusteredMapView.defaultProps = {
//   clusteringEnabled: true,
//   spiralEnabled: true,
//   animationEnabled: true,
//   preserveClusterPressBehavior: false,
//   layoutAnimationConf: LayoutAnimation.Presets.spring,
//   tracksViewChanges: false,
//   // SuperCluster parameters
//   radius: Dimensions.get("window").width * 0.06,
//   maxZoom: 20,
//   minZoom: 1,
//   minPoints: 2,
//   extent: 512,
//   nodeSize: 64,
//   // Map parameters
//   edgePadding: { top: 50, left: 50, right: 50, bottom: 50 },
//   // Cluster styles
//   clusterColor: "#00B386",
//   clusterTextColor: "#FFFFFF",
//   spiderLineColor: "#FF0000",
//   // Callbacks
//   onRegionChangeComplete: () => {},
//   onClusterPress: () => {},
//   onMarkersChange: () => {},
//   superClusterRef: {},
//   mapRef: () => {},
// };
export default React.memo(YandexMapsDressMe);
