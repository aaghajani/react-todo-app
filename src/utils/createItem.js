const CreateItem = (props) => {
  return (
    <form className="card p-2 mb-3" onSubmit={props.handleSubmit}>
      <div className="alert alert-primary fs-6">+ ایجاد کار جدید</div>
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          placeholder=""
          value={props.titleState}
          onChange={(e) => props.setTitleState(e.target.value)}
        />
        <label>عنوان</label>
      </div>
      <div className="form-floating mt-3">
        <textarea
          className="form-control"
          placeholder=""
          value={props.descriptionState}
          onChange={(e) => props.setDescriptionState(e.target.value)}
          style={{ resize: "none" }}
        />
        <label>توضیحات</label>
      </div>
      <button type="submit" className="btn btn-success mt-3 p-3 fs-6">
        {props.editState ? "ویرایش" : "ثبت"}
      </button>
    </form>
  );
};

export default CreateItem;
