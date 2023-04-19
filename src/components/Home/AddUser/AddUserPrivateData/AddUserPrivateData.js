import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { dressMainData } from "../../../../ContextHook/ContextMenu";
import {
  AutummBoy,
  AutummChild,
  AutummFemale,
  AutummGirl,
  AutummMale,
  formArrowRightCircle,
  formCalendar,
  formUser,
  SpringBoy,
  SpringChild,
  SpringFemale,
  SpringGirl,
  SpringMale,
  SummerBoy,
  SummerChild,
  SummerFemale,
  SummerGirl,
  SummerMale,
  WinterBoy,
  WinterChild,
  WinterFemale,
  WinterGirl,
  WinterMale,
} from "../../../../assets/imgs";
import { DatePicker, Popover, Space } from "antd";
import { BiChevronUp } from "react-icons/bi";

const AddUserPrivateInfo = () => {

  const [dressInfo] = useContext(dressMainData);

  let genderStyle = "";
  if (dressInfo?.type === 1111) {
    genderStyle =
      "focus:text-borderSpring focus:bg-bgSpring focus:border focus:border-borderSpring focus:text-borderSpring";
  }
  if (dressInfo?.type === 2222) {
    genderStyle =
      "focus:text-borderSummer focus:bg-bgSummer focus:border focus:border-borderSummer focus:text-borderSummer";
  }
  if (dressInfo?.type === 3333) {
    genderStyle =
      "focus:text-borderAutumm focus:bg-bgAutumm focus:border focus:border-borderAutumm focus:text-borderAutumm";
  }
  if (dressInfo?.type === 4444) {
    genderStyle =
      "focus:text-borderWinter focus:bg-bgWinter focus:border focus:border-borderWinter focus:text-borderWinter";
  }

  const PersonTypeArray = [
    {
      id: 1111,
      man: SpringMale,
      woman: SpringFemale,
      boy: SpringBoy,
      girl: SpringGirl,
      childs: SpringChild,
    },
    {
      id: 2222,
      man: SummerMale,
      woman: SummerFemale,
      boy: SummerBoy,
      girl: SummerGirl,
      childs: SummerChild,
    },
    {
      id: 3333,
      man: AutummMale,
      woman: AutummFemale,
      boy: AutummBoy,
      girl: AutummGirl,
      childs: AutummChild,
    },
    {
      id: 4444,
      man: WinterMale,
      woman: WinterFemale,
      boy: WinterBoy,
      girl: WinterGirl,
      childs: WinterChild,
    },
  ];

  // ----------------Month state management----------------------------
  const [openMonth, setOpenMonth] = useState(false);

  const handleOpenChangeWear = (newOpen) => {
    setOpenMonth(newOpen);
  };
  const [selectMonth, setselectMonth] = useState("Месяц");
  const handleMonthValue = (value) => {
    setselectMonth(value);
    setOpenMonth(false);
  };
  const monthList = [
    { id: 1, type: "Январь" },
    { id: 2, type: "Февраль" },
    { id: 3, type: "Март" },
    { id: 4, type: "Апрель" },
    { id: 5, type: "Май" },
    { id: 6, type: "Июнь" },
    { id: 7, type: "Июль" },
    { id: 8, type: "Август" },
    { id: 9, type: "Сентябрь" },
    { id: 10, type: "Октябрь" },
    { id: 11, type: "Ноябрь" },
    { id: 12, type: "Декабрь" },
  ];
  const contentMonth = (
    <div className="w-[125px] h-44 overflow-auto scrollbar dark:scrollbarkdark">
      {monthList.map((data) => {
        return (
          <p
            key={data?.id}
            onClick={() => {
              handleMonthValue(data?.type);
            }}
            className={`w-full h-[30px] flex items-center justify-center not-italic cursor-pointer font-AeonikProMedium text-sm leading-4 text-center hover:bg-bgColor`}
          >
            {data?.type}
          </p>
        );
      })}
    </div>
  );

  const { RangePicker } = DatePicker;

  return (
    <main className="">
      {/* <AddUserPrivateSkeleton/> */}
      <div className="flex flex-col px-10 py-6 w-[440px] rounded-lg border border-solid border-searchBgColor my-8 mx-auto">
        <div className="text-[20px] font-AeonikProMedium mb-3">
          Добавить персонаж
        </div>
        <p className="text-textColor2 font-AeonikProRegular mb-6">
          Добавляйте информацию о себе или близких людей в качестве персонажа
        </p>
        <div>
          {PersonTypeArray?.filter((data) => data.id == dressInfo?.type).map(
            (data) => {
              return (
                <div>
                  <div className="flex flex-col gap-y-2 gap-x-2 mb-7">
                    <div className="w-full flex-row flex items-center justify-between gap-x-2">
                      <button
                        className={`w-[176px] ${genderStyle} bg-btnBgColor border border-solid border-searchBgColor rounded-lg px-[55px] py-3`}
                      >
                        <img
                          src={data?.man}
                          alt=""
                          className="mb-[10px] mx-auto"
                        />
                        <span className="font-AeonikProMedium">Мужчина</span>
                      </button>
                      <button
                        className={`w-[176px] ${genderStyle} bg-btnBgColor border border-solid border-searchBgColor rounded-lg px-[55px] py-3`}
                      >
                        <img
                          src={data?.woman}
                          alt=""
                          className="mb-[10px] mx-auto"
                        />
                        <span className="font-AeonikProMedium">Женщина</span>
                      </button>
                    </div>
                  </div>

                  <form>
                    <label
                      htmlFor="firstname"
                      className="mb-[6px] font-AeonikProRegular text-sm"
                    >
                      Имя
                    </label>
                    <div className="flex items-center justify-between border border-solid border-searchBgColor p-[14px] rounded-lg bg-btnBgColor mb-4">
                      <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        className="w-[90%] bg-transparent font-AeonikProMedium text-base"
                      />
                      <button>
                        <img src={formUser} alt="" />
                      </button>
                    </div>

                    <label
                      htmlFor="lastname"
                      className="mb-[6px] font-AeonikProRegular text-sm"
                    >
                      {" "}
                      Фамилия{" "}
                    </label>
                    <div className="flex items-center justify-between border border-solid border-searchBgColor p-[14px] rounded-lg bg-btnBgColor mb-4">
                      <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        className="w-[90%] bg-transparent font-AeonikProMedium text-base"
                      />
                      <button>
                        <img src={formUser} alt="" />
                      </button>
                    </div>

                    <label
                      htmlFor="bdate"
                      className="mb-[6px] font-AeonikProRegular text-sm"
                    >
                      {" "}
                      Дата рождения{" "}
                    </label>
                    <div className="flex items-center justify-start border border-solid border-searchBgColor rounded-lg bg-btnBgColor mb-4 w-full">
                      <span className="h-full w-[15%] py-[14px] border-r border-searchBgColor">
                        <img src={formCalendar} alt="" className="mx-4" />
                      </span>
                      <input
                        type="number"
                        name="day"
                        placeholder="День"
                        id="day"
                        className="w-[19%] h-12 flex items-center bg-btnBgColor font-AeonikProRegular text-[15px] px-[14px] border-r border-searchBgColor [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      />

                      <Popover
                        open={openMonth}
                        onOpenChange={handleOpenChangeWear}
                        className="w-[40%] px-[17px] h-12 bg-btnBgColor border-r flex items-center justify-between cursor-pointer select-none group"
                        trigger="click"
                        content={contentMonth}
                      >
                        <span className="not-italic font-AeonikProMedium text-center mt-1 text-sm leading-4 text-black">
                          {selectMonth}
                        </span>
                        <span>
                          <BiChevronUp
                            size={20}
                            style={{ color: "#c2c2c2" }}
                            className={`${
                              openMonth ? "rotate-[180deg]" : ""
                            } duration-200`}
                          />{" "}
                        </span>
                      </Popover>

                      <Space
                        className="w-[26%] cursor-pointer"
                        direction="vertical"
                        size={12}
                        options={["Hide"]}
                      >
                        <div className="flex items-center">
                          <span>
                            <DatePicker
                              className="font-AeonikProRegular text-base flex items-center"
                              placeholder="Год"
                              picker="year"
                              bordered={false}
                              suffixIcon
                            />
                          </span>
                          <span>
                            <BiChevronUp
                              size={20}
                              style={{ color: "#c2c2c2" }}
                              className="mr-2"
                            />{" "}
                          </span>
                        </div>
                      </Space>
                    </div>

                    <Link
                      to="/add_user_body_data"
                      className="w-full bg-blue-500 flex items-center justify-center rounded-lg text-white py-4"
                    >
                      <span className="mr-[10px]">Следующий шаг</span>
                      <img src={formArrowRightCircle} alt="" />
                    </Link>
                  </form>
                </div>
              );
            }
          )}
        </div>
      </div>
    </main>
  );
};
export default AddUserPrivateInfo;
