import React from "react";
import { PageProps } from "gatsby";
const DEFAULT_LOCALE = "en";
const AppLocaleContext = React.createContext({ locale: DEFAULT_LOCALE });

export const AppLocaleProvider = ({ children }) => {
  const [locale, setLocale] = React.useState(DEFAULT_LOCALE);
  return (
    <AppLocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </AppLocaleContext.Provider>
  );
};

export const useAppLocaleContext = () => {
  const context = React.useContext(AppLocaleContext);
  return context;
};

export const PageLocale: React.FC<PageProps> = ({
  children,
  pageContext,
  location,

  ...rest
}) => {
  const { locale, setLocale } = useAppLocaleContext();
  console.log(location);
  React.useEffect(() => {
    rest.pageResources.page.path !== "/404.html" &&
      setLocale(pageContext.locale);
  }, [locale, pageContext.locale, setLocale]);
  return children;
};
