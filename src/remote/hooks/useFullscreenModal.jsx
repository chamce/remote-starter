import {
  useState,
  useMemo,
  useLayoutEffect,
  useCallback,
  cloneElement,
  useRef,
} from "react";
import { useEventListener } from "./useEventListener";
import { createHtmlPortalNode } from "react-reverse-portal";

const resetScrollersByClassName = (classNames, childrenRef, transitioning) => {
  classNames.forEach((className) => {
    const scrollerCollection =
      childrenRef.current.getElementsByClassName(className);
    for (let i = 0; i < scrollerCollection.length; i++) {
      const scroller = scrollerCollection[i];
      if (transitioning) {
        scroller.style.pointerEvents = "none";
        scroller.scrollTop = 0;
        // scroller.style.opacity = 0;
      } else {
        scroller.style.pointerEvents = "auto";
        // scroller.style.opacity = 1;
      }
    }
  });
};

export const useFullscreenModal = (children, fullscreenModalId) => {
  const portalNode = useMemo(() => createHtmlPortalNode(), []);

  const childrenRef = useRef();

  const scrollersRef = useRef({
    classNames: {},
  });

  const captureScroller = useCallback((e) => {
    scrollersRef.current.classNames[e.target.className] = true;
  }, []);

  const [eventStack, setEventStack] = useState([]);

  const shouldShowBackButton = useMemo(() => {
    // hide, show, hidden, shown
    const last = eventStack[eventStack.length - 1];
    const secondLast = eventStack[eventStack.length - 2];
    const thirdLast = eventStack[eventStack.length - 3];
    const fourthLast = eventStack[eventStack.length - 4];
    const firstHideIndex = eventStack.findIndex((obj) => obj?.type === "hide");
    if (
      fourthLast?.type === "hide" &&
      thirdLast?.type === "show" &&
      secondLast?.type === "hidden" &&
      last?.type === "shown" &&
      firstHideIndex !== -1
    ) {
      if (eventStack[firstHideIndex]?.id === fullscreenModalId) {
        return true;
      }
    }
    return false;
  }, [eventStack, fullscreenModalId]);

  const dynamicModalButton = useMemo(() => {
    const anyModalShown = eventStack[eventStack.length - 1]?.type === "shown";
    if (anyModalShown && shouldShowBackButton) {
      return (
        <button
          type="button"
          className="btn-close modal-back-btn"
          data-bs-toggle="modal"
          data-bs-target={"#" + fullscreenModalId}
        />
      );
    }
    if (anyModalShown) {
      return (
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      );
    }
    return null;
  }, [eventStack, shouldShowBackButton, fullscreenModalId]);

  const childrenWithModalButton = useMemo(
    () => cloneElement(children, { dynamicModalButton }),
    [children, dynamicModalButton]
  );

  useLayoutEffect(() => {
    const lastEvent = eventStack[eventStack.length - 1];
    const shownOrHidden =
      lastEvent?.type === "shown" || lastEvent?.type === undefined;
    if (shownOrHidden) {
      const classNames = Object.keys(scrollersRef.current.classNames);
      const transitioning = false;
      resetScrollersByClassName(classNames, childrenRef, transitioning);
    }
  }, [eventStack, childrenRef, scrollersRef]);

  const updateEventStack = useCallback(
    (e) => {
      const nextEvent = { type: e.type.split(".")[0], id: e.target.id };
      const showOrHide =
        nextEvent.id === fullscreenModalId &&
        (nextEvent.type === "show" || nextEvent.type === "hide");
      if (showOrHide) {
        const classNames = Object.keys(scrollersRef.current.classNames);
        const transitioning = true;
        resetScrollersByClassName(classNames, childrenRef, transitioning);
      }
      setEventStack((stack) => {
        const previousEvent = stack[stack.length - 1];
        if (previousEvent?.type === "hide" && nextEvent.type === "hidden") {
          return [];
        } else {
          return [...stack, nextEvent];
        }
      });
    },
    [childrenRef, scrollersRef, fullscreenModalId]
  );

  useEventListener("show.bs.modal", updateEventStack);
  useEventListener("hide.bs.modal", updateEventStack);
  useEventListener("shown.bs.modal", updateEventStack);
  useEventListener("hidden.bs.modal", updateEventStack);

  const fullscreenShown =
    eventStack[eventStack.length - 1]?.type === "shown" &&
    eventStack[eventStack.length - 1]?.id === fullscreenModalId;

  return {
    portalNode,
    childrenRef,
    captureScroller,
    childrenWithModalButton,
    fullscreenShown,
  };
};
