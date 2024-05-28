const DisplayItem = (props) => {
  return (
    <div className="card p-2 mb-3">
      <div className="alert alert-primary fs-6">☶ حالت نمایش لیست</div>
      <div className="row mb-2">
        <div className="col-md-4 text-end d-none d-md-block">اول</div>
        <div className="col-md-4">
          <label className="c-switch">
            <input
              type="checkbox"
              onClick={() => {
                props.toggleTheme();
              }}
            />

            <span className="c-slider c-round"></span>
          </label>
        </div>
        <div className="col-md-4 text-start d-none d-md-block">دوم</div>
      </div>
    </div>
  );
};

export default DisplayItem;
