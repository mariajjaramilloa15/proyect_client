import React from "react";
import "../scss/index.scss";

const error404 = () => {
  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="four_zero_four_bg">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default error404;
