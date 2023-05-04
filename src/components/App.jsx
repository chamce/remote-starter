import "../styles/App.css";
import { Wrapper } from "../remote/components/Wrapper";
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
const Modal = () => {
  return (
    <>
      {/* Button trigger modal */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      {/* Modal */}
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
      </div>
    </>
  );
};

export const App = () => {
  return (
    <Wrapper>
      {/* <Table /> */}
      <Modal />
    </Wrapper>
  );
};
