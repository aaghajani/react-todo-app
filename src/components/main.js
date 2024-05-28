import React from "react";
const Main = ({ children }) => {
  return (
    <React.Fragment>
      <div className="container text-center">
        <div className="row g-2">{children}</div>
      </div>
    </React.Fragment>
  );
};

export default Main;
