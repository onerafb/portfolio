"use client";
import React from "react";
import styles from "./style.module.css";
import Rounded from "../../common/RoundedButton";
import Image from "next/image";
import boy from "../../assets/boy.jpeg";

const index = () => {
  return (
    <main className={styles.contact_main} id="contact">
      <div className={styles.container}>
        <div className={styles.contact_title}>
          <p>Contact</p>
          <div></div>
        </div>
        <div className={styles.contact_one}>
          <div className={styles.contact_image}>
            <Image src={boy} className={styles.contact_main_img} />
          </div>
          <h1>Let's work</h1>
        </div>
        <div className={styles.contact_two}>
          <h1>together</h1>
        </div>
        <div className={styles.contact_three}>
          <Rounded className={styles.contact_getintouch_circle}>
            <p>Get in touch</p>
          </Rounded>
        </div>
        <div className={styles.contact_bt_div}>
          <Rounded>
            <p>Don't be shy!Hit me up!</p>
          </Rounded>
          <Rounded>
            <p>aftab7t7@gmail.com</p>
          </Rounded>
        </div>
      </div>
    </main>
  );
};

export default index;
