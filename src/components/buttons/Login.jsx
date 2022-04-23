import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Login() {
  return (
    <>
      <button
        type="button"
        className="btn btn-outline-primary"
        data-bs-toggle="modal"
        data-bs-target="#loginModal"
      >
        <i className="fa-solid fa-right-to-bracket me-2"></i> Đăng Nhập
      </button>

      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="loginModalLabel">
                ĐĂNG NHẬP
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
                    <i className="fa-brands fa-google me-2"></i>Đăng nhập với Google
                </button>
                <button className="btn btn-primary w-100 mb-4">
                    <i className="fa-brands fa-facebook me-2"></i>Đăng nhập với Facebook
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
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Lưu mật khẩu
                  </label>
                </div>
                <div className="d-flex">
                    <button type="submit" className="btn btn-outline-primary mx-auto w-100">
                        Đăng nhập
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

export default Login;
