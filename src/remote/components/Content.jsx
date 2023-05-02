export const Content = ({ children }) => {
  return (
    <div
      className="col-12 col-xxl-10 offset-xxl-1 bg-white content-shadow border position-relative"
      style={{
        paddingBottom: 12,
        paddingTop: 12,
      }}
    >
      {/* <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#fullscreenDashboard"
        className="sc-bcXHqe iGoMvj btn square-button rounded-0 border-0 position-absolute top-0 end-0"
      >
        <i className="fa-solid fa-up-right-and-down-left-from-center d-flex fs-4" />
      </button> */}
      <div className="mx-2 mx-md-3 mx-lg-4 mx-xxl-5 my-5">{children}</div>
      {/* <div
        className="modal fade"
        id="fullscreenDashboard"
        tabIndex={-1}
        aria-labelledby="fullscreenDashboardLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="fullscreenDashboardLabel">
                Eastern Kentucky University
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body" />
          </div>
        </div>
      </div> */}
    </div>
  );
};
