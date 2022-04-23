import React from "react";

function Signup() {
  return (
    <>
      <button
        type="button"
        className="btn btn-outline-primary ms-2"
        data-bs-toggle="modal"
        data-bs-target="#signupModal"
      >
        <i class="fa-solid fa-user "></i> Đăng ký
      </button>

      <div
        className="modal fade"
        id="signupModal"
        tabIndex="-1"
        aria-labelledby="signupModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="signupModalLabel">
                ĐĂNG KÝ
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <button className="btn btn-primary w-100 mb-4">
                <i className="fa-brands fa-google me-2"></i>Đăng ký với Google
              </button>
              <button className="btn btn-primary w-100 mb-4">
                <i className="fa-brands fa-facebook me-2"></i>Đăng ký với
                Facebook
              </button>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    TÀI KHOẢN
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    Tài khoản của bạn sẽ được chúng tôi bảo mật tuyệt đối
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    MẬT KHẨU
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                
                <div className="d-flex">
                  <button
                    type="submit"
                    className="btn btn-outline-primary mx-auto w-100"
                  >
                    Đăng ký
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
