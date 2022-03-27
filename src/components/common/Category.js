import styles from "./Category.module.css";
import { Row, Col } from "react-grid";
import Three from "../Three/Three";
import arrow from "../../images/arrow.gif";
import React from "react";
import { Md360 } from "react-icons/md";

function Category() {
  return (
    <>
      <grid>
        <Row>
          <Col className={styles.news} xs={12} md={6} lg={6}>
            <div className={styles.newsfont1}>
              <span className={styles.newsfont1text}>
                <Md360 />
                <b> لذت خرید در دنیای 3D</b>
              </span>
            </div>
            <div className={styles.card}>
              <Three className={styles.cardimg} />
            </div>
          </Col>
          <Col className={styles.news} xs={12} md={6} lg={6}>
            <div className={styles.newsfont1}>
              <span className={styles.newsfont1text}>
                <b>تور مجازی خود را آغاز کنید ...</b>
              </span>
            </div>
            <div className={styles.newsanimationvideodiv}>
              <p className={styles.newsanimationvideotext}>
                <img src={arrow} className={styles.newsarrow} alt="arrow" />
                <b>همین حالا محصولات ما را از خانه و بصورت مجازی ببینید....</b>
                <br />
                <br />
                شما می توانید با نسخه نمایشی واقعیت افزوده، یک تجربه خرید مجازی
                شبیه به زندگی را از خانه خود دریافت کنید .<br />
                نسخه ی نمایشی به مصرف کنندگان اجازه می دهد تا محصول را به صورت
                مجازی در خانه خود تجربه کنند، ابعاد محصول را بررسی کنند و تصمیم
                آگاهانه بگیرند.
                <br />
                از آنجایی که مشتریان آریا چرم به دنبال انتخاب‌های هوشمندانه‌تر
                برای سبک زندگی هستند، ما می‌خواهیم اطمینان حاصل کنیم که آنها
                می‌توانند محصولات مورد علاقه خود را درست در خانه‌هایشان تجربه
                کنند و بدون خروج از خانه خرید خود را انجام دهند.
              </p>
            </div>
          </Col>
        </Row>
      </grid>
    </>
  );
}
export default Category;
