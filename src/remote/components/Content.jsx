import { InPortal, OutPortal } from "react-reverse-portal";
import { useFullscreenModal } from "../hooks/useFullscreenModal";

const Container = ({ children, length = 10 }) => {
  const cols = "col-12 col-xxl-" + length + " offset-xxl-" + (12 - length) / 2;

  return (
    <div className="container">
      <div className="row">
        <div className={"page bg-warning shadow-4 " + cols}>{children}</div>
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
