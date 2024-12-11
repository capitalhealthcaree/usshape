const TopHeader = () => {
  return (
    <>
      <div className="header-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-8 col-lg-9">
              <div className="header-top-item">
                <div className="header-top-left">
                  <ul>
                    <li>
                      <a href="tel:+14698665222">
                        <i className="icofont-ui-call"></i>
                        +1 (469) 866-5222
                      </a>
                    </li>
                    <li>
                      <a href="mailto:contact@usshape.org">
                        <i className="icofont-ui-message"></i>
                        contact@usshape.org
                      </a>
                    </li>
                    <li>
                      <i className="icofont-location-pin"></i>
                      2071 N Collins Blvd Richardson TX 75080
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-lg-3">
              <div className="header-top-item">
                <div className="header-top-right">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/donation"
                        target="_blank"
                        style={{
                          display: "block",
                          width: "80px",
                          height: "25px",
                          lineHeight: "25px",
                          color: "#ffffff",
                          fontSize: "16px",
                          textAlign: "center",
                          border: "1px solid transparent",
                          backgroundColor: "#0046c0",
                        }}
                      >
                        DONATE
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
