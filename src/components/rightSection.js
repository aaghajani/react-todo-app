import React from "react";
import TitleItem from "../utils/titleItem";
import CreateItem from "../utils/createItem";
import RemoveItem from "../utils/removeItem";

const RightSection = (props) => {
  return (
    <React.Fragment>
      <div className={`col-12 col-md-3 ${props.theme} todo-section`}>
        <div className="p-3 flex-fill sticky-top vh-100">
          <div className="row">
            <TitleItem />
            <hr />
            <CreateItem
              handleSubmit={props.handleSubmit}
              titleState={props.titleState}
              descriptionState={props.descriptionState}
              setTitleState={props.setTitleState}
              setDescriptionState={props.setDescriptionState}
              editState={props.editState}
            />
            <hr />
            <RemoveItem
              setDataState={props.setDataState}
              removeEndTasks={props.removeEndTasks}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RightSection;
