import { InPortal, OutPortal } from "react-reverse-portal";
import { useFullscreenModal } from "../hooks/useFullscreenModal";

const Container = ({ children, length = 10 }) => {
  const cols = "col-12 col-xxl-" + length + " offset-xxl-" + (12 - length) / 2;

  return (
    <div className="container">
      <div className="row">
        <div className={"page rounded shadow-3 " + cols}>
          {/* <Fold /> */}
          {children}
        </div>
      </div>
    </div>
  );
};
const Fold = () => {
  return (
    <div className="position-absolute top-0 start-0">
      <div className="position-relative fold-rect">
        <div className="position-absolute bottom-100 end-0 h-100 z-2 bg-body-color inset-shadow hypot-rect" />
        <div className="position-absolute bottom-100 end-0 h-100 z-3 bg-body-color hypot-rect-trans-up" />
        <div className="position-absolute bottom-100 end-0 h-100 w-100 z-2 rounded-1 bg-body-color" />
        <div className="position-absolute h-100 w-100 z-2 bg-body-color rounded-1 left-upright" />
      </div>
    </div>
  );
};
const Main = ({ children }) => {
  return <div className="mx-2 mx-md-3 mx-lg-4 mx-xxl-5 my-5">{children}</div>;
};
const Fullscreen = ({ children, modalId }) => {
  return (
    <>
      <div
        className="modal fade"
        id={modalId}
        tabIndex={-1}
        aria-labelledby={modalId + "Label"}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id={modalId + "Label"}>
                Eastern Kentucky University
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Content = ({ children, fullscreenModalId }) => {
  const {
    portalNode,
    childrenRef,
    captureScroller,
    childrenWithModalButton,
    fullscreenShown,
  } = useFullscreenModal(children, fullscreenModalId);

  return (
    <Container>
      <InPortal node={portalNode}>
        <div ref={childrenRef} onScrollCapture={captureScroller}>
          {childrenWithModalButton}
        </div>
      </InPortal>
      <Main>{!fullscreenShown && <OutPortal node={portalNode} />}</Main>
      <Fullscreen modalId={fullscreenModalId}>
        {fullscreenShown && <OutPortal node={portalNode} />}
      </Fullscreen>
    </Container>
  );
};
