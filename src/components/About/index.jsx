"use client";
import styles from "./style.module.css";
import Rounded from "../../common/RoundedButton";
import Image from "next/image";
import computer from "../../assets/computer.jpeg";
const index = () => {
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
    <main className={styles.about} id="about">
      <h1 className={styles.about_big_text}>ABOUT</h1>
      <div className={styles.container}>
        <div className={styles.about_img}>
          <div className={styles.about_img_div}>
            <Image src={computer} className={styles.about_main_img} />
          </div>
        </div>
        <div className={styles.about_text}>
          <p className={styles.about_small}>Let me introduce myself.</p>
          <h1 className={styles.about_h1}>ABOUT ME</h1>
          <p className={styles.about_p}>
            Hey, my name is Aftab, and I'm a Fullstack Developer. My passion is
            to create and develop a clean UI/UX for my users.
          </p>
          <br />
          <p className={styles.second_p}>
            My main stack currently is React/Next.js in combination with
            Tailwind CSS and TypeScript.
          </p>
          <Rounded>
            <p
              onClick={() => {
                smoothScrollTo("contact");
              }}
            >
              CONTACT ME
            </p>
          </Rounded>
        </div>
      </div>
    </main>
  );
};

export default index;
