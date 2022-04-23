import { NavLink } from "react-router-dom";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">Về chúng tôi</h1>
            <p className="lead mb-4 text-two-block">
              Apple Inc. là một tập đoàn công nghệ đa quốc gia của Mỹ có trụ sở
              chính tại Cupertino, California, chuyên thiết kế, phát triển và
              bán thiết bị điện tử tiêu dùng, phần mềm máy tính và các dịch vụ
              trực tuyến. Nó được coi là một trong Năm công ty lớn của ngành
              công nghệ thông tin Hoa Kỳ, cùng với Amazon, Google, Microsoft và
              Meta. Các dòng sản phẩm phần cứng của hãng bao gồm điện
              thoại thông minh iPhone, máy tính bảng iPad, máy tính xách tay
              Macbook, máy tính cá nhân Mac, máy nghe nhạc di động iPod, đồng hồ
              thông minh Apple Watch, máy phát đa phương tiện kỹ thuật số Apple
              TV, tai nghe không dây AirPods, tai nghe AirPods Max và loa thông
              minh HomePod. Phần mềm của Apple bao gồm hệ điều hành macOS, iOS,
              iPadOS, watchOS và tvOS, trình phát đa phương tiện iTunes, trình
              duyệt web Safari, mã nhận dạng nhạc Shazam, gói làm việc năng suất
              và sáng tạo iLife và iWork, cũng như các ứng dụng chuyên nghiệp
              như Final Cut Pro, Logic Pro và Xcode. Các dịch vụ trực tuyến của
              nó bao gồm iTunes Store, iOS App Store, Mac App Store, Apple
              Arcade, Apple Music, Apple TV +, iMessage và iCloud. Các dịch vụ
              khác bao gồm Apple Store, Genius Bar, AppleCare, Apple Pay, Apple
              Pay Cash và Apple Card.
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Liên hệ ngay
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="https://www.freeiconspng.com/uploads/about-us-icon-22.png"
              alt="About Us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
