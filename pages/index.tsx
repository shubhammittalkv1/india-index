import { useEffect, useState } from 'react';
import aditiCompanyData from "../core/data/aditi-toy-company-data";
import CompanyProfile from '../routes/company-profile';
import { lightTheme, darkTheme, GlobalStyles } from "../ThemeConfig";
import { useIndiaIndexThemeContext } from '../core/context/theme-context';
import themesEnum from '../core/dictionary/theme-enum';
export default function Home({companyProfileData}) {
  const { themeValue, setThemeValue } = useIndiaIndexThemeContext();
  const [theme, setTheme] = useState(themesEnum.light);
  useEffect(() => {
    let value = localStorage.getItem("currentTheme") || themesEnum.light;
    setTheme(value);
  }, [])
  useEffect(()=>{
    if(!!themeValue && themeValue !== theme){
      setTheme(themeValue);
    }
  },[themeValue]);
  return (
    <main className={theme === themesEnum.dark ? "dark": ""}>
      <GlobalStyles theme={theme == themesEnum.light ? lightTheme : darkTheme} />
      <CompanyProfile data={companyProfileData}></CompanyProfile>
    </main>
  )
}
// This function runs only on the server side
export async function getStaticProps() {
  const companyProfileData = aditiCompanyData;
  return { props: { companyProfileData } }
}