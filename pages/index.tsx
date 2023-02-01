import { Github, Instagram, Linkedin } from "@geist-ui/react-icons";
import Discord from "../components/Discord";
import Steam from "../components/Steam";
import copy from "copy-to-clipboard";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "../styles/home.module.sass";
import Head from "next/head";
export default function Home() {
  const [visibleNot, setVisibleNot] = useState(false);


  function copyDiscord() {
    copy("Yahya#0521");
    setVisibleNot(true);
    setTimeout(() => setVisibleNot(false), 5000);
  }

  return (
    <>
      <Head>
        <title>Yahya</title>
      </Head>
      <div className={styles.intro}>
        <div className={styles.middle}>
          <h1 className={styles.name}>Yahya </h1>
          <p>
            <a
              href="https://github.com/yaya2devops"
              className={styles.social}
              target="_blank"
              rel="noopener noreferer"
            >
              <Github />
            </a>

            <a
              href="https://www.linkedin.com/in/yahya-abulhaj"
              className={styles.social}
              target="_blank"
              rel="noopener noreferer"
            >
              <Linkedin />
            </a>

            <a
              href="https://www.instagram.com/yaya2devops"
              className={styles.social}
              target="_blank"
              rel="noopener noreferer"
            >
              <Instagram />
            </a>

          
         
            

            <a className={styles.social} onClick={copyDiscord}>
              <Discord />
            </a>
          </p>
        </div>
      </div>
      <CSSTransition in={visibleNot} timeout={230} classNames="fade-transition">
        <div
          className={styles.Notification}
          onClick={() => setVisibleNot(false)}
        >
          Copied, go discord and add ME!
        </div>
      </CSSTransition>
    </>
  );
}
