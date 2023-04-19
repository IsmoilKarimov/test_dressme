import { createContext, useState } from "react";
export const dressMainData = createContext();
export const DressMenu = ({ children }) => {
  const [dressInfo, setDressInfo] = useState({
    type: 1111,
    ClothesBorder: 1,
    yandexOpenMenu: false,
  });
  return (
    <dressMainData.Provider value={[dressInfo, setDressInfo]}>
      {children}
    </dressMainData.Provider>
  );
};
