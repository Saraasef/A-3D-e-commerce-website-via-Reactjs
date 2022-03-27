import React from "react";
import './Footer.css';

const Footer = () => {

  return (
    <div className="footerform">
    <hr style={{ margin: "0 15%" }} />
    <ul className="listfooter">
      <li>
        <a href="#!" className="links">درباره ما</a>
          </li>
          <li >
            <h6 >
              <a href="#!" className="links">محصولات </a>
            </h6>
          </li>
          <li >
            <h6 >
              <a href="#!" className="links">پشتیبانی</a>
            </h6>
          </li>
          <li >
            <h6 >
              <a href="#!" className="links">تماس  با ما </a>
            </h6>
          </li>
          <br/>
        <hr  className="linemiddel" />
        <br/>
            <p style={{ lineHeight: "1.7rem" }}>
             آریا چرم نامی آشنا در زمینه تولید محصولات از چرم طبیعی در حوزه پوشاک، کیف، کفش، کمربند، اکسسوری و انواع هدایای چرمی 
             دست ساز، در حال فعالیت می‌باشد.
            </p>
        <hr  className="linemiddel" />
    </ul>
    </div>
    
  );
}

export default Footer;