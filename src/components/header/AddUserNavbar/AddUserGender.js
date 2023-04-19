import React, { useContext } from "react";
import { AutummFemale, AutummMale, SpringFemale, SpringMale, SummerFemale, SummerMale, WinterFemale, WinterMale } from "../../../assets/imgs";
import { dressMainData } from "../../../ContextHook/ContextMenu";
import { MdAdd } from "react-icons/md"
const AddUserGender = () => {
    const [dressInfo] = useContext(dressMainData)
    let genderStyle = ''
    if (dressInfo?.type === 1111) {
        genderStyle = "focus:text-borderSpring focus:bg-bgSpring focus:border-borderSpring"
    }
    if (dressInfo?.type === 2222) {
        genderStyle = "focus:text-borderSummer focus:bg-bgSummer focus:border-borderSummer"
    }
    if (dressInfo?.type === 3333) {
        genderStyle = "focus:text-borderAutumm focus:bg-bgAutumm focus:border-borderAutumm"
    }
    if (dressInfo?.type === 4444) {
        genderStyle = "focus:text-borderWinter focus:bg-bgWinter focus:border-borderWinter"
    }

    const personItems = [
        { id: 1111, man: SpringMale, woman: SpringFemale },
        { id: 2222, man: SummerMale, woman: SummerFemale },
        { id: 3333, man: AutummMale, woman: AutummFemale },
        { id: 4444, man: WinterMale, woman: WinterFemale },
    ]


    return (
        <div className="flex flex-col justify-center items-center m-0 p-0 box-border ss:hidden md:block">
            <div className='max-w-[1280px] w-[100%] flex justify-center  py-3 items-center m-auto   '>
                {
                    personItems?.filter(value => value.id === dressInfo?.type).map(data => {
                        return (
                            <div key={data?.id} className="w-fit flex items-center ">
                                <button className={`mr-1 ${genderStyle}  w-[136px] h-[44px] px-[16px] justify-between mr-2 flex items-center bg-btnBgColor border border-searchBgColor rounded-lg`}>
                                    <img className="mr-3" src={data?.woman} alt="female" />
                                    <span className="mt-1 font-AeonikProMedium not-italic text-sm leading-4 tracking-[0,16px]">Женщинам</span>
                                </button>
                                <button className={`mr-1 ${genderStyle}  w-fit h-[44px] px-[16px] justify-between mr-2 flex items-center bg-btnBgColor border border-searchBgColor rounded-lg`}>
                                    <span className="mr-3" ><MdAdd /></span>
                                    <span className=" mt-1 not-italic font-AeonikProMedium text-sm leading-4 tracking-[0,16px]">Добавить персонажа</span>
                                </button>
                                <button className={`  ${genderStyle} w-[136px] h-[44px]  px-[16px] justify-between flex items-center bg-btnBgColor border border-searchBgColor mr-2 rounded-lg`}>
                                    <img className="mr-3" src={data?.man} alt="male" />
                                    <span className="mt-1 font-AeonikProMedium not-italic  text-sm leading-4 tracking-[0,16px]">Мужчинам</span>
                                </button>
                            </div>
                        )
                    })
                }

            </div >
        </div >
    )
}

export default AddUserGender