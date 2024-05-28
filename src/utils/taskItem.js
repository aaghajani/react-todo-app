const TaskItem = (props) => {
  return (
    <div className="p-3 w-100 card mb-3">
      <h3 className="m-0">{props.title}</h3>
      <hr />
      <p className="m-0">{props.description}</p>
      <hr />
      <div>
        <button
          type="button"
          className="btn btn-success"
          title="اتمام"
          onClick={() => {
            props.toggleTask(props.id);
          }}
        >
          ✓
        </button>
        <button
          type="button"
          className="btn btn-danger mx-1"
          title="حذف"
          onClick={() => props.removed(props.id)}
        >
          ✗
        </button>
        <button
          type="button"
          className="btn btn-warning"
          title="ویرایش"
          onClick={() => props.editItem(props.id)}
        >
          ◓
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
