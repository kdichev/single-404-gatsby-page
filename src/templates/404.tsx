import { PageProps } from "gatsby";
import React from "react";

const data = {
  en: "Hello World",
  "da-dk": "Hej Verden",
  "bg-bg": "Здравей свят",
};

const isBrowser = () => typeof window !== `undefined`;

const ErrorPage: React.FC<
  PageProps<any, { locale: string; locales: string[] }>
> = ({ location, pageContext }) => {
  const selectedLocale = React.useMemo(
    () =>
      pageContext.locales.find((locale) =>
        location.pathname.includes(locale)
      ) || pageContext.locale,
    [pageContext.locales, location.pathname]
  );
  return <>{isBrowser() && <h1>404: {data[selectedLocale]}</h1>}</>;
};

export default ErrorPage;
