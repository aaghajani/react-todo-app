const EndTaskItem = (props) => {
  return (
    <div className="p-3 w-100 card bg-transparent border border-light text-white mb-3">
      <h3 className="text-decoration-line-through m-0">{props.title}</h3>
      <hr />
      <p className="text-decoration-line-through m-0">{props.description}</p>
      <hr />
      <div>
        <button
          type="button"
          className="btn btn-outline-success"
          title="بازگرداندن"
          onClick={() => {
            props.toggleTask(props.id);
          }}
        >
          ↺
        </button>
        <button
          type="button"
          className="btn btn-outline-danger mx-1"
          title="حذف"
          onClick={() => props.removed(props.id)}
        >
          ✗
        </button>
        <button
          type="button"
          className="btn btn-outline-warning"
          title="ویرایش"
          onClick={() => props.editItem(props.id)}
        >
          ◓
        </button>
      </div>
    </div>
  );
};

export default EndTaskItem;
