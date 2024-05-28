import React from "react";
import TimeItem from "../utils/timeItem";
import LogoItem from "../utils/logoItem";
import DisplayItem from "../utils/displayItem";
const LeftSection = (props) => {
  const count = props.dataState.filter((item) =>
    item.done === true ? true : false
  ).length;
  const doneCount = props.dataState.filter((item) =>
    item.done === false ? true : false
  ).length;

  return (
    <React.Fragment>
      <div className={`col-12 col-md-3 ${props.theme} todo-section`}>
        <div className="p-3 sticky-top row vh-100">
          <div className="w-50 m-auto mb-3">
            <LogoItem />
          </div>
          <hr />
          <div className="alert alert-success p-3" role="alert">
            # {doneCount} کار انجام شده
          </div>
          <hr />
          <div className="alert alert-danger p-3" role="alert">
            # {count} کار انجام نشده
          </div>
          <hr />
          <div className="alert alert-warning p-3" role="alert">
            🕜 <TimeItem />
          </div>
          <hr />
          <DisplayItem toggleTheme={props.toggleTheme} theme={props.theme} />
          <hr />
          <a
            href="https://siteintech.ir"
            alt="siteintech.ir"
            className="btn btn-outline-light"
            target="blank"
          >
            طراحی شده توسط سایت‌اینتک 💎
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LeftSection;
