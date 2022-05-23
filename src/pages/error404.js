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
                src="https://static.vecteezy.com/system/resources/previews/002/416/499/large_2x/404-error-and-page-not-found-illustration-vector.jpg"
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
