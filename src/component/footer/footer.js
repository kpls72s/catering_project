import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './footer.css';
function Footer() {
  return (
    <footer>
      <div className="footer">
        <Row className="mx-0">
          <Col md={6}>
            <h5 className="pull-right mt-4">درباره ما</h5>  
            <p className="footerAbout">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
          </Col>
          <Col md={6}>
            <h5>شبکه های اجتماعی</h5>  
            <ul className="socialMedia">
              <li><span><FontAwesomeIcon size="lg" icon={['fab','facebook']}/></span></li>
              <li><span><FontAwesomeIcon size="lg" icon={['fab','twitter']}/></span></li>
              <li><span><FontAwesomeIcon size="lg" icon={['fab','google-plus']}/></span></li>
              <li><span><FontAwesomeIcon size="lg" icon={['fab','whatsapp']}/></span></li>
            </ul>
          </Col>
        </Row>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
