export const Page = () => {
  return (
    <>
      <div className="d-flex position-relative">
        <div
          style={{ borderTopLeftRadius: 6 }}
          className="flex-fill bg-white shadow-4"
        ></div>
        <div className="bg-curl z-3">
          <div className="curl"></div>
        </div>
        {/* <div className="curl-bg z-3 position-relative">
          <div className="curl"></div>
        </div> */}
        <div className="position-absolute top-100 start-0 w-100 h-25 bg-white"></div>
      </div>
      <div
        style={{ height: 300 }}
        className="bg-white rounded-bottom shadow-4"
      ></div>
      {/* <div className="d-flex position-relative">
        <div
          style={{ borderTopLeftRadius: 6 }}
          className="bg-white flex-fill shadow-4"
        ></div>
        <div
          style={{ width: 75, height: 75 }}
          className="bg-white ms-auto position-relative"
        >
          <div className="curl"></div>
        </div>
      </div>
      <div
        style={{ height: 300 }}
        className="bg-white shadow-4 rounded-bottom"
      ></div> */}
    </>
  );
};
