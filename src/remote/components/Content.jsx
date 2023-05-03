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
const Fullscreen = ({ children, modalId }) => {
  return (
    <>
      <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target={"#" + modalId}
        className="btn maximize-btn btn-white square-button rounded-0 border-0 position-absolute top-0 end-0"
      >
        Fullscreen
        {/* <i className="fa-solid fa-up-right-and-down-left-from-center d-flex fs-4" /> */}
      </button>
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
const Main = ({ children }) => {
  return <div className="mx-2 mx-md-3 mx-lg-4 mx-xxl-5 my-5">{children}</div>;
};

const resetScrollersByClassName = (
  classNames,
  childrenRef,
  beforeStateUpdate
) => {
  classNames.forEach((className) => {
    const scrollerCollection =
      childrenRef.current.getElementsByClassName(className);
    for (let i = 0; i < scrollerCollection.length; i++) {
      const scroller = scrollerCollection[i];
      if (beforeStateUpdate) {
        scroller.style.pointerEvents = "none";
        scroller.scrollTop = 0;
      } else {
        scroller.style.pointerEvents = "auto";
      }
    }
  });
};
const useFullscreenEvents = (childrenRef, scrollersRef, fullscreenModalId) => {
  const [eventStack, setEventStack] = useState([]);

  useLayoutEffect(() => {
    const beforeStateUpdate = false;
    resetScrollersByClassName(
      Object.keys(scrollersRef.current.classNames),
      childrenRef,
      beforeStateUpdate
    );
  }, [eventStack, childrenRef, scrollersRef]);

  const updateEventStack = useCallback(
    (e) => {
      const beforeStateUpdate = true;
      resetScrollersByClassName(
        Object.keys(scrollersRef.current.classNames),
        childrenRef,
        beforeStateUpdate
      );
      const nextEvent = { type: e.type.split(".")[0], id: e.target.id };
      setEventStack((stack) => {
        const previousEvent = stack[stack.length - 1];
        if (previousEvent?.type === "hide" && nextEvent.type === "hidden") {
          return [];
        } else {
          return [...stack, nextEvent];
        }
      });
    },
    [childrenRef, scrollersRef]
  );

  useEventListener("show.bs.modal", updateEventStack);
  useEventListener("hide.bs.modal", updateEventStack);
  useEventListener("shown.bs.modal", updateEventStack);
  useEventListener("hidden.bs.modal", updateEventStack);

  const fullscreenShown =
    eventStack[eventStack.length - 1]?.type === "shown" &&
    eventStack[eventStack.length - 1]?.id === fullscreenModalId;

  return fullscreenShown;
};

export const Content = ({ children }) => {
  const portalNode = useMemo(() => portals.createHtmlPortalNode(), []);
  const childrenRef = useRef();
  const scrollersRef = useRef({
    classNames: {},
  });
  const captureScroller = useCallback((e) => {
    scrollersRef.current.classNames[e.target.className] = true;
  }, []);
  const fullscreenModalId = "fullscreenWindow";
  const fullscreenShown = useFullscreenEvents(
    childrenRef,
    scrollersRef,
    fullscreenModalId
  );

  return (
    <Container>
      <portals.InPortal node={portalNode}>
        <div ref={childrenRef} onScrollCapture={captureScroller}>
          {children}
        </div>
      </portals.InPortal>
      <Fullscreen modalId={fullscreenModalId}>
        {fullscreenShown && <portals.OutPortal node={portalNode} />}
      </Fullscreen>
      <Main>{!fullscreenShown && <portals.OutPortal node={portalNode} />}</Main>
    </Container>
  );
};
