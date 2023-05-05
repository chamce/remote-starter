import "../styles/App.css";
// import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component
// import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
// import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
// import { useState, useMemo, useEffect } from "react";

// const Table = () => {
//   const [rowData, setRowData] = useState();
//   const slicedData = useMemo(() => rowData && rowData.slice(0, 50), [rowData]);

//   const [columnDefs] = useState([
//     { field: "make", filter: true },
//     { field: "model", filter: true },
//     { field: "price" },
//   ]);

//   useEffect(() => {
//     fetch("https://www.ag-grid.com/example-assets/row-data.json")
//       .then((result) => result.json())
//       .then((rowData) => setRowData(rowData));
//   }, []);

//   return (
//     <div className="ag-theme-alpine" style={{ height: 500 }}>
//       <AgGridReact rowData={slicedData} columnDefs={columnDefs} />
//     </div>
//   );
// };
const TitleCard = ({ title, description }) => {
  return (
    <div className="card card-shadow bg-gradient bg-dark-subtle">
      <div className="card-body">
        <h5 className="card-title display-4">{title}</h5>
        <p className="card-text fs-4">{description}</p>
        <input
          className="form-control body-search fs-5"
          placeholder="Filter"
          aria-label="Search"
          type="search"
          defaultValue=""
        />
      </div>
    </div>
  );
};
const Accordion = () => {
  return (
    <div
      style={{ borderRadius: 6 }}
      className="accordion card-shadow"
      id="accordionExample"
    >
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Accordion Item #1
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong>This is the first item's accordion body.</strong> It is
            shown by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Accordion Item #2
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Accordion Item #3
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
    </div>
  );
};
const Modals = ({ dynamicModalButton }) => {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
                Modal 1
              </h1>
              {dynamicModalButton}
            </div>
            <div className="modal-body">
              Show a second modal and hide this one with the button below.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary card-shadow"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
              >
                Open second modal
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">
                Modal 2
              </h1>
              {dynamicModalButton}
            </div>
            <div className="modal-body">
              Hide this modal and show the first with the button below.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary card-shadow"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
              >
                Back to first
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        className="btn btn-primary card-shadow"
        data-bs-target="#exampleModalToggle"
        data-bs-toggle="modal"
      >
        Open first modal
      </button>
    </>
  );
};

export const App = ({ dynamicModalButton }) => {
  return (
    <>
      <div className="vstack gap-4">
        <TitleCard
          title={"Title"}
          description={
            "Some quick example text to build on the card title and make up the bulk of the card's content."
          }
        />
        <Accordion />
        <Modals dynamicModalButton={dynamicModalButton} />
      </div>
    </>
  );
};

/*
- remove ag grid
- do we want to make scroll reset cleaner--opacity 0 during transition?
- look for better fullscreen icon
- write usage document
- should the wrapper include the title block, and how would you include it?
*/
