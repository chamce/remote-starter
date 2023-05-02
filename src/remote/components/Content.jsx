const Container = ({ children, length = 10 }) => {
  const columnClassName =
    "col-12 col-xxl-" +
    length +
    " offset-xxl-" +
    (12 - length) / 2 +
    " bg-white content-shadow border position-relative";

  return (
    <div className="container">
      <div className="row">
        <div
          className={columnClassName}
          style={{
            paddingBottom: 12,
            paddingTop: 12,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
const MaximizeButton = ({ children }) => {
  return (
    <button
      type="button"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      className="btn btn-white square-button rounded-0 border-0 position-absolute top-0 end-0"
    >
      {children}
    </button>
  );
};
const Modal = () => {
  <div
    className="modal fade"
    id="exampleModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">
            Modal title
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">...</div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>;
};

export const Content = ({ children }) => {
  return (
    <Container>
      {/* <MaximizeButton>
        <i className="fa-solid fa-up-right-and-down-left-from-center d-flex fs-4" />
      </MaximizeButton> */}
      <div className="mx-2 mx-md-3 mx-lg-4 mx-xxl-5 my-5">{children}</div>
      {/* <Modal /> */}
    </Container>
  );
};
