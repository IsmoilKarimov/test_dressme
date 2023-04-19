import React, { useState } from "react";
import Slider from "react-slick";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { addBag, adidas, arrowLeftCircle, arrowRightCircle, checkFalse, checkTrue, Liked, model1, model2, modelToSet, nextInfo, setHuman, setpersonIcons, star, statusFalse} from "../../../assets/imgs";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button, Modal } from "antd";

import modelImg1 from '../../../assets/imgs/Models/model1.svg';
import modelImg2 from '../../../assets/imgs/Models/model2.svg';
import modelImg3 from '../../../assets/imgs/Models/model3.svg';
import modelImg4 from '../../../assets/imgs/Models/model4.svg';

export default function SetClothesWear() {
  const [productList, setProductList] = useState([
    {
      id: 1,
      SetToModel: true,
      category_name: "Business",
      category: [
        { id: 1, name: "Business Wear (Man)", market: "Patek Business Wear" },
      ],
      headWear: [
        {
          id: 1,
          product_id: 1,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "50000",
          currensy: "UZB",
          active: true,
          head_wear_img:
            "https://images.uzum.uz/cf0llhivtie1lhbgpdq0/t_product_540_high.jpg#1679979817097",
        },
        {
          id: 2,
          product_id: 2,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "10000",
          currensy: "UZB",
          active: true,
          head_wear_img:
            "https://images.uzum.uz/cftf79vhj8j9g698gbbg/t_product_540_high.jpg#1679979817050",
        },
        {
          id: 3,
          product_id: 3,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "25000",
          currensy: "UZB",
          active: false,
          head_wear_img:
            "https://images.uzum.uz/cft1g4vhgiov1qid0vmg/t_product_540_high.jpg#1679979817063",
        },
        {
          id: 4,
          product_id: 4,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "30000",
          currensy: "UZB",
          active: true,
          head_wear_img:
            "https://images.uzum.uz/cfodt77hgiov1qiced4g/t_product_540_high.jpg#1679979817205",
        },
        {
          id: 5,
          product_id: 5,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "45000",
          currensy: "UZB",
          active: true,
          head_wear_img:
            "https://images.uzum.uz/cfof77nhgiov1qicem8g/t_product_540_high.jpg#1679979817243",
        },
        {
          id: 6,
          product_id: 6,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "5000",
          currensy: "UZB",
          active: false,
          head_wear_img:
            "https://images.uzum.uz/cggr0vfg49devoabrpcg/original.jpg",
        },
        {
          id: 7,
          product_id: 7,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "70000",
          currensy: "UZB",
          active: true,
          head_wear_img:
            "https://images.uzum.uz/cggr0ong49devoabrpb0/original.jpg",
        },
        {
          id: 8,
          product_id: 8,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "100000",
          currensy: "UZB",
          active: false,
          head_wear_img:
            "https://images.uzum.uz/cfrot37hj8j9g698anjg/t_product_540_high.jpg#1679979896400",
        },
        {
          id: 9,
          product_id: 9,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "170000",
          currensy: "UZB",
          active: true,
          head_wear_img:
            "https://images.uzum.uz/cfs5nmvhgiov1qict4a0/t_product_540_high.jpg#1679979896386",
        },
        {
          id: 10,
          product_id: 10,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "15000",
          currensy: "UZB",
          active: false,
          head_wear_img:
            "https://images.uzum.uz/cgct0dvhgiov1qif5450/t_product_540_high.jpg#1679979896266",
        },
        {
          id: 11,
          product_id: 11,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "60000",
          currensy: "UZB",
          active: false,
          head_wear_img:
            "https://images.uzum.uz/cfs5nr7g49devoa91atg/t_product_540_high.jpg#1679979896338",
        },
      ],
      outWear: [
        {
          id: 1,
          product_id: 1,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "50000",
          currensy: "UZB",
          active: true,
          out_wear_img: "https://footbolka.ru/images/polo01.jpg",
        },
        {
          id: 2,
          product_id: 2,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "10000",
          currensy: "UZB",
          active: true,
          out_wear_img: "https://footbolka.ru/images/reebakpolocher.jpg",
        },
        {
          id: 3,
          product_id: 3,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "25000",
          currensy: "UZB",
          active: false,
          out_wear_img: "https://footbolka.ru/images/manevry.jpg",
        },
        {
          id: 4,
          product_id: 4,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "30000",
          currensy: "UZB",
          active: true,
          out_wear_img: "https://footbolka.ru/images/maskahockey.jpg",
        },
        {
          id: 5,
          product_id: 5,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "45000",
          currensy: "UZB",
          active: true,
          out_wear_img:
            "https://footbolka.ru/images/bg/drinkingfortwocolorbg.jpg",
        },
        {
          id: 6,
          product_id: 6,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "5000",
          currensy: "UZB",
          active: false,
          out_wear_img:
            "https://footbolka.ru/data/products/mens/luchdhiyrabotnikvsehvremen.jpg",
        },
        {
          id: 7,
          product_id: 7,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "70000",
          currensy: "UZB",
          active: true,
          out_wear_img:
            "https://footbolka.ru/data/products/womens/dobrayamamazaykang.jpg",
        },
        {
          id: 8,
          product_id: 8,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "100000",
          currensy: "UZB",
          active: true,
          out_wear_img:
            "https://footbolka.ru/data/products/womens/zaykamamulya22.jpg",
        },
        {
          id: 9,
          product_id: 9,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "170000",
          currensy: "UZB",
          active: false,
          out_wear_img:
            "https://footbolka.ru/data/products/paired/paarlelstich23.jpg",
        },
        {
          id: 10,
          product_id: 10,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "15000",
          currensy: "UZB",
          active: true,
          out_wear_img:
            "https://footbolka.ru/images/otlichnodopolnyaemdrugdruga.jpg",
        },
        {
          id: 11,
          product_id: 11,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "60000",
          currensy: "UZB",
          active: false,
          out_wear_img:
            "https://footbolka.ru/data/products/paired/muzskoeslovozakon.jpg",
        },
      ],
      underWear: [
        {
          id: 1,
          product_id: 1,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "50000",
          currensy: "UZB",
          active: true,
          under_wear_img:
            "https://media2.bulavka.uz/0cezA4z29ZiKE7ZCX1qxouIj2bU=/fit-in/220x260/products/pRvsHFqkNU/input.jpeg",
        },
        {
          id: 2,
          product_id: 2,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "10000",
          currensy: "UZB",
          active: true,
          under_wear_img:
            "https://media2.bulavka.uz/-qpTOv7NnOJRTTk1YqnpVd5gfgM=/fit-in/220x260/products/wwiUrjgBxk/input.jpeg",
        },
        {
          id: 3,
          product_id: 3,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "25000",
          currensy: "UZB",
          active: false,
          under_wear_img:
            "https://media2.bulavka.uz/ZAa8A6kujnBJwPyHXzSEcXCLx98=/fit-in/220x260/products/pIXPtM9tgh/input.jpeg",
        },
        {
          id: 4,
          product_id: 4,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "30000",
          currensy: "UZB",
          active: true,
          under_wear_img:
            "https://media2.bulavka.uz/71_EEfnARwQIgW3K8dSD9ybppSc=/fit-in/220x260/products/41R5CkQzZ7/input.jpeg",
        },
        {
          id: 5,
          product_id: 5,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "45000",
          currensy: "UZB",
          active: true,
          under_wear_img:
            "https://media2.bulavka.uz/KovnEKgqv3WEbgB43d3Dc-alSvU=/fit-in/220x260/products/vKQ4o04dvh/input.jpeg",
        },
        {
          id: 6,
          product_id: 6,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "5000",
          currensy: "UZB",
          active: false,
          under_wear_img:
            "https://media2.bulavka.uz/IDeEQQUpyYkcwn_T1C6ueaSUg4M=/fit-in/220x260/products/BLmmUeomNx/input.jpeg",
        },
        {
          id: 7,
          product_id: 7,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "70000",
          currensy: "UZB",
          active: true,
          under_wear_img:
            "https://media2.bulavka.uz/QU3fgFkNQ5cPdZ-m-pCAqnTJ_p8=/fit-in/220x260/products/NwPLo2vh8Q/input.jpeg",
        },
        {
          id: 8,
          product_id: 8,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "100000",
          currensy: "UZB",
          active: true,
          under_wear_img:
            "https://media2.bulavka.uz/uAzXwiQ3Ao6UEaf48hdyBXz3chY=/fit-in/220x260/products/siNjbqW6pC/input.jpeg",
        },
        {
          id: 9,
          product_id: 9,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "170000",
          currensy: "UZB",
          active: true,
          under_wear_img:
            "https://media2.bulavka.uz/BHUw5s95Guw9PHJ7vAZ-LN2xvQU=/fit-in/220x260/products/fIZSH1miVV/input.jpeg",
        },
        {
          id: 10,
          product_id: 10,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "15000",
          currensy: "UZB",
          active: false,
          under_wear_img:
            "https://media2.bulavka.uz/oatbQUK_ZbR_O-gyuK2UbiAvy7c=/fit-in/220x260/products/95MmbDorcl/input.jpeg",
        },
        {
          id: 11,
          product_id: 11,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "60000",
          currensy: "UZB",
          active: true,
          under_wear_img:
            "https://media2.bulavka.uz/n2ONxTq1dRKI5iVe251tM93ujAk=/fit-in/220x260/products/87NlIBsImK/input.jpeg",
        },
      ],
      legWear: [
        {
          id: 1,
          product_id: 1,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "50000",
          currensy: "UZB",
          active: true,
          leg_wear_img:
            "https://media2.bulavka.uz/1McaHjgNe3-t8IC1AKKYjqygy9I=/fit-in/220x260/products/EewQZSMtek/input.jpeg",
        },
        {
          id: 2,
          product_id: 2,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "10000",
          currensy: "UZB",
          active: true,
          leg_wear_img:
            "https://media2.bulavka.uz/95WLiuSkfGPO7Ud-EntV3rBlND0=/fit-in/220x260/products/ziGKjMSsT1/input.jpeg",
        },
        {
          id: 3,
          product_id: 3,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "25000",
          currensy: "UZB",
          active: true,
          leg_wear_img:
            "https://media2.bulavka.uz/1iux1_FWBL_iWPQ0RO2QNfa7peg=/fit-in/220x260/products/VQbnAHvknA/input.jpeg",
        },
        {
          id: 4,
          product_id: 4,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "30000",
          currensy: "UZB",
          active: false,
          leg_wear_img:
            "https://media2.bulavka.uz/RFew38-74XBt1cCgnQcKPF04bYA=/fit-in/220x260/products/IiEcGXZ8Wi/input.jpeg",
        },
        {
          id: 5,
          product_id: 5,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "45000",
          currensy: "UZB",
          active: true,
          leg_wear_img:
            "https://media2.bulavka.uz/zBVb53A_wjeBdZCcZrHOmuavYNg=/fit-in/220x260/products/IjwTXr69jd/input.jpeg",
        },
        {
          id: 6,
          product_id: 6,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "5000",
          currensy: "UZB",
          active: true,
          leg_wear_img:
            "https://media2.bulavka.uz/dR-bahFmY_MNyHYSWa5XDWRipmc=/fit-in/220x260/products/npGPJc5LTt/input.jpeg",
        },
        {
          id: 7,
          product_id: 7,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "70000",
          currensy: "UZB",
          active: true,
          leg_wear_img:
            "https://media2.bulavka.uz/RNdFDFUAITY-jqJL-r5NAblm6ZQ=/fit-in/220x260/products/3dru0BRvr2/input.jpeg",
        },
        {
          id: 8,
          product_id: 8,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "100000",
          currensy: "UZB",
          active: true,
          leg_wear_img:
            "https://media2.bulavka.uz/RNdFDFUAITY-jqJL-r5NAblm6ZQ=/fit-in/220x260/products/3dru0BRvr2/input.jpeg",
        },
        {
          id: 9,
          product_id: 9,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "170000",
          currensy: "UZB",
          active: false,
          leg_wear_img:
            "https://media2.bulavka.uz/RNdFDFUAITY-jqJL-r5NAblm6ZQ=/fit-in/220x260/products/3dru0BRvr2/input.jpeg",
        },
        {
          id: 10,
          product_id: 10,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "15000",
          currensy: "UZB",
          active: true,
          leg_wear_img:
            "https://media2.bulavka.uz/RNdFDFUAITY-jqJL-r5NAblm6ZQ=/fit-in/220x260/products/3dru0BRvr2/input.jpeg",
        },
        {
          id: 11,
          product_id: 11,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "60000",
          currensy: "UZB",
          active: true,
          leg_wear_img:
            "https://media2.bulavka.uz/RNdFDFUAITY-jqJL-r5NAblm6ZQ=/fit-in/220x260/products/3dru0BRvr2/input.jpeg",
        },
      ],
      Accessory: [
        {
          id: 1,
          product_id: 1,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "50000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://images.uzum.uz/cg2rk7vhj8j9g6996uug/t_product_540_high.jpg#1679984645572",
        },
        {
          id: 2,
          product_id: 2,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "10000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://images.uzum.uz/cfkc7j925kualhm8do3g/t_product_540_high.jpg#1679984645565",
        },
        {
          id: 3,
          product_id: 3,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "25000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://images.uzum.uz/cfgekqkvutv7dbm9495g/t_product_540_high.jpg#1679984817021",
        },
        {
          id: 4,
          product_id: 4,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "30000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://images.uzum.uz/cfouijfg49devoa8jq7g/t_product_540_high.jpg#1679984817028",
        },
        {
          id: 5,
          product_id: 5,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "45000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://images.uzum.uz/cfkeofvhgiopn8lc6jm0/t_product_540_high.jpg#1679984817201",
        },
        {
          id: 6,
          product_id: 6,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "5000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://images.uzum.uz/cg5k8onhj8j9g699iqc0/t_product_540_high.jpg#1679984817328",
        },
        {
          id: 7,
          product_id: 7,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "70000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://images.uzum.uz/cfro5rvhgiov1qics48g/t_product_540_high.jpg#1679984867685",
        },
        {
          id: 8,
          product_id: 8,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "100000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://images.uzum.uz/cfigp2h25kualhm87jcg/t_product_540_high.jpg#1679984867714",
        },
        {
          id: 9,
          product_id: 9,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "170000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://images.uzum.uz/cf19e8gv1htd23akr5a0/t_product_540_high.jpg#1679984867772",
        },
        {
          id: 10,
          product_id: 10,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "15000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://images.uzum.uz/cgcqktvg49devoab8of0/t_product_540_high.jpg#1679984868477",
        },
        {
          id: 11,
          product_id: 11,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "60000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://images.uzum.uz/cgfhtfnhj8j9g69avkag/t_product_540_high.jpg#1679984914878",
        },
      ],
      modelsList: [
        { id: 1, modelImg: modelImg1, text:"hello world" },
        { id: 2, modelImg: modelImg2, text:"hello world" },
        { id: 3, modelImg: modelImg3, text:"hello world" },
        { id: 4, modelImg: modelImg4, text:"hello world" },
      ],
    },
    {
      id: 2,
      category_name: "Muslim",
      category: [
        { id: 1, name: "Business Wear (Man)", market: "Patek Business Wear" },
      ],
      headWear: [
        {
          id: 1,
          product_id: 1,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "50000",
          currensy: "UZB",
          active: true,
          head_wear_img:
            "https://images.uzum.uz/cf0llhivtie1lhbgpdq0/t_product_540_high.jpg#1679979817097",
        },
        {
          id: 2,
          product_id: 2,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "10000",
          currensy: "UZB",
          active: true,
          head_wear_img:
            "https://images.uzum.uz/cftf79vhj8j9g698gbbg/t_product_540_high.jpg#1679979817050",
        },
        {
          id: 3,
          product_id: 3,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "25000",
          currensy: "UZB",
          active: true,
          head_wear_img:
            "https://images.uzum.uz/cft1g4vhgiov1qid0vmg/t_product_540_high.jpg#1679979817063",
        },
        {
          id: 4,
          product_id: 4,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "30000",
          currensy: "UZB",
          active: true,
          head_wear_img:
            "https://images.uzum.uz/cfodt77hgiov1qiced4g/t_product_540_high.jpg#1679979817205",
        },
        {
          id: 5,
          product_id: 5,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "45000",
          currensy: "UZB",
          active: true,
          head_wear_img:
            "https://images.uzum.uz/cfof77nhgiov1qicem8g/t_product_540_high.jpg#1679979817243",
        },
        {
          id: 6,
          product_id: 6,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "5000",
          currensy: "UZB",
          active: true,
          head_wear_img:
            "https://images.uzum.uz/cggr0vfg49devoabrpcg/original.jpg",
        },
        {
          id: 7,
          product_id: 7,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "70000",
          currensy: "UZB",
          active: true,
          head_wear_img:
            "https://images.uzum.uz/cggr0ong49devoabrpb0/original.jpg",
        },
        {
          id: 8,
          product_id: 8,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "100000",
          currensy: "UZB",
          active: true,
          head_wear_img:
            "https://images.uzum.uz/cfrot37hj8j9g698anjg/t_product_540_high.jpg#1679979896400",
        },
        {
          id: 9,
          product_id: 9,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "170000",
          currensy: "UZB",
          active: true,
          head_wear_img:
            "https://images.uzum.uz/cfs5nmvhgiov1qict4a0/t_product_540_high.jpg#1679979896386",
        },
        {
          id: 10,
          product_id: 10,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "15000",
          currensy: "UZB",
          active: true,
          head_wear_img:
            "https://images.uzum.uz/cgct0dvhgiov1qif5450/t_product_540_high.jpg#1679979896266",
        },
        {
          id: 11,
          product_id: 11,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "60000",
          currensy: "UZB",
          active: true,
          head_wear_img:
            "https://images.uzum.uz/cfs5nr7g49devoa91atg/t_product_540_high.jpg#1679979896338",
        },
      ],
      outWear: [
        {
          id: 1,
          product_id: 1,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "50000",
          currensy: "UZB",
          active: true,
          out_wear_img: "https://footbolka.ru/images/polo01.jpg",
        },
        {
          id: 2,
          product_id: 2,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "10000",
          currensy: "UZB",
          active: true,
          out_wear_img: "https://footbolka.ru/images/reebakpolocher.jpg",
        },
        {
          id: 3,
          product_id: 3,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "25000",
          currensy: "UZB",
          active: true,
          out_wear_img: "https://footbolka.ru/images/manevry.jpg",
        },
        {
          id: 4,
          product_id: 4,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "30000",
          currensy: "UZB",
          active: true,
          out_wear_img: "https://footbolka.ru/images/maskahockey.jpg",
        },
        {
          id: 5,
          product_id: 5,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "45000",
          currensy: "UZB",
          active: true,
          out_wear_img:
            "https://footbolka.ru/images/bg/drinkingfortwocolorbg.jpg",
        },
        {
          id: 6,
          product_id: 6,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "5000",
          currensy: "UZB",
          active: true,
          out_wear_img:
            "https://footbolka.ru/data/products/mens/luchdhiyrabotnikvsehvremen.jpg",
        },
        {
          id: 7,
          product_id: 7,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "70000",
          currensy: "UZB",
          active: true,
          out_wear_img:
            "https://footbolka.ru/data/products/womens/dobrayamamazaykang.jpg",
        },
        {
          id: 8,
          product_id: 8,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "100000",
          currensy: "UZB",
          active: true,
          out_wear_img:
            "https://footbolka.ru/data/products/womens/zaykamamulya22.jpg",
        },
        {
          id: 9,
          product_id: 9,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "170000",
          currensy: "UZB",
          active: true,
          out_wear_img:
            "https://footbolka.ru/data/products/paired/paarlelstich23.jpg",
        },
        {
          id: 10,
          product_id: 10,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "15000",
          currensy: "UZB",
          active: true,
          out_wear_img:
            "https://footbolka.ru/images/otlichnodopolnyaemdrugdruga.jpg",
        },
        {
          id: 11,
          product_id: 11,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "60000",
          currensy: "UZB",
          active: true,
          out_wear_img:
            "https://footbolka.ru/data/products/paired/muzskoeslovozakon.jpg",
        },
      ],
      underWear: [
        {
          id: 1,
          product_id: 1,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "50000",
          currensy: "UZB",
          active: true,
          under_wear_img:
            "https://media2.bulavka.uz/0cezA4z29ZiKE7ZCX1qxouIj2bU=/fit-in/220x260/products/pRvsHFqkNU/input.jpeg",
        },
        {
          id: 2,
          product_id: 2,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "10000",
          currensy: "UZB",
          active: true,
          under_wear_img:
            "https://media2.bulavka.uz/-qpTOv7NnOJRTTk1YqnpVd5gfgM=/fit-in/220x260/products/wwiUrjgBxk/input.jpeg",
        },
        {
          id: 3,
          product_id: 3,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "25000",
          currensy: "UZB",
          active: true,
          under_wear_img:
            "https://media2.bulavka.uz/ZAa8A6kujnBJwPyHXzSEcXCLx98=/fit-in/220x260/products/pIXPtM9tgh/input.jpeg",
        },
        {
          id: 4,
          product_id: 4,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "30000",
          currensy: "UZB",
          active: true,
          under_wear_img:
            "https://media2.bulavka.uz/71_EEfnARwQIgW3K8dSD9ybppSc=/fit-in/220x260/products/41R5CkQzZ7/input.jpeg",
        },
        {
          id: 5,
          product_id: 5,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "45000",
          currensy: "UZB",
          active: true,
          under_wear_img:
            "https://media2.bulavka.uz/KovnEKgqv3WEbgB43d3Dc-alSvU=/fit-in/220x260/products/vKQ4o04dvh/input.jpeg",
        },
        {
          id: 6,
          product_id: 6,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "5000",
          currensy: "UZB",
          active: true,
          under_wear_img:
            "https://media2.bulavka.uz/IDeEQQUpyYkcwn_T1C6ueaSUg4M=/fit-in/220x260/products/BLmmUeomNx/input.jpeg",
        },
        {
          id: 7,
          product_id: 7,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "70000",
          currensy: "UZB",
          active: true,
          under_wear_img:
            "https://media2.bulavka.uz/QU3fgFkNQ5cPdZ-m-pCAqnTJ_p8=/fit-in/220x260/products/NwPLo2vh8Q/input.jpeg",
        },
        {
          id: 8,
          product_id: 8,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "100000",
          currensy: "UZB",
          active: true,
          under_wear_img:
            "https://media2.bulavka.uz/uAzXwiQ3Ao6UEaf48hdyBXz3chY=/fit-in/220x260/products/siNjbqW6pC/input.jpeg",
        },
        {
          id: 9,
          product_id: 9,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "170000",
          currensy: "UZB",
          active: true,
          under_wear_img:
            "https://media2.bulavka.uz/BHUw5s95Guw9PHJ7vAZ-LN2xvQU=/fit-in/220x260/products/fIZSH1miVV/input.jpeg",
        },
        {
          id: 10,
          product_id: 10,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "15000",
          currensy: "UZB",
          active: true,
          under_wear_img:
            "https://media2.bulavka.uz/oatbQUK_ZbR_O-gyuK2UbiAvy7c=/fit-in/220x260/products/95MmbDorcl/input.jpeg",
        },
        {
          id: 11,
          product_id: 11,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "60000",
          currensy: "UZB",
          active: true,
          under_wear_img:
            "https://media2.bulavka.uz/n2ONxTq1dRKI5iVe251tM93ujAk=/fit-in/220x260/products/87NlIBsImK/input.jpeg",
        },
      ],
      legWear: [
        {
          id: 1,
          product_id: 1,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "50000",
          currensy: "UZB",
          active: true,
          leg_wear_img:
            "https://media2.bulavka.uz/1McaHjgNe3-t8IC1AKKYjqygy9I=/fit-in/220x260/products/EewQZSMtek/input.jpeg",
        },
        {
          id: 2,
          product_id: 2,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "10000",
          currensy: "UZB",
          active: true,
          leg_wear_img:
            "https://media2.bulavka.uz/95WLiuSkfGPO7Ud-EntV3rBlND0=/fit-in/220x260/products/ziGKjMSsT1/input.jpeg",
        },
        {
          id: 3,
          product_id: 3,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "25000",
          currensy: "UZB",
          active: true,
          leg_wear_img:
            "https://media2.bulavka.uz/1iux1_FWBL_iWPQ0RO2QNfa7peg=/fit-in/220x260/products/VQbnAHvknA/input.jpeg",
        },
        {
          id: 4,
          product_id: 4,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "30000",
          currensy: "UZB",
          active: true,
          leg_wear_img:
            "https://media2.bulavka.uz/RFew38-74XBt1cCgnQcKPF04bYA=/fit-in/220x260/products/IiEcGXZ8Wi/input.jpeg",
        },
        {
          id: 5,
          product_id: 5,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "45000",
          currensy: "UZB",
          active: true,
          leg_wear_img:
            "https://media2.bulavka.uz/zBVb53A_wjeBdZCcZrHOmuavYNg=/fit-in/220x260/products/IjwTXr69jd/input.jpeg",
        },
        {
          id: 6,
          product_id: 6,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "5000",
          currensy: "UZB",
          active: true,
          leg_wear_img:
            "https://media2.bulavka.uz/dR-bahFmY_MNyHYSWa5XDWRipmc=/fit-in/220x260/products/npGPJc5LTt/input.jpeg",
        },
        {
          id: 7,
          product_id: 7,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "70000",
          currensy: "UZB",
          active: true,
          leg_wear_img:
            "https://media2.bulavka.uz/RNdFDFUAITY-jqJL-r5NAblm6ZQ=/fit-in/220x260/products/3dru0BRvr2/input.jpeg",
        },
        {
          id: 8,
          product_id: 8,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "100000",
          currensy: "UZB",
          active: true,
          leg_wear_img:
            "https://media2.bulavka.uz/RNdFDFUAITY-jqJL-r5NAblm6ZQ=/fit-in/220x260/products/3dru0BRvr2/input.jpeg",
        },
        {
          id: 9,
          product_id: 9,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "170000",
          currensy: "UZB",
          active: true,
          leg_wear_img:
            "https://media2.bulavka.uz/RNdFDFUAITY-jqJL-r5NAblm6ZQ=/fit-in/220x260/products/3dru0BRvr2/input.jpeg",
        },
        {
          id: 10,
          product_id: 10,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "15000",
          currensy: "UZB",
          active: true,
          leg_wear_img:
            "https://media2.bulavka.uz/RNdFDFUAITY-jqJL-r5NAblm6ZQ=/fit-in/220x260/products/3dru0BRvr2/input.jpeg",
        },
        {
          id: 11,
          product_id: 11,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "60000",
          currensy: "UZB",
          active: true,
          leg_wear_img:
            "https://media2.bulavka.uz/RNdFDFUAITY-jqJL-r5NAblm6ZQ=/fit-in/220x260/products/3dru0BRvr2/input.jpeg",
        },
      ],
      Accessory: [
        {
          id: 1,
          product_id: 1,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "50000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://images.uzum.uz/cg2rk7vhj8j9g6996uug/t_product_540_high.jpg#1679984645572",
        },
        {
          id: 2,
          product_id: 2,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "10000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://images.uzum.uz/cfkc7j925kualhm8do3g/t_product_540_high.jpg#1679984645565",
        },
        {
          id: 3,
          product_id: 3,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "25000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://images.uzum.uz/cfgekqkvutv7dbm9495g/t_product_540_high.jpg#1679984817021",
        },
        {
          id: 4,
          product_id: 4,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "30000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://images.uzum.uz/cfouijfg49devoa8jq7g/t_product_540_high.jpg#1679984817028",
        },
        {
          id: 5,
          product_id: 5,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "45000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://images.uzum.uz/cfkeofvhgiopn8lc6jm0/t_product_540_high.jpg#1679984817201",
        },
        {
          id: 6,
          product_id: 6,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "5000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://images.uzum.uz/cg5k8onhj8j9g699iqc0/t_product_540_high.jpg#1679984817328",
        },
        {
          id: 7,
          product_id: 7,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "70000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://images.uzum.uz/cfro5rvhgiov1qics48g/t_product_540_high.jpg#1679984867685",
        },
        {
          id: 8,
          product_id: 8,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "100000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://images.uzum.uz/cfigp2h25kualhm87jcg/t_product_540_high.jpg#1679984867714",
        },
        {
          id: 9,
          product_id: 9,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "170000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://images.uzum.uz/cf19e8gv1htd23akr5a0/t_product_540_high.jpg#1679984867772",
        },
        {
          id: 10,
          product_id: 10,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "15000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://images.uzum.uz/cgcqktvg49devoab8of0/t_product_540_high.jpg#1679984868477",
        },
        {
          id: 11,
          product_id: 11,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "60000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://images.uzum.uz/cgfhtfnhj8j9g69avkag/t_product_540_high.jpg#1679984914878",
        },
      ],
      modelsList: [
        { id: 1, modelImg: modelImg1 },
        { id: 2, modelImg: modelImg2 },
        { id: 3, modelImg: modelImg3 },
        { id: 4, modelImg: modelImg4 },
      ],
    },
    {
      id: 3,
      category_name: "Muslim",
      category: [
        { id: 1, name: "Muslim Wear (Man)", market: "Patek Student Wear" },
      ],
      headWear: [
        {
          id: 1,
          product_id: 1,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "50000",
          currensy: "UZB",
          active: true,
          head_wear_img:
            "https://images.uzum.uz/cf0llhivtie1lhbgpdq0/t_product_540_high.jpg#1679979817097",
        },
        {
          id: 2,
          product_id: 2,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "10000",
          currensy: "UZB",
          active: true,
          head_wear_img:
            "https://images.uzum.uz/cftf79vhj8j9g698gbbg/t_product_540_high.jpg#1679979817050",
        },
        {
          id: 3,
          product_id: 3,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "25000",
          currensy: "UZB",
          active: true,
          head_wear_img:
            "https://images.uzum.uz/cft1g4vhgiov1qid0vmg/t_product_540_high.jpg#1679979817063",
        },
        {
          id: 4,
          product_id: 4,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "30000",
          currensy: "UZB",
          active: true,
          head_wear_img:
            "https://images.uzum.uz/cfodt77hgiov1qiced4g/t_product_540_high.jpg#1679979817205",
        },
        {
          id: 5,
          product_id: 5,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "45000",
          currensy: "UZB",
          active: true,
          head_wear_img:
            "https://images.uzum.uz/cfof77nhgiov1qicem8g/t_product_540_high.jpg#1679979817243",
        },
        {
          id: 6,
          product_id: 6,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "5000",
          currensy: "UZB",
          active: true,
          head_wear_img:
            "https://images.uzum.uz/cggr0vfg49devoabrpcg/original.jpg",
        },
        {
          id: 7,
          product_id: 7,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "70000",
          currensy: "UZB",
          active: true,
          head_wear_img:
            "https://images.uzum.uz/cggr0ong49devoabrpb0/original.jpg",
        },
        {
          id: 8,
          product_id: 8,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "100000",
          currensy: "UZB",
          active: true,
          head_wear_img:
            "https://images.uzum.uz/cfrot37hj8j9g698anjg/t_product_540_high.jpg#1679979896400",
        },
        {
          id: 9,
          product_id: 9,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "170000",
          currensy: "UZB",
          active: true,
          head_wear_img:
            "https://images.uzum.uz/cfs5nmvhgiov1qict4a0/t_product_540_high.jpg#1679979896386",
        },
        {
          id: 10,
          product_id: 10,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "15000",
          currensy: "UZB",
          active: true,
          head_wear_img:
            "https://images.uzum.uz/cgct0dvhgiov1qif5450/t_product_540_high.jpg#1679979896266",
        },
        {
          id: 11,
          product_id: 11,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "60000",
          currensy: "UZB",
          active: true,
          head_wear_img:
            "https://images.uzum.uz/cfs5nr7g49devoa91atg/t_product_540_high.jpg#1679979896338",
        },
      ],
      outWear: [
        {
          id: 1,
          product_id: 1,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "50000",
          currensy: "UZB",
          active: true,
          out_wear_img: "https://footbolka.ru/images/polo01.jpg",
        },
        {
          id: 2,
          product_id: 2,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "10000",
          currensy: "UZB",
          active: true,
          out_wear_img: "https://footbolka.ru/images/reebakpolocher.jpg",
        },
        {
          id: 3,
          product_id: 3,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "25000",
          currensy: "UZB",
          active: true,
          out_wear_img: "https://footbolka.ru/images/manevry.jpg",
        },
        {
          id: 4,
          product_id: 4,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "30000",
          currensy: "UZB",
          active: true,
          out_wear_img: "https://footbolka.ru/images/maskahockey.jpg",
        },
        {
          id: 5,
          product_id: 5,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "45000",
          currensy: "UZB",
          active: true,
          out_wear_img:
            "https://footbolka.ru/images/bg/drinkingfortwocolorbg.jpg",
        },
        {
          id: 6,
          product_id: 6,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "5000",
          currensy: "UZB",
          active: true,
          out_wear_img:
            "https://footbolka.ru/data/products/mens/luchdhiyrabotnikvsehvremen.jpg",
        },
        {
          id: 7,
          product_id: 7,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "70000",
          currensy: "UZB",
          active: true,
          out_wear_img:
            "https://footbolka.ru/data/products/womens/dobrayamamazaykang.jpg",
        },
        {
          id: 8,
          product_id: 8,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "100000",
          currensy: "UZB",
          active: true,
          out_wear_img:
            "https://footbolka.ru/data/products/womens/zaykamamulya22.jpg",
        },
        {
          id: 9,
          product_id: 9,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "170000",
          currensy: "UZB",
          active: true,
          out_wear_img:
            "https://footbolka.ru/data/products/paired/paarlelstich23.jpg",
        },
        {
          id: 10,
          product_id: 10,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "15000",
          currensy: "UZB",
          active: true,
          out_wear_img:
            "https://footbolka.ru/images/otlichnodopolnyaemdrugdruga.jpg",
        },
        {
          id: 11,
          product_id: 11,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "60000",
          currensy: "UZB",
          active: true,
          out_wear_img:
            "https://footbolka.ru/data/products/paired/muzskoeslovozakon.jpg",
        },
      ],
      underWear: [
        {
          id: 1,
          product_id: 1,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "50000",
          currensy: "UZB",
          active: true,
          under_wear_img:
            "https://media2.bulavka.uz/0cezA4z29ZiKE7ZCX1qxouIj2bU=/fit-in/220x260/products/pRvsHFqkNU/input.jpeg",
        },
        {
          id: 2,
          product_id: 2,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "10000",
          currensy: "UZB",
          active: true,
          under_wear_img:
            "https://media2.bulavka.uz/-qpTOv7NnOJRTTk1YqnpVd5gfgM=/fit-in/220x260/products/wwiUrjgBxk/input.jpeg",
        },
        {
          id: 3,
          product_id: 3,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "25000",
          currensy: "UZB",
          active: true,
          under_wear_img:
            "https://media2.bulavka.uz/ZAa8A6kujnBJwPyHXzSEcXCLx98=/fit-in/220x260/products/pIXPtM9tgh/input.jpeg",
        },
        {
          id: 4,
          product_id: 4,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "30000",
          currensy: "UZB",
          active: true,
          under_wear_img:
            "https://media2.bulavka.uz/71_EEfnARwQIgW3K8dSD9ybppSc=/fit-in/220x260/products/41R5CkQzZ7/input.jpeg",
        },
        {
          id: 5,
          product_id: 5,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "45000",
          currensy: "UZB",
          active: true,
          under_wear_img:
            "https://media2.bulavka.uz/KovnEKgqv3WEbgB43d3Dc-alSvU=/fit-in/220x260/products/vKQ4o04dvh/input.jpeg",
        },
        {
          id: 6,
          product_id: 6,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "5000",
          currensy: "UZB",
          active: true,
          under_wear_img:
            "https://media2.bulavka.uz/IDeEQQUpyYkcwn_T1C6ueaSUg4M=/fit-in/220x260/products/BLmmUeomNx/input.jpeg",
        },
        {
          id: 7,
          product_id: 7,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "70000",
          currensy: "UZB",
          active: true,
          under_wear_img:
            "https://media2.bulavka.uz/QU3fgFkNQ5cPdZ-m-pCAqnTJ_p8=/fit-in/220x260/products/NwPLo2vh8Q/input.jpeg",
        },
        {
          id: 8,
          product_id: 8,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "100000",
          currensy: "UZB",
          active: true,
          under_wear_img:
            "https://media2.bulavka.uz/uAzXwiQ3Ao6UEaf48hdyBXz3chY=/fit-in/220x260/products/siNjbqW6pC/input.jpeg",
        },
        {
          id: 9,
          product_id: 9,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "170000",
          currensy: "UZB",
          active: true,
          under_wear_img:
            "https://media2.bulavka.uz/BHUw5s95Guw9PHJ7vAZ-LN2xvQU=/fit-in/220x260/products/fIZSH1miVV/input.jpeg",
        },
        {
          id: 10,
          product_id: 10,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "15000",
          currensy: "UZB",
          active: true,
          under_wear_img:
            "https://media2.bulavka.uz/oatbQUK_ZbR_O-gyuK2UbiAvy7c=/fit-in/220x260/products/95MmbDorcl/input.jpeg",
        },
        {
          id: 11,
          product_id: 11,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "60000",
          currensy: "UZB",
          active: true,
          under_wear_img:
            "https://media2.bulavka.uz/n2ONxTq1dRKI5iVe251tM93ujAk=/fit-in/220x260/products/87NlIBsImK/input.jpeg",
        },
      ],
      legWear: [
        {
          id: 1,
          product_id: 1,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "50000",
          currensy: "UZB",
          active: true,
          leg_wear_img:
            "https://media2.bulavka.uz/1McaHjgNe3-t8IC1AKKYjqygy9I=/fit-in/220x260/products/EewQZSMtek/input.jpeg",
        },
        {
          id: 2,
          product_id: 2,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "10000",
          currensy: "UZB",
          active: true,
          leg_wear_img:
            "https://media2.bulavka.uz/95WLiuSkfGPO7Ud-EntV3rBlND0=/fit-in/220x260/products/ziGKjMSsT1/input.jpeg",
        },
        {
          id: 3,
          product_id: 3,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "25000",
          currensy: "UZB",
          active: true,
          leg_wear_img:
            "https://media2.bulavka.uz/1iux1_FWBL_iWPQ0RO2QNfa7peg=/fit-in/220x260/products/VQbnAHvknA/input.jpeg",
        },
        {
          id: 4,
          product_id: 4,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "30000",
          currensy: "UZB",
          active: true,
          leg_wear_img:
            "https://media2.bulavka.uz/RFew38-74XBt1cCgnQcKPF04bYA=/fit-in/220x260/products/IiEcGXZ8Wi/input.jpeg",
        },
        {
          id: 5,
          product_id: 5,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "45000",
          currensy: "UZB",
          active: true,
          leg_wear_img:
            "https://media2.bulavka.uz/zBVb53A_wjeBdZCcZrHOmuavYNg=/fit-in/220x260/products/IjwTXr69jd/input.jpeg",
        },
        {
          id: 6,
          product_id: 6,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "5000",
          currensy: "UZB",
          active: true,
          leg_wear_img:
            "https://media2.bulavka.uz/dR-bahFmY_MNyHYSWa5XDWRipmc=/fit-in/220x260/products/npGPJc5LTt/input.jpeg",
        },
        {
          id: 7,
          product_id: 7,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "70000",
          currensy: "UZB",
          active: true,
          leg_wear_img:
            "https://media2.bulavka.uz/RNdFDFUAITY-jqJL-r5NAblm6ZQ=/fit-in/220x260/products/3dru0BRvr2/input.jpeg",
        },
        {
          id: 8,
          product_id: 8,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "100000",
          currensy: "UZB",
          active: true,
          leg_wear_img:
            "https://media2.bulavka.uz/RNdFDFUAITY-jqJL-r5NAblm6ZQ=/fit-in/220x260/products/3dru0BRvr2/input.jpeg",
        },
        {
          id: 9,
          product_id: 9,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "170000",
          currensy: "UZB",
          active: true,
          leg_wear_img:
            "https://media2.bulavka.uz/RNdFDFUAITY-jqJL-r5NAblm6ZQ=/fit-in/220x260/products/3dru0BRvr2/input.jpeg",
        },
        {
          id: 10,
          product_id: 10,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "15000",
          currensy: "UZB",
          active: true,
          leg_wear_img:
            "https://media2.bulavka.uz/RNdFDFUAITY-jqJL-r5NAblm6ZQ=/fit-in/220x260/products/3dru0BRvr2/input.jpeg",
        },
        {
          id: 11,
          product_id: 11,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "60000",
          currensy: "UZB",
          active: true,
          leg_wear_img:
            "https://media2.bulavka.uz/RNdFDFUAITY-jqJL-r5NAblm6ZQ=/fit-in/220x260/products/3dru0BRvr2/input.jpeg",
        },
      ],
      Accessory: [
        {
          id: 1,
          product_id: 1,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "50000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://images.uzum.uz/cg2rk7vhj8j9g6996uug/t_product_540_high.jpg#1679984645572",
        },
        {
          id: 2,
          product_id: 2,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "10000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://images.uzum.uz/cfkc7j925kualhm8do3g/t_product_540_high.jpg#1679984645565",
        },
        {
          id: 3,
          product_id: 3,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "25000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://images.uzum.uz/cfgekqkvutv7dbm9495g/t_product_540_high.jpg#1679984817021",
        },
        {
          id: 4,
          product_id: 4,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "30000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://images.uzum.uz/cfouijfg49devoa8jq7g/t_product_540_high.jpg#1679984817028",
        },
        {
          id: 5,
          product_id: 5,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "45000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://images.uzum.uz/cfkeofvhgiopn8lc6jm0/t_product_540_high.jpg#1679984817201",
        },
        {
          id: 6,
          product_id: 6,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "5000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://images.uzum.uz/cg5k8onhj8j9g699iqc0/t_product_540_high.jpg#1679984817328",
        },
        {
          id: 7,
          product_id: 7,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "70000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://images.uzum.uz/cfro5rvhgiov1qics48g/t_product_540_high.jpg#1679984867685",
        },
        {
          id: 8,
          product_id: 8,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "100000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://images.uzum.uz/cfigp2h25kualhm87jcg/t_product_540_high.jpg#1679984867714",
        },
        {
          id: 9,
          product_id: 9,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "170000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://images.uzum.uz/cf19e8gv1htd23akr5a0/t_product_540_high.jpg#1679984867772",
        },
        {
          id: 10,
          product_id: 10,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "15000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://images.uzum.uz/cgcqktvg49devoab8of0/t_product_540_high.jpg#1679984868477",
        },
        {
          id: 11,
          product_id: 11,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "60000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://images.uzum.uz/cgfhtfnhj8j9g69avkag/t_product_540_high.jpg#1679984914878",
        },
      ],
      modelsList: [
        { id: 1, modelImg: modelImg1 },
        { id: 2, modelImg: modelImg2 },
        { id: 3, modelImg: modelImg3 },
        { id: 4, modelImg: modelImg4 },
      ],
    },
    {
      id: 4,
      category_name: "Student",
      category: [
        { id: 1, name: "Student Wear (Man)", market: "Patek Student Wear" },
      ],
      headWear: [
        {
          id: 1,
          product_id: 1,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "50000",
          currensy: "UZB",
          active: true,
          head_wear_img:
            "https://images.uzum.uz/cf0llhivtie1lhbgpdq0/t_product_540_high.jpg#1679979817097",
        },
        {
          id: 2,
          product_id: 2,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "10000",
          currensy: "UZB",
          active: true,
          head_wear_img:
            "https://images.uzum.uz/cftf79vhj8j9g698gbbg/t_product_540_high.jpg#1679979817050",
        },
        {
          id: 3,
          product_id: 3,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "25000",
          currensy: "UZB",
          active: true,
          head_wear_img:
            "https://images.uzum.uz/cft1g4vhgiov1qid0vmg/t_product_540_high.jpg#1679979817063",
        },
        {
          id: 4,
          product_id: 4,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "30000",
          currensy: "UZB",
          active: true,
          head_wear_img:
            "https://images.uzum.uz/cfodt77hgiov1qiced4g/t_product_540_high.jpg#1679979817205",
        },
        {
          id: 5,
          product_id: 5,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "45000",
          currensy: "UZB",
          active: true,
          head_wear_img:
            "https://images.uzum.uz/cfof77nhgiov1qicem8g/t_product_540_high.jpg#1679979817243",
        },
        {
          id: 6,
          product_id: 6,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "5000",
          currensy: "UZB",
          active: true,
          head_wear_img:
            "https://images.uzum.uz/cggr0vfg49devoabrpcg/original.jpg",
        },
        {
          id: 7,
          product_id: 7,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "70000",
          currensy: "UZB",
          active: true,
          head_wear_img:
            "https://images.uzum.uz/cggr0ong49devoabrpb0/original.jpg",
        },
        {
          id: 8,
          product_id: 8,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "100000",
          currensy: "UZB",
          active: true,
          head_wear_img:
            "https://images.uzum.uz/cfrot37hj8j9g698anjg/t_product_540_high.jpg#1679979896400",
        },
        {
          id: 9,
          product_id: 9,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "170000",
          currensy: "UZB",
          active: true,
          head_wear_img:
            "https://images.uzum.uz/cfs5nmvhgiov1qict4a0/t_product_540_high.jpg#1679979896386",
        },
        {
          id: 10,
          product_id: 10,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "15000",
          currensy: "UZB",
          active: true,
          head_wear_img:
            "https://images.uzum.uz/cgct0dvhgiov1qif5450/t_product_540_high.jpg#1679979896266",
        },
        {
          id: 11,
          product_id: 11,
          name: "Головной убор",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "60000",
          currensy: "UZB",
          active: true,
          head_wear_img:
            "https://images.uzum.uz/cfs5nr7g49devoa91atg/t_product_540_high.jpg#1679979896338",
        },
      ],
      outWear: [
        {
          id: 1,
          product_id: 1,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "50000",
          currensy: "UZB",
          active: true,
          out_wear_img: "https://footbolka.ru/images/polo01.jpg",
        },
        {
          id: 2,
          product_id: 2,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "10000",
          currensy: "UZB",
          active: true,
          out_wear_img: "https://footbolka.ru/images/reebakpolocher.jpg",
        },
        {
          id: 3,
          product_id: 3,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "25000",
          currensy: "UZB",
          active: true,
          out_wear_img: "https://footbolka.ru/images/manevry.jpg",
        },
        {
          id: 4,
          product_id: 4,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "30000",
          currensy: "UZB",
          active: true,
          out_wear_img: "https://footbolka.ru/images/maskahockey.jpg",
        },
        {
          id: 5,
          product_id: 5,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "45000",
          currensy: "UZB",
          active: true,
          out_wear_img:
            "https://footbolka.ru/images/bg/drinkingfortwocolorbg.jpg",
        },
        {
          id: 6,
          product_id: 6,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "5000",
          currensy: "UZB",
          active: true,
          out_wear_img:
            "https://footbolka.ru/data/products/mens/luchdhiyrabotnikvsehvremen.jpg",
        },
        {
          id: 7,
          product_id: 7,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "70000",
          currensy: "UZB",
          active: true,
          out_wear_img:
            "https://footbolka.ru/data/products/womens/dobrayamamazaykang.jpg",
        },
        {
          id: 8,
          product_id: 8,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "100000",
          currensy: "UZB",
          active: true,
          out_wear_img:
            "https://footbolka.ru/data/products/womens/zaykamamulya22.jpg",
        },
        {
          id: 9,
          product_id: 9,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "170000",
          currensy: "UZB",
          active: true,
          out_wear_img:
            "https://footbolka.ru/data/products/paired/paarlelstich23.jpg",
        },
        {
          id: 10,
          product_id: 10,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "15000",
          currensy: "UZB",
          active: true,
          out_wear_img:
            "https://footbolka.ru/images/otlichnodopolnyaemdrugdruga.jpg",
        },
        {
          id: 11,
          product_id: 11,
          name: "Верхняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "60000",
          currensy: "UZB",
          active: true,
          out_wear_img:
            "https://footbolka.ru/data/products/paired/muzskoeslovozakon.jpg",
        },
      ],
      underWear: [
        {
          id: 1,
          product_id: 1,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "50000",
          currensy: "UZB",
          active: true,
          under_wear_img:
            "https://media2.bulavka.uz/0cezA4z29ZiKE7ZCX1qxouIj2bU=/fit-in/220x260/products/pRvsHFqkNU/input.jpeg",
        },
        {
          id: 2,
          product_id: 2,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "10000",
          currensy: "UZB",
          active: true,
          under_wear_img:
            "https://media2.bulavka.uz/-qpTOv7NnOJRTTk1YqnpVd5gfgM=/fit-in/220x260/products/wwiUrjgBxk/input.jpeg",
        },
        {
          id: 3,
          product_id: 3,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "25000",
          currensy: "UZB",
          active: true,
          under_wear_img:
            "https://media2.bulavka.uz/ZAa8A6kujnBJwPyHXzSEcXCLx98=/fit-in/220x260/products/pIXPtM9tgh/input.jpeg",
        },
        {
          id: 4,
          product_id: 4,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "30000",
          currensy: "UZB",
          active: true,
          under_wear_img:
            "https://media2.bulavka.uz/71_EEfnARwQIgW3K8dSD9ybppSc=/fit-in/220x260/products/41R5CkQzZ7/input.jpeg",
        },
        {
          id: 5,
          product_id: 5,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "45000",
          currensy: "UZB",
          active: true,
          under_wear_img:
            "https://media2.bulavka.uz/KovnEKgqv3WEbgB43d3Dc-alSvU=/fit-in/220x260/products/vKQ4o04dvh/input.jpeg",
        },
        {
          id: 6,
          product_id: 6,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "5000",
          currensy: "UZB",
          active: true,
          under_wear_img:
            "https://media2.bulavka.uz/IDeEQQUpyYkcwn_T1C6ueaSUg4M=/fit-in/220x260/products/BLmmUeomNx/input.jpeg",
        },
        {
          id: 7,
          product_id: 7,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "70000",
          currensy: "UZB",
          active: true,
          under_wear_img:
            "https://media2.bulavka.uz/QU3fgFkNQ5cPdZ-m-pCAqnTJ_p8=/fit-in/220x260/products/NwPLo2vh8Q/input.jpeg",
        },
        {
          id: 8,
          product_id: 8,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "100000",
          currensy: "UZB",
          active: true,
          under_wear_img:
            "https://media2.bulavka.uz/uAzXwiQ3Ao6UEaf48hdyBXz3chY=/fit-in/220x260/products/siNjbqW6pC/input.jpeg",
        },
        {
          id: 9,
          product_id: 9,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "170000",
          currensy: "UZB",
          active: true,
          under_wear_img:
            "https://media2.bulavka.uz/BHUw5s95Guw9PHJ7vAZ-LN2xvQU=/fit-in/220x260/products/fIZSH1miVV/input.jpeg",
        },
        {
          id: 10,
          product_id: 10,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "15000",
          currensy: "UZB",
          active: true,
          under_wear_img:
            "https://media2.bulavka.uz/oatbQUK_ZbR_O-gyuK2UbiAvy7c=/fit-in/220x260/products/95MmbDorcl/input.jpeg",
        },
        {
          id: 11,
          product_id: 11,
          name: "Нижняя одежда",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "60000",
          currensy: "UZB",
          active: true,
          under_wear_img:
            "https://media2.bulavka.uz/n2ONxTq1dRKI5iVe251tM93ujAk=/fit-in/220x260/products/87NlIBsImK/input.jpeg",
        },
      ],
      legWear: [
        {
          id: 1,
          product_id: 1,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "50000",
          currensy: "UZB",
          active: true,
          leg_wear_img:
            "https://media2.bulavka.uz/1McaHjgNe3-t8IC1AKKYjqygy9I=/fit-in/220x260/products/EewQZSMtek/input.jpeg",
        },
        {
          id: 2,
          product_id: 2,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "10000",
          currensy: "UZB",
          active: true,
          leg_wear_img:
            "https://media2.bulavka.uz/95WLiuSkfGPO7Ud-EntV3rBlND0=/fit-in/220x260/products/ziGKjMSsT1/input.jpeg",
        },
        {
          id: 3,
          product_id: 3,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "25000",
          currensy: "UZB",
          active: true,
          leg_wear_img:
            "https://media2.bulavka.uz/1iux1_FWBL_iWPQ0RO2QNfa7peg=/fit-in/220x260/products/VQbnAHvknA/input.jpeg",
        },
        {
          id: 4,
          product_id: 4,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "30000",
          currensy: "UZB",
          active: true,
          leg_wear_img:
            "https://media2.bulavka.uz/RFew38-74XBt1cCgnQcKPF04bYA=/fit-in/220x260/products/IiEcGXZ8Wi/input.jpeg",
        },
        {
          id: 5,
          product_id: 5,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "45000",
          currensy: "UZB",
          active: true,
          leg_wear_img:
            "https://media2.bulavka.uz/zBVb53A_wjeBdZCcZrHOmuavYNg=/fit-in/220x260/products/IjwTXr69jd/input.jpeg",
        },
        {
          id: 6,
          product_id: 6,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "5000",
          currensy: "UZB",
          active: true,
          leg_wear_img:
            "https://media2.bulavka.uz/dR-bahFmY_MNyHYSWa5XDWRipmc=/fit-in/220x260/products/npGPJc5LTt/input.jpeg",
        },
        {
          id: 7,
          product_id: 7,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "70000",
          currensy: "UZB",
          active: true,
          leg_wear_img:
            "https://media2.bulavka.uz/RNdFDFUAITY-jqJL-r5NAblm6ZQ=/fit-in/220x260/products/3dru0BRvr2/input.jpeg",
        },
        {
          id: 8,
          product_id: 8,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "100000",
          currensy: "UZB",
          active: true,
          leg_wear_img:
            "https://media2.bulavka.uz/RNdFDFUAITY-jqJL-r5NAblm6ZQ=/fit-in/220x260/products/3dru0BRvr2/input.jpeg",
        },
        {
          id: 9,
          product_id: 9,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "170000",
          currensy: "UZB",
          active: true,
          leg_wear_img:
            "https://media2.bulavka.uz/RNdFDFUAITY-jqJL-r5NAblm6ZQ=/fit-in/220x260/products/3dru0BRvr2/input.jpeg",
        },
        {
          id: 10,
          product_id: 10,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "15000",
          currensy: "UZB",
          active: true,
          leg_wear_img:
            "https://media2.bulavka.uz/RNdFDFUAITY-jqJL-r5NAblm6ZQ=/fit-in/220x260/products/3dru0BRvr2/input.jpeg",
        },
        {
          id: 11,
          product_id: 11,
          name: "Обувь",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "60000",
          currensy: "UZB",
          active: true,
          leg_wear_img:
            "https://media2.bulavka.uz/RNdFDFUAITY-jqJL-r5NAblm6ZQ=/fit-in/220x260/products/3dru0BRvr2/input.jpeg",
        },
      ],
      Accessory: [
        {
          id: 1,
          product_id: 1,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "50000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://images.uzum.uz/cg2rk7vhj8j9g6996uug/t_product_540_high.jpg#1679984645572",
        },
        {
          id: 2,
          product_id: 2,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "10000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://images.uzum.uz/cfkc7j925kualhm8do3g/t_product_540_high.jpg#1679984645565",
        },
        {
          id: 3,
          product_id: 3,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "25000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://images.uzum.uz/cfgekqkvutv7dbm9495g/t_product_540_high.jpg#1679984817021",
        },
        {
          id: 4,
          product_id: 4,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "30000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://images.uzum.uz/cfouijfg49devoa8jq7g/t_product_540_high.jpg#1679984817028",
        },
        {
          id: 5,
          product_id: 5,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "45000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://images.uzum.uz/cfkeofvhgiopn8lc6jm0/t_product_540_high.jpg#1679984817201",
        },
        {
          id: 6,
          product_id: 6,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "5000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://images.uzum.uz/cg5k8onhj8j9g699iqc0/t_product_540_high.jpg#1679984817328",
        },
        {
          id: 7,
          product_id: 7,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "70000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://images.uzum.uz/cfro5rvhgiov1qics48g/t_product_540_high.jpg#1679984867685",
        },
        {
          id: 8,
          product_id: 8,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "100000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://images.uzum.uz/cfigp2h25kualhm87jcg/t_product_540_high.jpg#1679984867714",
        },
        {
          id: 9,
          product_id: 9,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "170000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://images.uzum.uz/cf19e8gv1htd23akr5a0/t_product_540_high.jpg#1679984867772",
        },
        {
          id: 10,
          product_id: 10,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "15000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://images.uzum.uz/cgcqktvg49devoab8of0/t_product_540_high.jpg#1679984868477",
        },
        {
          id: 11,
          product_id: 11,
          name: "Аксессуары",
          gender: "Male",
          quality: "semi-original",
          composition: "cotton 100%",
          wear_size: "51",
          make_country: "china",
          amount: "60000",
          currensy: "UZB",
          active: true,
          accessor_wear_img:
            "https://images.uzum.uz/cgfhtfnhj8j9g69avkag/t_product_540_high.jpg#1679984914878",
        },
      ],
      modelsList: [
        { id: 1, modelImg: modelImg1 },
        { id: 2, modelImg: modelImg2 },
        { id: 3, modelImg: modelImg3 },
        { id: 4, modelImg: modelImg4 },
      ],
    },
  ]);

  let modelsList = [
    { id: 1, modelImg: modelImg1 },
    { id: 2, modelImg: modelImg2 },
    { id: 3, modelImg: modelImg3 },
    // { id: 4, modelImg: modelImg4 },
  ]

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute right-3 top-[20%] z-10 text-center cursor-pointer no-underline w-8 h-8 flex items-center justify-center  rounded-full bg-btnBgColor duration-200 border border-solid border-searchBgColor	`}
        onClick={onClick}
      >
        <GrFormNext size={15} />
      </div>
    );
  };
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute left-3 top-[20%] z-10 text-center cursor-pointer no-underline w-8 h-8 flex items-center justify-center rounded-full bg-btnBgColor duration-200 border border-solid border-searchBgColor`}
        onClick={onClick}
      >
        <GrFormPrevious size={15} />
      </div>
    );
  };

  const NextArrow1 = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute right-3 top-[40%] z-10 text-center cursor-pointer no-underline  w-8 h-8 flex items-center justify-center  rounded-full bg-btnBgColor duration-200 border border-solid border-searchBgColor	`}
        onClick={onClick}
      >
        <GrFormNext size={15} />
      </div>
    );
  };
  const PrevArrow1 = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute left-3 top-[40%] z-10 text-center cursor-pointer no-underline  w-8 h-8 flex items-center justify-center rounded-full bg-btnBgColor duration-200 border border-solid border-searchBgColor	`}
        onClick={onClick}
      >
        <GrFormPrevious size={15} />
      </div>
    );
  };

  const NextArrowshoesWear = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute right-3 top-[25%] z-10 text-center cursor-pointer no-underline  w-8 h-8 flex items-center justify-center  rounded-full bg-btnBgColor duration-200 border border-solid border-searchBgColor	`}
        onClick={onClick}
      >
        <GrFormNext size={15} />
      </div>
    );
  };
  const PrevArrowshoesWear = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute left-3 top-[25%] z-10 text-center cursor-pointer no-underline  w-8 h-8 flex items-center justify-center rounded-full bg-btnBgColor duration-200 border border-solid border-searchBgColor	`}
        onClick={onClick}
      >
        <GrFormPrevious size={15} />
      </div>
    );
  };

  const NextArrowAccessory = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute right-3 top-[25%] z-10 text-center cursor-pointer no-underline  w-8 h-8 flex items-center justify-center  rounded-full bg-btnBgColor duration-200 border border-solid border-searchBgColor	`}
        onClick={onClick}
      >
        <GrFormNext size={15} />
      </div>
    );
  };
  const PrevArrowAccessory = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute left-3 top-[25%] z-10 text-center cursor-pointer no-underline  w-8 h-8 flex items-center justify-center rounded-full bg-btnBgColor duration-200 border border-solid border-searchBgColor	`}
        onClick={onClick}
      >
        <GrFormPrevious size={15} />
      </div>
    );
  };

  const NextArrowModalSlider = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute right-[120px] top-[93%] z-10 text-center cursor-pointer no-underline  w-10 h-10 flex items-center justify-center  rounded-lg bg-btnBgColor duration-200 border border-solid border-searchBgColor	`}
        onClick={onClick}
      >
        <img src={arrowRightCircle} alt="" className="w-5 h-5"/>
      </div>
    );
  };
  const PrevArrowModalSlider = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`absolute left-[120px] top-[93%] z-10 text-center cursor-pointer no-underline  w-10 h-10 flex items-center justify-center rounded-lg bg-btnBgColor duration-200 border border-solid border-searchBgColor	`}
        onClick={onClick}
      >
        <img src={arrowLeftCircle} alt="" className="w-5 h-5"/>
      </div>
    );
  };

  const [getSliderId, setGetSliderId] = useState({
    headWearId: 1,
    headWearPrice: 0,

    outWearId: 1,
    outWearPrice: 0,

    underWearId: 1,
    underWearPrice: 0,

    legWearId: 1,
    legWearPrice: 0,

    accessoryId: 1,
    accessoryPrice: 0,
  });

  let headWear = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    dots: false,
    afterChange: (current) =>
      setGetSliderId({ ...getSliderId, headWearId: current + 1 }),
  };
  let outWear = {
    nextArrow: <NextArrow1 />,
    prevArrow: <PrevArrow1 />,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    dots: false,
    afterChange: (current) =>
      setGetSliderId({ ...getSliderId, outWearId: current + 1 }),
  };
  let underWear = {
    nextArrow: <NextArrow1 />,
    prevArrow: <PrevArrow1 />,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    dots: false,
    afterChange: (current) =>
      setGetSliderId({ ...getSliderId, underWearId: current + 1 }),
  };
  let legWear = {
    nextArrow: <NextArrowshoesWear />,
    prevArrow: <PrevArrowshoesWear />,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    dots: false,
    afterChange: (current) =>
      setGetSliderId({ ...getSliderId, legWearId: current + 1 }),
  };
  let Accessory = {
    nextArrow: <NextArrowAccessory />,
    prevArrow: <PrevArrowAccessory />,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    dots: false,
    afterChange: (current) =>
      setGetSliderId({ ...getSliderId, accessoryId: current + 1 }),
  };
  let modelsSlider = {
    nextArrow: <NextArrowModalSlider />,
    prevArrow: <PrevArrowModalSlider />,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const [clothesSetWear, setClothesSetWear] = useState(true);
  const [openToModel, setOpenToModel] = useState(false);
  
  const OpenShowModel = (modelId) => {
    setProductList((current) => {
      return current?.map((data) => {
        if (data?.id == modelId) {
          return { ...data, SetToModel: !data.SetToModel };
        } else {
          return data;
        }
      });
    });
  };

  const [open, setOpen] = useState(false);

  
  return (
    <div className="w-full flex flex-row flex-wrap box-border gap-y-5 gap-x-5 h-fit justify-between">
        {productList.map((producListMap) => {
            return (
                <div key={productList?.id} className="w-[305px] flex flex-row overflow-hidden">
                    <div className="w-full  border bg-white border-searchBgColor pt-4 rounded-lg">
                        
                        {producListMap?.SetToModel ? (
                            <div className="w-full h-[572px] flex justify-center">
                                <img src={model1} alt="" />
                            </div>
                            ) : (
                            <div>
                                {/* HeadWear */}
                                <div className="w-full h-fit">
                                    {producListMap?.headWear?.length >= 2 ? (
                                        <Slider {...headWear} className={`w-full h-[72px] mb-3`}>
                                            {producListMap?.headWear?.map((item) => {
                                                return item.id ? (
                                                <div key={item?.id} className={`!w-[192px] box-border ml-[56px] flex items-center justify-center h-[72px] rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor`}>
                                                    <div className="w-full h-full">
                                                        <img className="w-[100px] h-full m-auto" src={item?.head_wear_img} alt="head_wear_img"/>
                                                    </div>
                                                    <div className={`absolute w-[190px] top-1 px-1 flex ${ !item?.active ? "justify-between" : "justify-end" }`} >
                                                    {!item?.active ? (
                                                        <div className="w-6 h-6 cursor-pointer border border-searchBgColor bg-white rounded-lg flex items-center justify-center">
                                                            <img src={statusFalse} alt="statusFalse" />
                                                        </div>
                                                    ) : null}
                                                    <div className="w-6 h-6 flex items-center justify-center top-1 cursor-pointer border border-searchBgColor bg-white rounded-lg">
                                                        <img src={Liked} alt="Liked" />
                                                    </div>
                                                    </div>
                                                    <div className="absolute duration-200  bottom-1 px-1 mb-[6px] w-[190px] flex justify-end">
                                                    <div className="w-[24px] h-[24px] cursor-pointer border border-searchBgColor data-hover:bg-red-500 bg-white rounded-lg flex items-center justify-center">
                                                        <img src={nextInfo} alt="nextInfo" />
                                                    </div>
                                                    </div>
                                                </div>
                                                ) : (
                                                <div className="w-0 h-0"></div>
                                                );
                                            })}
                                        </Slider>
                                    ) : (
                                        <div className={`w-full h-[72px] mb-3`}>
                                            {producListMap?.headWear?.map((item) => {
                                            return item.id ? (
                                                <div
                                                key={item?.id}
                                                className={`!w-[192px] box-border ml-[56px] flex items-center justify-center h-[72px] rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor`}
                                                >
                                                <div className="w-full h-full">
                                                    <img
                                                    className="w-[100px] h-full m-auto"
                                                    src={item?.head_wear_img}
                                                    alt="head_wear_img"
                                                    />
                                                </div>
                                                <div
                                                    className={`absolute w-[190px] top-1 px-1 flex ${
                                                    !item?.active
                                                        ? "justify-between"
                                                        : "justify-end"
                                                    } `}
                                                >
                                                    {!item?.active ? (
                                                    <div className="w-6 h-6 cursor-pointer border border-searchBgColor bg-white rounded-lg flex items-center justify-center">
                                                        <img
                                                        src={statusFalse}
                                                        alt="statusFalse"
                                                        />
                                                    </div>
                                                    ) : null}
                                                    <div className="w-6 h-6 flex items-center justify-center top-1 cursor-pointer border border-searchBgColor bg-white rounded-lg">
                                                    <img src={Liked} alt="Liked" />
                                                    </div>
                                                </div>
                                                <div className="absolute duration-200  bottom-1 px-1 mb-[6px] w-[190px] flex justify-end">
                                                    <div className="w-[24px] h-[24px] cursor-pointer border border-searchBgColor data-hover:bg-red-500 bg-white rounded-lg flex items-center justify-center">
                                                    <img src={nextInfo} alt="nextInfo" />
                                                    </div>
                                                </div>
                                                </div>
                                            ) : (
                                                <div className="w-0 h-0"></div>
                                            );
                                            })}
                                        </div>
                                    )}
                                    
                                </div>

                                {/* OutWear */}
                                <div className="w-full h-fit -mt-2">
                                    <Slider {...outWear} className={`w-full h-[160px]`}>
                                    {producListMap?.outWear.map((item) => {
                                        return (
                                        <div
                                            key={item?.id}
                                            className={`!w-[192px] flex justify-center items-center ml-[56px] h-[148px] rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor`}
                                        >
                                            <div className="w-full h-full">
                                            <img
                                                className=" h-full m-auto"
                                                src={item?.out_wear_img}
                                                alt="out_wear_img"
                                            />
                                            </div>
                                            <div
                                            className={`absolute top-1 px-1 flex ${
                                                !item?.active
                                                ? "justify-between"
                                                : "justify-end"
                                            }  w-[190px] `}
                                            >
                                            {!item?.active ? (
                                                <div className="w-[24px] h-[24px] cursor-pointer border border-searchBgColor bg-white rounded-lg flex items-center justify-center">
                                                <img src={statusFalse} alt="" />
                                                </div>
                                            ) : null}
                                            <div className="w-[24px] h-[24px] cursor-pointer border border-searchBgColor bg-white rounded-lg flex items-center justify-center">
                                                <img src={Liked} alt="" />
                                            </div>
                                            </div>
                                            <div className="absolute duration-200  bottom-1 px-1 mb-[6px] w-[190px]  flex justify-end">
                                            <div className="w-[24px] h-[24px]     cursor-pointer border border-searchBgColor bg-white rounded-lg flex items-center justify-center">
                                                <img src={nextInfo} alt="nextInfo" />
                                            </div>
                                            </div>
                                        </div>
                                        );
                                    })}
                                    </Slider>
                                </div>

                                {/* UnderWear */}
                                <div className="w-full h-fit -mt-2">
                                    <Slider {...underWear} className={`w-full h-[180px]`}>
                                    {producListMap?.underWear.map((item) => {
                                        return (
                                        <div
                                            key={item?.id}
                                            className={`!w-[192px] flex justify-center items-center ml-[56px] h-[168px] rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor`}
                                        >
                                            <div className="w-full h-full">
                                            <img
                                                className=" h-full m-auto"
                                                src={item?.under_wear_img}
                                                alt="under_wear_img"
                                            />
                                            </div>
                                            <div
                                            className={`absolute top-1 px-1 flex ${
                                                !item?.active
                                                ? "justify-between"
                                                : "justify-end"
                                            }  w-[190px] `}
                                            >
                                            {!item?.active ? (
                                                <div className="w-[24px] h-[24px] cursor-pointer border border-searchBgColor bg-white rounded flex items-center justify-center">
                                                <img src={statusFalse} alt="" />
                                                </div>
                                            ) : null}
                                            <div className="w-[24px] h-[24px] cursor-pointer border border-searchBgColor bg-white rounded-lg flex items-center justify-center">
                                                <img src={Liked} alt="" />
                                            </div>
                                            </div>
                                            <div className="absolute duration-200  bottom-1 px-1 mb-[6px] w-[190px]  flex justify-end">
                                            <div className="w-[24px] h-[24px]     cursor-pointer border border-searchBgColor bg-white rounded-lg flex items-center justify-center">
                                                <img src={nextInfo} alt="nextInfo" />
                                            </div>
                                            </div>
                                        </div>
                                        );
                                    })}
                                    </Slider>
                                </div>

                                {/* LegWear */}
                                <div className="w-full h-fit -mt-2">
                                    <Slider {...legWear} className={`w-full h-[72px]`}>
                                    {producListMap?.legWear.map((item) => {
                                        return (
                                        <div
                                            key={item?.id}
                                            className={`!w-[192px] flex justify-center items-center  ml-[56px] h-[72px] rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor`}
                                        >
                                            <div className="w-full h-full">
                                            <img
                                                className=" h-full m-auto"
                                                src={item?.leg_wear_img}
                                                alt="leg_wear_img"
                                            />
                                            </div>
                                            <div
                                            className={`absolute top-1 px-1 flex ${
                                                !item?.active
                                                ? "justify-between"
                                                : "justify-end"
                                            }  w-[190px] `}
                                            >
                                            {!item?.active ? (
                                                <div className="w-[24px] h-[24px] cursor-pointer border border-searchBgColor bg-white rounded flex items-center justify-center">
                                                <img src={statusFalse} alt="" />
                                                </div>
                                            ) : null}
                                            <div className="w-[24px] h-[24px] cursor-pointer border border-searchBgColor bg-white rounded-lg flex items-center justify-center">
                                                <img src={Liked} alt="" />
                                            </div>
                                            </div>
                                            <div className="absolute duration-200  bottom-1 px-1 mb-[6px] w-[190px]  flex justify-end">
                                            <div className="w-[24px] h-[24px]     cursor-pointer border border-searchBgColor bg-white rounded-lg flex items-center justify-center">
                                                <img src={nextInfo} alt="nextInfo" />
                                            </div>
                                            </div>
                                        </div>
                                        );
                                    })}
                                    </Slider>
                                </div>

                                {/* Accessory */}
                                <div className="w-full h-fit mt-3 mb-4">
                                    <Slider {...Accessory} className={`w-full h-[72px]`}>
                                    {producListMap?.Accessory.map((item) => {
                                        return (
                                        <div
                                            key={item?.id}
                                            className={`!w-[192px] flex items-center justify-center ml-[56px] h-[72px] rounded-lg overflow-hidden border border-searchBgColor bg-btnBgColor`}
                                        >
                                            <div className="w-full h-full">
                                            <img
                                                className="w-[100px] h-full m-auto"
                                                src={item?.accessor_wear_img}
                                                alt="accessor_wear_img"
                                            />
                                            </div>
                                            <div
                                            className={`absolute top-1 px-1 flex ${
                                                !item?.active
                                                ? "justify-between"
                                                : "justify-end"
                                            }  w-[190px] `}
                                            >
                                            {!item?.active ? (
                                                <div className="w-[24px] h-[24px] cursor-pointer border border-searchBgColor bg-white rounded flex items-center justify-center">
                                                <img src={statusFalse} alt="" />
                                                </div>
                                            ) : null}
                                            <div className="w-[24px] h-[24px] cursor-pointer border border-searchBgColor bg-white rounded-lg flex items-center justify-center">
                                                <img src={Liked} alt="" />
                                            </div>
                                            </div>
                                            <div className="absolute duration-200  bottom-1 px-1 mb-[6px] w-[190px]  flex justify-end">
                                            <div className="w-[24px] h-[24px]     cursor-pointer border border-searchBgColor bg-white rounded-lg flex items-center justify-center">
                                                <img src={nextInfo} alt="nextInfo" />
                                            </div>
                                            </div>
                                        </div>
                                        );
                                    })}
                                    </Slider>
                                </div>
                            </div>
                        )}

                        {producListMap?.category.map((item) => {
                            return (
                            <div
                                key={item?.id}
                                className="w-full relative border-y border-searchBgColor px-4 py-3"
                            >
                                <div className="font-AeonikProRegular text-sm leading-4 text-gray-500">
                                Набор:
                                    <span className="not-italic font-AeonikProMedium text-base text-black ml-2">
                                    {item?.name}
                                    </span>
                                </div>
                                {producListMap.SetToModel ? (
                                    <button
                                        onClick={() => {
                                        setClothesSetWear(false);
                                        setOpenToModel(false);
                                        OpenShowModel(producListMap?.id);
                                        }}
                                        className={` absolute top-[7px] right-2 group w-9 h-9 hover:w-[120px] bg-bgCard hover:bg-white   duration-300 rounded-lg overflow-hidden border border-searchBgColor flex items-center justify-between`}
                                    >
                                        <span className="  flex flex-nowrap items-center ml-[-100px] group-hover:ml-[12px]  not-italic overflow-hidden p-[1px] duration-300   font-AeonikProRegular leading-3  text-black text-sm ">
                                        Строение
                                        </span>
                                        <span className="w-8 h-8 flex items-center justify-center">
                                        <img
                                            className="mr-[2px]"
                                            src={modelToSet}
                                            alt="model-to-set"
                                        />
                                        </span>
                                    </button>
                                ) : (
                                    producListMap.modelsList.length > 0 ? (
                                        <button
                                            onClick={() => {
                                            setClothesSetWear(true);
                                            setOpenToModel(true);
                                            OpenShowModel(producListMap?.id);
                                            }}
                                            className={`absolute top-[7px] right-2 group w-9 h-9 hover:w-[98px] bg-bgCard hover:bg-white   duration-300 rounded-lg overflow-hidden border border-searchBgColor flex items-center justify-between`}
                                        >
                                            <span className="  flex flex-nowrap items-center ml-[-100px] group-hover:ml-[14px]  not-italic overflow-hidden  duration-300   font-AeonikProRegular leading-3  text-black text-sm ">
                                            Модель
                                            </span>
                                            <span className="w-8 h-8 flex items-center justify-center">
                                            <img
                                                className="mr-[2px]"
                                                src={setpersonIcons}
                                                alt="setpersonIcons"
                                            />
                                            </span>
                                        </button>
                                    ) : (
                                        null
                                    )     
                                )}
                            </div>
                            );
                        })}

                        <div className="w-full pr-2 pl-4 pb-2 pt-2 flex flex-wrap content-between">
                            <div className="relative flex w-full justify-between items-center">
                                <div className="flex items-center mt-4 mb-3">
                                    <span className="mr-[6px] flex  items-center">
                                    <img src={star} alt="star" />
                                    </span>
                                    <span className="not-italic font-AeonikProMedium text-base leading-4 text-black">
                                    2.5{" "}
                                    <span className="mr-1 not-italic font-AeonikProRegular text-xs leading-3 text-setTexOpacity">
                                        (20 голосов)
                                    </span>
                                    </span>
                                </div>
                                <Button 
                                    type="primary" 
                                    onClick={() => setOpen(true)}
                                    className="group absolute -top-1 right-0 rounded-lg bg-btnBgColor border border-searchBgColor flex items-center justify-center pl-[10px] pr-[5px] py-[7px] hover:bg-SignInBgColor transition ease-in duration-300"
                                    >
                                    <span className="group-hover:text-white flex  items-center font-AeonikProRegular text-center text-black text-[12px] mr-1">
                                    Обзор набора
                                    </span>
                                    <svg className="group-hover:fill-white group-hover:stroke-white stroke-black" opacity={100} viewBox="-6 -6 36 36" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" > <path d="M12 0c-6.623 0-12 5.377-12 12s5.377 12 12 12 12-5.377 12-12-5.377-12-12-12zm0 1c-6.071 0-11 4.929-11 11s4.929 11 11 11 11-4.929 11-11-4.929-11-11-11zm4.828 11.5l-4.608 3.763.679.737 6.101-5-6.112-5-.666.753 4.604 3.747h-11.826v1h11.828z" />
                                    </svg>
                                </Button>                             
                            </div>
                            <div className="flex items-center w-full justify-between">
                                <div>
                                    <span className="not-italic font-AeonikProMedium text-2xl leading-7 text-setPriceRed mr-[6px]">
                                    828000
                                    </span>
                                    <span className="not-italic font-AeonikProRegular line-through	 text-sm leading-4 text-setTexOpacity">
                                    1054000
                                    </span>
                                </div>
                                <button className="w-[36px] h-[36px] rounded-lg border border-searchBgColor bg-btnBgColor flex items-center justify-center">
                                    <img src={addBag} alt="addbag" className="w-8"/>
                                </button>
                            </div>
                        </div>
                                
                    </div>
                </div>
            )
        })}

        <Modal
            centered
            open={open}
            onCancel={() => setOpen(false)}
            width={1000}
            footer={null}
            className="overscroll-y-none"
        >
            <div className="modelSlider w-full flex frex-row h-[800px]">
                <div className="w-[55%] flex items-center justify-center  border-r border-searchBgColor">
                      {modelsList.length >= 2 ? (
                        <Slider {...modelsSlider} className="w-full h-full flex items-center">
                          {modelsList?.map((data,index) => {
                            return (
                                <div key={index} className="ml-[180px]">
                                    <img src={data.modelImg} alt="img" />
                                    <div>{data.text}</div>
                                </div>
                            )
                          })}  
                        </Slider>
                      ) : (
                          <img src={model1} alt="img" /> 
                      )}         
                      
                </div>
                <div className="w-[45%] flex flex-col justify-items-end">
                    
                    <div className="relative h-full py-6 overflow-auto">
                        <div className="sticky border-b border-searchBgColor mb-6">
                            <div className="px-5 font-AeonikProMedium text-2xl mb-3">Business Wear (Man)</div>
                            <div className="px-5 font-AeonikProRegular text-base mb-6">
                                <span className="text-setTexOpacity mr-2">Магазин:</span>
                                Patek Business Wear
                            </div>
                        </div>

                        <div className="mb-6">

                            <div className="px-3 mb-[22px]">
                                <div className="font-AeonikProMedium text-sm mb-2">Головной убор</div>
                                <div className="border rounded-lg p-3">
                                    
                                    <div className="flex relative mb-2">
                                        <div className="w-[92px] h-[120px] bg-slate-200 rounded-lg mr-4">
                                            <img src="" alt="" />
                                        </div>
                                        <div className="py-3">
                                            <div className="font-AeonikProRegular text-sm mb-[54px]">Eleganza Шарф</div>
                                            <div className=" font-AeonikProMedium text-base">
                                                <span className="text-xl">149 000</span> сум
                                            </div>
                                        </div>
                                        <button className="absolute top-5 right-0 w-12 h-12 rounded-lg border border-searchBgColor bg-btnBgColor flex items-center justify-center">
                                            <img src={Liked} alt="addbag" className="w-5"/>
                                        </button>
                                        <button className="absolute top-[72px] right-0 w-12 h-12 rounded-lg border border-searchBgColor bg-btnBgColor flex items-center justify-center">
                                            <img src={addBag} alt="addbag" className="w-8"/>
                                        </button>
                                    </div>

                                    <div className="flex relative">
                                        <div className="w-[92px] h-[120px] bg-slate-200 rounded-lg mr-4">
                                            <img src="" alt="" />
                                        </div>
                                        <div className="py-3">
                                            <div className="font-AeonikProRegular text-sm mb-[54px]">Eleganza Шапка CHERLO Style</div>
                                            <div className="relative font-AeonikProMedium text-base text-red-700">
                                                <span className="absolute bottom-6 font-AeonikProRegular text-sm text-setTexOpacity">359 000</span>
                                                <span className="text-xl">124 000</span> сум
                                            </div>
                                        </div>
                                        <button className="absolute top-5 right-0 w-12 h-12 rounded-lg border border-searchBgColor bg-btnBgColor flex items-center justify-center">
                                            <img src={Liked} alt="addbag" className="w-5"/>
                                        </button>
                                        <button className="absolute top-[72px] right-0 w-12 h-12 rounded-lg border border-searchBgColor bg-btnBgColor flex items-center justify-center">
                                            <img src={addBag} alt="addbag" className="w-8"/>
                                        </button>
                                    </div>

                                </div>
                            </div>

                            <div className="px-3">
                                <div className="font-AeonikProMedium text-sm mb-2">Верхняя одежда</div>
                                <div className="px-3">
                                    <div className="flex relative mb-2">
                                        <div className="w-[92px] h-[120px] bg-slate-200 rounded-lg mr-4">
                                            <img src="" alt="" />
                                        </div>
                                        <div className="py-3">
                                            <div className="font-AeonikProRegular text-sm mb-[54px] w-[80%]">Mango Man футболка CHERLO Style</div>
                                            <div className=" font-AeonikProMedium text-base">
                                                <span className="text-xl">279 000</span> сум
                                            </div>
                                        </div>
                                        <button className="absolute top-5 right-0 w-12 h-12 rounded-lg border border-searchBgColor bg-btnBgColor flex items-center justify-center">
                                            <img src={Liked} alt="addbag" className="w-5"/>
                                        </button>
                                        <button className="absolute top-[72px] right-0 w-12 h-12 rounded-lg border border-searchBgColor bg-btnBgColor flex items-center justify-center">
                                            <img src={addBag} alt="addbag" className="w-8"/>
                                        </button>
                                    </div>

                                </div>
                            </div>

                            <div className="px-3">
                                <div className="font-AeonikProMedium text-sm mb-2">Верхняя одежда</div>
                                <div className="px-3">
                                    <div className="flex relative mb-2">
                                        <div className="w-[92px] h-[120px] bg-slate-200 rounded-lg mr-4">
                                            <img src="" alt="" />
                                        </div>
                                        <div className="py-3">
                                            <div className="font-AeonikProRegular text-sm mb-[54px] w-[80%]">Mango Man футболка CHERLO Style</div>
                                            <div className=" font-AeonikProMedium text-base">
                                                <span className="text-xl">279 000</span> сум
                                            </div>
                                        </div>
                                        <button className="absolute top-5 right-0 w-12 h-12 rounded-lg border border-searchBgColor bg-btnBgColor flex items-center justify-center">
                                            <img src={Liked} alt="addbag" className="w-5"/>
                                        </button>
                                        <button className="absolute top-[72px] right-0 w-12 h-12 rounded-lg border border-searchBgColor bg-btnBgColor flex items-center justify-center">
                                            <img src={addBag} alt="addbag" className="w-8"/>
                                        </button>
                                    </div>

                                </div>
                            </div>  
                        </div>
                    </div>
                    
                    <div className="shadow-navMenuShadov px-3 py-4">
                        
                        <div className="mb-3 flex items-center justify-between">
                            <div className="font-AeonikProRegular text-setTexOpacity text-sm">
                                <span className="font-AeonikProMedium text-red-700 text-2xl mr-[11px]">814 000</span>
                                1 054 000
                            </div>
                            <div className="flex items-center">
                                <span className="mr-[6px] flex items-center">
                                    <img src={star} alt="star" />
                                </span>
                                <span className="not-italic font-AeonikProMedium text-base leading-4 text-black">
                                2.5{" "}
                                <span className="mr-1 not-italic font-AeonikProRegular text-xs leading-3 text-setTexOpacity">
                                    (20 голосов)
                                </span>
                                </span>
                            </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                            <button className="group w-[49%] rounded-lg bg-btnBgColor border border-searchBgColor flex items-center justify-center pl-[10px] pr-[5px] py-[7px] hover:bg-SignInBgColor transition ease-in duration-300">
                                <span className="group-hover:text-white flex  items-center font-AeonikProRegular text-center text-black text-[14px] mr-2">
                                Страница набора
                                </span>
                                <svg className="group-hover:fill-white group-hover:stroke-white stroke-black" opacity={100} viewBox="-6 -6 36 36" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" > <path d="M12 0c-6.623 0-12 5.377-12 12s5.377 12 12 12 12-5.377 12-12-5.377-12-12-12zm0 1c-6.071 0-11 4.929-11 11s4.929 11 11 11 11-4.929 11-11-4.929-11-11-11zm4.828 11.5l-4.608 3.763.679.737 6.101-5-6.112-5-.666.753 4.604 3.747h-11.826v1h11.828z" />
                                </svg> 
                            </button>   
                            <button className="group w-[49%] rounded-lg bg-btnBgColor border border-searchBgColor flex items-center justify-center pl-[10px] pr-[5px] py-[7px] hover:bg-SignInBgColor transition ease-in duration-300">
                                <span className="group-hover:text-white flex  items-center font-AeonikProRegular text-center text-black text-[14px] mr-2">
                                Набор в корзину
                                </span>
                                <img src={addBag} alt="" className="hover:bg-transparent" />
                                {/* <svg className="group-hover:fill-white group-hover:stroke-white stroke-black" opacity={100} viewBox="-6 -6 36 36" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" > <path d="M12 0c-6.623 0-12 5.377-12 12s5.377 12 12 12 12-5.377 12-12-5.377-12-12-12zm0 1c-6.071 0-11 4.929-11 11s4.929 11 11 11 11-4.929 11-11-4.929-11-11-11zm4.828 11.5l-4.608 3.763.679.737 6.101-5-6.112-5-.666.753 4.604 3.747h-11.826v1h11.828z" />
                                </svg>     */}
                            </button>     
                        </div>

                    </div>
                </div>
            </div>
        </Modal>

        <div className="w-full h-fit flex items-center justify-center mt-14">
            <div className="w-[760px] h-[60px] cursor-pointer not-italic font-AeonikProMedium text-base leading-4 text-center text-black flex items-center justify-center rounded-lg border border-searchBgColor bg-btnBgColor">
            Показать ещё 12 наборов
            </div>
        </div>
    </div>

    );
}

