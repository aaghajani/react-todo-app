import React, { useEffect } from "react";
import SearchItem from "../utils/searchItem";
import TaskItem from "../utils/taskItem";
import EndTaskItem from "../utils/endTaskItem";
const CenterSection = (props) => {
  useEffect(() => {}, [props.dataState]);
  let taskItems = props.dataState
    .reverse()
    .map((data, index) =>
      data.done ? (
        <TaskItem
          key={index}
          id={data.id}
          title={data.title}
          description={data.description}
          removed={props.removeItem}
          editItem={props.editItem}
          toggleTask={props.toggleTask}
        />
      ) : null
    );
  let endTaskItems = props.dataState
    .reverse()
    .map((data, index) =>
      !data.done ? (
        <EndTaskItem
          key={index}
          id={data.id}
          title={data.title}
          description={data.description}
          removed={props.removeItem}
          editItem={props.editItem}
          toggleTask={props.toggleTask}
        />
      ) : null
    );

  return (
    <React.Fragment>
      <div className="col-12 col-md-6">
        <div className="row p-3">
          <div className="col-md-12 mb-3">
            <SearchItem
              searchFilterFunction={props.searchFilterFunction}
              setArrayHolder={props.setArrayHolder}
              dataState={props.dataState}
            />
          </div>
          <div className="col-md-12">{taskItems}</div>
          <div className="col-md-12">{endTaskItems}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CenterSection;
