import { useCallback, useRef, useState } from "react";
import { useClickOutside } from "../hooks/useClickOutside";

const submitSearch = (e) => {
  e.preventDefault();
  const query = e.target[0];
  const web = e.target[1];
  const domain = web.checked
    ? "https://www.eku.edu/search/?q="
    : "https://tools.eku.edu/people-search?search_by=f&advanced=1&search=Search&area=&search_name=";
  const location = domain + query.value;
  window.open(location, "_blank");
};

export const SearchBar = () => {
  const popover = useRef();
  const [isOpen, toggle] = useState(false);

  const close = useCallback(() => toggle(false), []);
  useClickOutside(popover, close);

  return (
    <form
      ref={popover}
      onSubmit={submitSearch}
      className="d-flex position-relative"
      role="search"
    >
      <input
        autoComplete="off"
        onClick={() => toggle(true)}
        className="form-control header-search fs-5"
        type="search"
        placeholder="Search Eastern"
        aria-label="Search"
      />
      <div
        className={
          "radio-popover popover-shadow w-100" + (isOpen ? "" : " d-none")
        }
      >
        <ul className="list-group">
          <li className="list-group-item">
            <input
              className="form-check-input me-1"
              type="radio"
              name="listGroupRadio"
              value="web"
              id="firstRadio"
              defaultChecked
            />
            <label
              className="form-check-label stretched-link"
              htmlFor="firstRadio"
            >
              Web
            </label>
          </li>
          <li className="list-group-item">
            <input
              className="form-check-input me-1"
              type="radio"
              name="listGroupRadio"
              value="radio"
              id="secondRadio"
            />
            <label
              className="form-check-label stretched-link"
              htmlFor="secondRadio"
            >
              People
            </label>
          </li>
        </ul>
      </div>
    </form>
  );
};
