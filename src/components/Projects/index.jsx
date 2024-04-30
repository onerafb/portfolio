import styles from "./style.module.css";
import Image from "next/image";
import code from "../../assets/code.jpg";
import prtwo from "../../assets/prtwo.png";
import prthree from "../../assets/prthree.png";
const index = () => {
  return (
    <main className={styles.project_main} id="projects">
      <h1 className={styles.project_big_text}>WOR</h1>
      <h1 className={styles.project_big_text_two}>K</h1>

      <div className={styles.container}>
        <div className={styles.project_title}>
          <p>Some Things I've Built </p>
          <div></div>
        </div>

        <div className={styles.project_con}>
          <div className={styles.project_left}>
            <Image src={code} className={styles.pr_image} />
          </div>
          <div className={styles.project_right}>
            <p className={styles.project_right_small_p_text}>
              Featured Project
            </p>
            <h2 className={styles.project_right_h2_text}>Mystic mist Theme</h2>
            <div className={styles.project_right_overflow}>
              Mystic Mist is a vs-code theme that evoke a palette of dusky
              purples, deep blues, and misty grays.
            </div>
            <div className={styles.project_right_p_tech_used}>
              <p>Vs Code </p>
              <a
                href="https://marketplace.visualstudio.com/items?itemName=noxhill.mysticmist"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.web_link}
              >
                Visit Web
              </a>
            </div>
          </div>
        </div>

        <div className={styles.hr_project}></div>

        <div className={styles.project_con_two}>
          <div className={styles.project_left_two}>
            <p className={styles.project_right_small_p_text_two}>
              Featured Project
            </p>
            <h2 className={styles.project_right_h2_text_two}>
              Video Calling App
            </h2>
            <div className={styles.project_left_overflow_two}>
              Discover seamless video talks with our app. Say hello to
              effortless connections.
            </div>
            <div className={styles.project_right_p_tech_used_two}>
              <p>Next js</p>
              <p>Tailwind</p>
              <p>Clerk</p>
              <p>Shadcn</p>
              <a
                href="https://sight-sync.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.web_link}
              >
                Visit Web
              </a>
            </div>
          </div>
          <div className={styles.project_right_two}>
            <Image src={prtwo} className={styles.pr_image} />
          </div>
        </div>

        <div className={styles.hr_project}></div>

        <div className={styles.project_con}>
          <div className={styles.project_left}>
            <Image src={prthree} className={styles.pr_image} />
          </div>
          <div className={styles.project_right}>
            <p className={styles.project_right_small_p_text}>
              Featured Project
            </p>
            <h2 className={styles.project_right_h2_text}>X Clone</h2>
            <div className={styles.project_right_overflow}>
              X clone is a web application that replicates the core
              functionality of the popular social media platform.
            </div>
            <div className={styles.project_right_p_tech_used}>
              <p>React</p>
              <p>Node js</p>
              <p>Mongo DB</p>
              <p>Cloudinary</p>
              <a
                href="https://tweet-49rd.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.web_link}
              >
                Visit Web
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default index;
