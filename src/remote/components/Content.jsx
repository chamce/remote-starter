import * as portals from "react-reverse-portal";
import { useMemo, useState, useCallback, useRef, useLayoutEffect } from "react";
import { useEventListener } from "../hooks/useEventListener";

const Container = ({ children, length = 10 }) => {
  const columnClassName =
    "col-12 col-xxl-" +
    length +
    " offset-xxl-" +
    (12 - length) / 2 +
    " bg-white content-shadow position-relative";

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
const Modal = ({ children, name }) => {
  return (
    <>
      <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target={"#" + name}
        className="btn maximize-btn btn-white square-button rounded-0 border-0 position-absolute top-0 end-0"
      >
        Fullscreen
        {/* <i className="fa-solid fa-up-right-and-down-left-from-center d-flex fs-4" /> */}
      </button>
      <div
        className="modal fade"
        id={name}
        tabIndex={-1}
        aria-labelledby={name + "Label"}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id={name + "Label"}>
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

const resetScrollersByClassName = (ref, classNames, beforeOpening) => {
  classNames.forEach((className) => {
    const scrollerCollection = ref.current.getElementsByClassName(className);
    for (let i = 0; i < scrollerCollection.length; i++) {
      const scroller = scrollerCollection[i];
      if (beforeOpening) {
        scroller.style.pointerEvents = "none";
        scroller.scrollTop = 0;
      } else {
        scroller.style.pointerEvents = "auto";
      }
    }
  });
};
const useModalEvents = (name) => {
  const node = useMemo(() => portals.createHtmlPortalNode(), []);

  const scrollersRef = useRef({
    classNames: {},
  });
  const handleScrollCapture = useCallback(
    (e) => {
      scrollersRef.current.classNames[e.target.className] = true;
    },
    [scrollersRef]
  );

  const ref = useRef();
  const [eventStack, setEventStack] = useState([]);

  // maybe should only reset scrollers on before hide, and after shown
  useLayoutEffect(() => {
    const beforeOpening = false;
    const classNames = Object.keys(scrollersRef.current.classNames);
    resetScrollersByClassName(ref, classNames, beforeOpening);
  }, [eventStack]);

  const handleEventOccured = useCallback((e) => {
    const beforeOpening = true;
    const classNames = Object.keys(scrollersRef.current.classNames);
    resetScrollersByClassName(ref, classNames, beforeOpening);
    const nextEvent = { type: e.type.split(".")[0], target: e.target.id };
    setEventStack((stack) => {
      const previousEvent = stack[stack.length - 1];
      if (previousEvent?.type === "hide" && nextEvent.type === "hidden") {
        return [];
      } else {
        return [...stack, nextEvent];
      }
    });
  }, []);

  useEventListener("show.bs.modal", handleEventOccured);
  useEventListener("hide.bs.modal", handleEventOccured);
  useEventListener("shown.bs.modal", handleEventOccured);
  useEventListener("hidden.bs.modal", handleEventOccured);

  const modalShown = useMemo(
    () =>
      eventStack[eventStack.length - 1]?.type === "shown" &&
      eventStack[eventStack.length - 1]?.target === name,
    [eventStack, name]
  );

  return [node, ref, handleScrollCapture, modalShown];
};

export const Content = ({ children }) => {
  const modalName = "fullscreenWindow";
  const [node, ref, handleScrollCapture, modalShown] =
    useModalEvents(modalName);

  return (
    <Container>
      <portals.InPortal node={node}>
        <div ref={ref} onScrollCapture={handleScrollCapture}>
          {children}
        </div>
      </portals.InPortal>
      <div className="mx-2 mx-md-3 mx-lg-4 mx-xxl-5 my-5">
        {!modalShown && <portals.OutPortal node={node} />}
      </div>
      <Modal name={modalName}>
        {modalShown && <portals.OutPortal node={node} />}
      </Modal>
    </Container>
  );
};
