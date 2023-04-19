import React, { useContext } from "react";
import {
  next,
  arrowBottomFull,
  star,
  delivery,
  heart,
  addBag,
  cardImg,
} from "../../../assets/imgs";

import Slider from "react-slick";

import { GrFormNext, GrFormPrevious } from "react-icons/gr";

import { dressMainData } from "../../../ContextHook/ContextMenu";
export default function ClothesSlider() {
  const productList = [
    {
      id: 1,
      discount: "-30%",
      video: "video",
      diliver: true,
      buy: true,
      star:
        "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
      ProducImg:
        "https://images.uzum.uz/cfrous7hj8j9g698ann0/t_product_540_high.jpg#1677854670106",
      noProductImg: cardImg,
      title: "Line-Pattern Zipper Sweatshirt (Original Quality)",
      starCount: 256,
      shirtSize: "M | 3XL",
      sale: "45.000",
      price: "70.000",
    },
    {
      id: 2,
      discount: "",
      video: "video",
      diliver: false,
      buy: true,

      star:
        "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
      ProducImg:
        "https://images.uzum.uz/cfvjvm7hj8j9g698q1qg/t_product_540_high.jpg#1677854670118",
      noProductImg: cardImg,
      title: "Line-Pattern Zipper Sweatshirt (Original Quality)",
      starCount: 256,
      shirtSize: "M | 3XL",
      sale: "45.000",
      price: "70.000",
    },
    {
      id: 3,
      discount: "",
      video: "video",
      diliver: true,
      buy: false,
      star:
        "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
      ProducImg:
        "https://images.uzum.uz/cee9lmov1htd23aj6gjg/t_product_540_high.jpg#1677855157929",
      noProductImg: cardImg,
      title: "Line-Pattern Zipper Sweatshirt (Original Quality)",
      starCount: 256,
      shirtSize: "M | 3XL",
      sale: "",
      price: "70.000",
    },
    {
      id: 4,
      discount: "-30%",
      video: "video",
      diliver: true,
      buy: true,
      star:
        "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
      ProducImg:
        "https://images.uzum.uz/cfh16dd40v9uauhi42hg/t_product_540_high.jpg#1677855222081",
      noProductImg: cardImg,
      title: "Line-Pattern Zipper Sweatshirt (Original Quality)",
      starCount: 256,
      shirtSize: "M | 3XL",
      sale: "45.000",
      price: "70.000",
    },
    {
      id: 5,
      discount: "-30%",
      video: "video",
      diliver: false,
      buy: true,
      star:
        "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
      ProducImg:
        "https://images.uzum.uz/cfmebc7hgiopn8lcdoh0/t_product_540_high.jpg#1677855264045",
      noProductImg: cardImg,
      title: "Line-Pattern Zipper Sweatshirt (Original Quality)",
      starCount: 256,
      shirtSize: "M | 3XL",
      sale: "45.000",
      price: "70.000",
    },
    {
      id: 6,
      discount: "",
      video: "",
      diliver: true,
      buy: true,
      star:
        "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
      ProducImg:
        "https://images.uzum.uz/cf557s8l08k0o9qi31gg/t_product_540_high.jpg#1677855329602",
      noProductImg: cardImg,
      title: "Line-Pattern Zipper Sweatshirt (Original Quality)",
      starCount: 256,
      shirtSize: "M | 3XL",
      sale: "45.000",
      price: "70.000",
    },
    {
      id: 7,
      discount: "-30%",
      video: "video",
      diliver: true,
      buy: true,
      star:
        "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
      ProducImg:
        "https://images.uzum.uz/cfmebc7hgiopn8lcdoh0/t_product_540_high.jpg#1677855264045",
      noProductImg: cardImg,
      title: "Line-Pattern Zipper Sweatshirt (Original Quality)",
      starCount: 256,
      shirtSize: "M | 3XL",
      sale: "45.000",
      price: "70.000",
    },
    {
      id: 8,
      discount: "-30%",
      video: "video",
      diliver: false,
      buy: true,
      star:
        "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
      ProducImg:
        "https://images.uzum.uz/cf2h9jqvtie1lhbgt6mg/t_product_540_high.jpg#1677855329588",
      noProductImg: cardImg,
      title: "Line-Pattern Zipper Sweatshirt (Original Quality)",
      starCount: 256,
      shirtSize: "M | 3XL",
      sale: "45.000",
      price: "70.000",
    },
    {
      id: 9,
      discount: "",
      video: "",
      diliver: true,
      buy: true,
      star:
        "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
      ProducImg:
        "https://images.uzum.uz/cf53ng0v1htd23al4sqg/t_product_540_high.jpg#1677855423341",
      noProductImg: cardImg,
      title: "Line-Pattern Zipper Sweatshirt (Original Quality)",
      starCount: 256,
      shirtSize: "M | 3XL",
      sale: "15.000",
      price: "70.000",
    },
    {
      id: 10,
      discount: "-30%",
      video: "video",
      diliver: false,
      buy: true,
      star:
        "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
      ProducImg:
        "https://images.uzum.uz/cf5vfb2vtie1lhbh7h50/t_product_540_high.jpg#1677855423352",
      noProductImg: cardImg,
      title: "Line-Pattern Zipper Sweatshirt (Original Quality)",
      starCount: 256,
      shirtSize: "M | 3XL",
      sale: "45.000",
      price: "70.000",
    },
    {
      id: 11,
      discount: "-30%",
      video: "video",
      diliver: true,
      buy: true,
      star:
        "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
      ProducImg:
        "https://images.uzum.uz/cf53ng0v1htd23al4sqg/t_product_540_high.jpg#1677855423341",
      noProductImg: cardImg,
      title: "Line-Pattern Zipper Sweatshirt (Original Quality)",
      starCount: 256,
      shirtSize: "M | 3XL",
      sale: "",
      price: "75.000",
    },
    {
      id: 12,
      discount: "",
      video: "video",
      diliver: true,
      buy: true,
      star:
        "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
      ProducImg:
        "https://images.uzum.uz/cf8g3tivtie1lhbhf1p0/t_product_540_high.jpg#1677855423420",
      noProductImg: cardImg,
      title: "Line-Pattern Zipper Sweatshirt (Original Quality)",
      starCount: 256,
      shirtSize: "M | 3XL",
      sale: "45.000",
      price: "70.000",
    },
    {
      id: 13,
      discount: "",
      video: "video",
      diliver: true,
      buy: true,
      star:
        "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
      ProducImg:
        "https://images.uzum.uz/cfcdqlavtie1lhbhs490/t_product_540_high.jpg#1677855423521",
      noProductImg: cardImg,
      title: "Line-Pattern Zipper Sweatshirt (Original Quality)",
      starCount: 256,
      shirtSize: "M | 3XL",
      sale: "45.000",
      price: "70.000",
    },
    {
      id: 14,
      discount: "",
      video: "",
      diliver: true,
      buy: true,
      star:
        "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
      ProducImg:
        "https://images.uzum.uz/cfcgam8l08k07f16n0ag/t_product_540_high.jpg#1677855423623",
      noProductImg: cardImg,
      title: "Line-Pattern Zipper Sweatshirt (Original Quality)",
      starCount: 256,
      shirtSize: "M | 3XL",
      sale: "",
      price: "140.000",
    },
    {
      id: 15,
      discount: "",
      video: "",
      diliver: true,
      buy: false,
      star:
        "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
      ProducImg:
        "https://images.uzum.uz/cfcdvh0l08k0o9qiqgcg/t_product_540_high.jpg#1677855423619",
      noProductImg: cardImg,
      title: "Line-Pattern Zipper Sweatshirt (Original Quality)",
      starCount: 256,
      shirtSize: "M | 3XL",
      sale: "",
      price: "70.000",
    },
    {
      id: 16,
      discount: "-40%",
      video: "video",
      diliver: false,
      buy: true,

      star:
        "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e",
      ProducImg:
        "https://images.uzum.uz/cf9ldv0v1htd23aljs7g/t_product_540_high.jpg#1677855423555",
      noProductImg: cardImg,
      title: "Line-Pattern Zipper Sweatshirt (Original Quality)",
      starCount: 256,
      shirtSize: "M | 3XL",
      sale: "35.000",
      price: "70.000",
    },
  ];

  const carosuelData = [
    {
      Category: [
        { id: 1, type: "Student", count: 123, img: "" },
        { id: 2, type: "Businiess", count: 223, img: "" },
        { id: 3, type: "Muslim", count: 80, img: "" },
        { id: 4, type: "Travel", count: 453, img: "" },
        { id: 5, type: "Sport", count: 320, img: "" },
        { id: 6, type: "Classic", count: 40, img: "" },
        { id: 7, type: "Relaxed", count: 180, img: "" },
        { id: 8, type: "Dramatic", count: 250, img: "" },
        { id: 9, type: "Creative", count: 190, img: "" },
        { id: 10, type: "Rebellious", count: 310, img: "" },
        { id: 11, type: "Feminine", count: 479, img: "" },
      ],

      campany: [
        { id: 1, type: "All", name: "All" },
        { id: 2, type: "icons", name: "Cotegory 1" },
        { id: 3, type: "icons", name: "Cotegory2" },
        { id: 4, type: "icons", name: "Cotegory3" },
        { id: 5, type: "icons", name: "Cotegory4" },
        { id: 6, type: "icons", name: "Cotegory5" },
        { id: 7, type: "icons", name: "Cotegory6" },
        { id: 8, type: "icons", name: "Cotegory7" },
        { id: 9, type: "icons", name: "Cotegory8" },
        { id: 10, type: "icons", name: "Cotegory9" },
        { id: 11, type: "icons", name: "Cotegory10" },
        { id: 12, type: "icons", name: "Cotegory11" },
        { id: 13, type: "icons", name: "Cotegory12" },
        { id: 14, type: "icons", name: "Cotegory13" },
        { id: 15, type: "icons", name: "Cotegory14" },
      ],
    },
  ];

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute text-center cursor-pointer no-underline opacity-50 w-10 h-10 flex items-center justify-center top-[25%] z-10	right-[10px] rounded-full bg-bgColor duration-200 border border-solid border-borderColorCard		`}
        onClick={onClick}
      >
        <button className="next">
          <GrFormNext size={20} />
        </button>
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute text-center cursor-pointer no-underline opacity-50 w-10 h-10 flex items-center justify-center top-[25%] z-10	left-[10px] rounded-full bg-bgColor duration-200 border border-solid border-borderColorCard`}
        onClick={onClick}
      >
        <button className="prev">
          <GrFormPrevious size={20} />
        </button>
      </div>
    );
  };

  const NextArrow2 = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute text-center cursor-pointer no-underline opacity-50 w-10 h-10 flex items-center justify-center top-[40%] z-10	right-[18px] rounded-full bg-bgColor duration-200 border border-solid border-borderColorCard		`}
        onClick={onClick}
      >
        <button className="next">
          <GrFormNext size={20} />
        </button>
      </div>
    );
  };

  const PrevArrow2 = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute text-center cursor-pointer no-underline opacity-50 w-10 h-10 flex items-center justify-center top-[40%] z-10	left-[18px] rounded-full bg-bgColor duration-200 border border-solid border-borderColorCard`}
        onClick={onClick}
      >
        <button className="prev">
          <GrFormPrevious size={20} />
        </button>
      </div>
    );
  };

  let settings1 = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: true,
    speed: 500,
    dots: false,
    slidesToShow: 8,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  let settings = {
    nextArrow: <NextArrow2 />,
    prevArrow: <PrevArrow2 />,
    infinite: true,
    speed: 500,
    dots: false,

    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [dressInfo] = useContext(dressMainData);
  let shadowStyle = "";
  let genderStyle = "";
  if (dressInfo?.type === 1111) {
    shadowStyle = " hover:shadow-green-300/100 ";
    genderStyle =
      "hover:text-borderSpring hover:bg-bgSpring hover:border-borderSpring hover:text-borderSpring";
  }
  if (dressInfo?.type === 2222) {
    shadowStyle = "hover:shadow-amber-200/100 ";
    genderStyle =
      "hover:text-borderSummer hover:bg-bgSummer hover:border-borderSummer hover:text-borderSummer";
  }
  if (dressInfo?.type === 3333) {
    shadowStyle = "hover:shadow-orange-200/100";
    genderStyle =
      "hover:text-borderAutumm hover:bg-bgAutumm hover:border-borderAutumm hover:text-borderAutumm";
  }
  if (dressInfo?.type === 4444) {
    shadowStyle = "hover:shadow-sky-200/100";
    genderStyle =
      "hover:text-borderWinter hover:bg-bgWinter hover:border-borderWinter hover:text-borderWinter";
  }

  return (
    <div className="flex flex-col  box-border mt-[64px] ss:hidden xs:block">
      <div className="w-full h-fit">
        <div className=" flex ss:flex-col xs:flex-row xs:justify-between ss:justify-center items-center h-fit ">
          <div className="flex items-center ss:justify-center md:justify-start ss:w-full xs:w-[48%] md:w-fit border ss:border-solid  md:border-none ss:border-borderColorCard ss:h-[44px] rounded-lg ">
            <p className="flex items-center cursor-pointer select-none">
              <span className="not-italic font-AeonikProRegular xs:text-base md:text-base ss:text-base leading-7 text-black">
                Deals under:
              </span>
              <span className="flex items-center not-italic font-AeonikProMedium text-xl leading-6 text-black ml-3 mr-2">
                100$
                <img className="mt-[1px] " src={arrowBottomFull} alt="next" />
              </span>{" "}
            </p>
          </div>
          <div className="flex items-center ss:justify-center md:justify-end ss:w-full xs:w-[48%]  md:w-fit ss:mt-4 xs:mt-0 border ss:border-solid  md:border-none ss:border-borderColorCard ss:h-[44px] rounded-lg">
            <p className="flex items-center cursor-pointer select-none">
              <span className="not-italic font-AeonikProMedium mr-2 md:text-base ss:text-base xs:text-sm leading-4 text-right text-black">
                Stores closest to you
              </span>
              <span>
                <img src={next} alt="next" />
              </span>{" "}
            </p>
          </div>
        </div>
        <div className="w-full h-fit mt-12  ">
          <Slider
            {...settings1}
            className="w-[100%] flex xs:justify-between xs:pl-0"
          >
            {carosuelData?.map((data) => {
              return data.campany.map((data) => {
                return (
                  <div key={data.id} className="!w-[97.5%]  h-full">
                    <div
                      className={`${genderStyle} w-full h-[110px]  m-auto ss:py-5  ls:p-0 bg-gray-100 rounded-lg flex justify-center items-center cursor-pointer  border border-searchBgColor  `}
                    >
                      <p className="not-italic font-AeonikProMedium text-xs leading-4 text-center text-black">
                        {data?.type || "0"}
                      </p>
                    </div>
                    <div>
                      <p className="not-italic font-AeonikProMedium ss:text-sm xs:text-xs leading-4 text-center ls:mt-5 ss:mt-2 text-black ">
                        {data?.name || "type"}
                      </p>
                    </div>
                  </div>
                );
              });
            })}
          </Slider>
        </div>
      </div>

      <div className="w-full h-fit flex flex-col border-t	 border-searchBgColor mt-12 ">
        <div className="w-full flex items-center py-4">
          <Slider
            {...settings}
            className="w-[100%] flex xs:justify-between px-3"
          >
            {productList.map((data) => {
              return (
                <div
                  key={data.id}
                  className={`!w-[100%] ss:m-0 md:my-8 cursor-pointer transition ease-in-out delay-150 hover:shadow-cardShadow ${shadowStyle} ss:h-[320px] xs:h-[456px] lg:h-[440px] border border-solid borderColorCard overflow-hidden rounded-lg`}
                >
                  <div className="relative w-full  h-[206px] ls:h-[220px] ll:h-[234px] xs:h-[309px] lg:h-[320px] bg-white flex flex-wrap content-between items-center overflow-hidden border-b border-solid	border-borderColorCard">
                    {data.ProducImg ? (
                      <img
                        className="w-full h-full m-auto  hover:scale-105 transition duration-700 ease-in-out"
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
                    <div className="w-full flex justify-between absolute top-px p-[5px]">
                      <div className="group w-8 hover:w-[85px] bg-bgCard hover:bg-white  duration-300 rounded-lg overflow-hidden border border-borderColorCard flex items-center justify-center">
                        <span className="w-8 h-8 flex items-center justify-center  ">
                          <img src={delivery} alt="" />
                        </span>
                        <span className=" w-0 flex items-center mt-1 group-hover:w-[40px] duration-300 not-italic  font-AeonikProRegular text-[11px]">
                          Delivery
                        </span>
                      </div>
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center border border-solid bg-bgCard border-borderColorCard hover:bg-white transition ease-out duration-500">
                        <img src={heart} alt="" />
                      </div>
                    </div>

                    <div className="absolute w-full flex justify-between items-center px-1 bottom-[-0.2px] border-b border-searchBgColor xs:h-[38px] lg:h-8 ss:h-[30px] xs:px-2 md:px-4 bg-white hover:backdrop-brightness-125 hover:bg-white/60 transition ease-out duration-500">
                      <label
                        className="rounded-full w-5 h-5 md:w-6 md:h-6 bg-purple-500 cursor-pointer  border	 border-solid	border-borderColorCard"
                        htmlFor="Color1"
                      >
                        <input
                          className="hidden"
                          type="radio"
                          id="Color1"
                          name="colors"
                          value="1"
                        />
                      </label>
                      <label
                        className="rounded-full w-5 h-5 md:w-6 md:h-6 bg-black cursor-pointer  border	 border-solid	border-borderColorCard"
                        htmlFor="Color2"
                      >
                        <input
                          className="hidden"
                          type="radio"
                          id="Color2"
                          name="colors"
                          value="1"
                        />
                      </label>
                      <label
                        className="rounded-full w-5 h-5 md:w-6 md:h-6 bg-white cursor-pointer  border	 border-solid	border-borderColorCard"
                        htmlFor="Color3"
                      >
                        <input
                          className="hidden"
                          type="radio"
                          id="Color3"
                          name="colors"
                          value="1"
                        />
                      </label>
                      <label
                        className="rounded-full w-5 h-5 md:w-6 md:h-6 bg-zinc-500 cursor-pointer  border	 border-solid	border-borderColorCard"
                        htmlFor="Color4"
                      >
                        <input
                          className="hidden"
                          type="radio"
                          id="Color4"
                          name="colors"
                          value="1"
                        />
                      </label>
                      <label
                        className="rounded-full w-5 h-5 md:w-6 md:h-6 bg-sky-600 cursor-pointer  border	 border-solid	border-borderColorCard"
                        htmlFor="Color5"
                      >
                        <input
                          className="hidden"
                          type="radio"
                          id="Color5"
                          name="colors"
                          value="1"
                        />
                      </label>
                      <label
                        className="rounded-full w-5 h-5 md:w-6 md:h-6 bg-amber-400 cursor-pointer  border	 border-solid	border-borderColorCard"
                        htmlFor="Color6"
                      >
                        <input
                          className="hidden"
                          type="radio"
                          id="Color6"
                          name="colors"
                          value="1"
                        />
                      </label>
                    </div>
                  </div>

                  <div className="w-full rounded-b-1xl bg-white   flex flex-wrap   h-[120px] xs:h-[147px] lg:h-[120px]   ">
                    <div className="w-full   xs:px-3 ss:px-3 xs:mt-3 ss:mt-2">
                      <div className="w-full  not-italic font-AeonikProRegular text-[10px] ls:text-xs lg:text-[14px] leading-4 text-black mb-3 md:mb-0  cursor-pointer">
                        {data?.title || "NoData"}
                      </div>
                      <div className="w-full flex justify-between items-center xs:mt-3 ">
                        <div className="flex items-center justify-between">
                          <span className="flex items-center w-[14px] h-[14px] ">
                            <img
                              className="w-full h-full mt-[-4px]"
                              src={star}
                              alt=""
                            />
                          </span>
                          <span className="not-italic flex items-center  font-AeonikProRegular mt-[2px] text-[10px] ls:text-xs leading-4 text-right text-gray-500 ml-[2px] md:ml-1 ">
                            <span className="flex items-center font-AeonikProMedium text-[10px] ls:text-xs not-italic mx-1 text-black md:mr-[6px] md:text-[13px]">
                              5.0{" "}
                            </span>
                            ({data?.starCount || 0}{" "}
                            <span className="flex items-center ss:hidden lg:block md:ml-1 md:text-[11px] font-AeonikProRegular">
                              голосов
                            </span>
                            )
                          </span>
                        </div>
                        <div className="not-italic xs:font-AeonikProRegular ss:font-AeonikProRegular leading-4 text-black text-[11px] sm:text-xs  md:text-[13px] ">
                          <b>
                            <span>{data?.shirtSize || 0}</span>
                          </b>
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex items-center justify-between mt-1 pl-3 pr-[5px]">
                      <div
                        className="not-italic font-AeonikProMedium text-base leading-4  "
                        style={{ color: "black" }}
                      >
                        {data?.price}{" "}
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
          </Slider>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
