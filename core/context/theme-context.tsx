"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import themesEnum from '../dictionary/theme-enum';
interface Props {
  children?: ReactNode
}
type ThemeContext = {
  themeValue: string,
  setThemeValue: React.Dispatch<React.SetStateAction<string>>;
}
const IndiaIndexThemeContext = createContext<ThemeContext | undefined>(undefined);
export function ThemeContext({ children }: Props) {
    const [themeValue, setThemeValue] = useState(themesEnum.light);
    useEffect(()=>{
      setThemeValue(localStorage.getItem("currentTheme") || themesEnum.light)
    }, [])
    return (
      <IndiaIndexThemeContext.Provider value={{themeValue, setThemeValue}}>
        {children}
      </IndiaIndexThemeContext.Provider>
    );
}
export function useIndiaIndexThemeContext(){
    return useContext(IndiaIndexThemeContext);
}