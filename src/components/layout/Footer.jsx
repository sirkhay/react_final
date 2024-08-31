import { icons, images } from "../exports/images"
import "./styles/layout.css";

const Footer = () => {
  return (
    <footer className="footer text-white pt-4 px-0 my-0">

      <div className="container-fluid row px-0 mx-0 main-footer pt-3">

        <div className="col-12 col-md-5 fg-subtle px-5">
          <img src={images.BrandLogo} alt='brand logo' className='my-2 ' />

          <p className="pt-4">
            Lorem ipsum dolor sit amet consectetur. Scelerisque vitae et vitae suspendisse vulputate vestibulum tortor nisl cursus. Egestas nulla in
          </p>

          <div className="d-flex pt-2">
            <img src={icons.facebook} alt="faceboook" /> &nbsp; &nbsp;
            <img src={icons.instagram} alt="instagram" /> &nbsp; &nbsp;
            <img src={icons.twitter} alt="twitter" /> &nbsp; &nbsp;
            <img src={icons.linkedin} alt="linkedin" />
          </div>
        </div>

        <div className="col-12 col-md-7 px-5 px-md-0 row">
          {/* <div className="d-none d-md-block col-md-2"></div> */}
          <div className="col-12 col-md-3 mt-2 mt-md-0">
            <div className="footer-col">
              <div className="footer-header mb-3">
                Services</div>
              <div className="footer-item mb-2">
                UI/UX</div>
              <div className="footer-item mb-2">
                Website Dev</div>
              <div className="footer-item mb-2">
                Mobile Dev</div>
              <div className="footer-item mb-2">
                SEO</div>
            </div>
          </div>

          <div className="col-12 col-md-3 mt-2 mt-md-0">
            <div className="footer-col">
              <div className="footer-header mb-3">
                Resources</div>
              <div className="footer-item mb-2">
                Compliance</div>
              <div className="footer-item mb-2">
                Case Studies</div>
              <div className="footer-item mb-2">
                Webinars</div>
              <div className="footer-item mb-2">
                Developers</div>
            </div>
          </div>

          <div className="col-12 col-md-6 mt-2 mt-md-0">
            <div className="footer-col">
              <div className="footer-header mb-3">
                Contact Information</div>
              <div className="footer-item mb-2">
                <img src={icons.message} alt="message icon" /> &nbsp;
                designhubgp@gmail.com
              </div>
              <div className="footer-item my-3">
                <img src={icons.telephone} alt="message icon" /> &nbsp;
                +234 706 448 0655
              </div>
              <div className="footer-item mb-2">
                <img src={icons.location} alt="message icon" /> &nbsp;
                Lorem Ipsum Dummy text
              </div>

            </div>
          </div>
        </div>

      </div>

      <div className="py-3 copyright container-fluid d-flex justify-content-around align-items-center mx-0">
        <p>
          Copyright ⓒ DesignHub, 2023. All rights reserved.
        </p>

        <p>
          <a href="#!">Website Terms</a> &nbsp;
          <a href="#!">Privacy Policy</a> &nbsp;
          <a href="#!">Cookies Policy</a>
        </p>

      </div>

    </footer>
  )
}

export default Footer