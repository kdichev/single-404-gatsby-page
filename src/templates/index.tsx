import { Link } from "gatsby";
import React from "react";

const IndexPage = ({ pageContext }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>Selected Locale: {pageContext.locale}</div>
      <Link to={`/unknown`}>link to broken root page</Link>
      <Link to={`/en/unknown`}>link to broken en page</Link>
      <Link to={`/da-dk/unknown`}>link to broken dk page</Link>
      <Link to={`/bg-bg/unknown`}>link to broken bg page</Link>
    </div>
  );
};

export default IndexPage;
