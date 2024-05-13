import React from "react";
function Submit({ Submit, style }) {
  return (
    <>
      <div className="row form-group">
        <div className="col-md-12">
          <input
            type="submit"
            id="subject "
            className={`text-white py-2 px-4 ${style}`}
            value={Submit}
          ></input>
        </div>
      </div>
    </>
  );
}
export default Submit;
