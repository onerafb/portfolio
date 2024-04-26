"use client";
import styles from "./style.module.css";
import Rounded from "../../common/RoundedButton";
import { IoMdArrowRoundDown } from "react-icons/io";
import Cursor from "@/utils/Cursor";
import Arrow from "@/utils/Arrow";
import Mouse from "@/utils/Mouse";
import Ola from "@/utils/Ola";
import Image from "next/image";
import home from "../../assets/home.jpg";
const index = ({ isLoading }) => {
  const smoothScrollTo = (targetId) => {
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <main className={styles.landing} id="home">
      {/* <Menu/> */}
      <div className={styles.container}>
        <div className={styles.textzone}>
          <h1 className={styles.h1}>
            Full-Stack React Developer
            <Arrow isLoading={isLoading} />
          </h1>

          <p className={styles.graytext}>
            Hi, I'm Aftab. A passionate Full-Stack React Developer based in
            India. 📍
          </p>
          <Rounded>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                fontSize: "17px",
              }}
              onClick={() => {
                smoothScrollTo("projects");
              }}
            >
              PROJECTS
              <Cursor />
            </p>
          </Rounded>
        </div>
        <div className={styles.landing_pic_div}>
          <Ola />
          <div className={styles.landing_pic}>
            <Image src={home} className={styles.landing_main_img} />
          </div>
        </div>
        <div className={styles.scroll_down}>
          <Mouse />
          Scroll down
          <IoMdArrowRoundDown />
        </div>
      </div>
    </main>
  );
};

export default index;
