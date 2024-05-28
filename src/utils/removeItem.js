const RemoveItem = (props) => {
  let remove = "هشدار !\nاز پاکسازی کارهای انجام شده ؟؟";
  let allRemove = "هشدار !\nاز پاکسازی همه آیتم ها مطمئنید ؟؟";

  return (
    <div className="card p-2">
      <div className="alert alert-danger fs-6">- پاکسازی</div>
      <button
        type="button"
        className="btn btn-danger p-3 fs-6"
        onClick={props.removeEndTasks}
      >
        پاکسازی کارهای انجام شده
      </button>
      <button
        type="button"
        className="btn btn-danger mt-3 p-3 fs-6"
        onClick={() => window.confirm(allRemove) && props.setDataState([])}
      >
        پاکسازی همه آیتم ها
      </button>
    </div>
  );
};

export default RemoveItem;
