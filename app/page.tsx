import Image from 'next/image';
import previewImg from '../public/editorPreview.png';
import style from './homepage.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header className={style.header}>
        <h1>Roadwork Scheduler</h1>
        <div className={style.headerLinks}>
          <Link href='./login' className={style.link}><b>Login</b></Link>
          <Link href='./register' className={style.link}><b>Register</b></Link>
        </div>
      </header>
      <main>
        <div className={style.imgAndTextGroup}>
          <Image src={previewImg} width={600} className={style.img} alt="image of editor" />
          <div className={style.textGroup}>
            <h2>Quickly and Effectively Schedule Roadwork</h2>
            <p>
              Using data from google maps and input from the user, Roadwork Scheduler can arrange and schedule optimal times to work on and close down roads.
            </p>
          </div>
        </div>
        <div className={style.imgAndTextGroup}>
          <div className={style.textGroup}>
            <h2>Avoid Problems in Traffic</h2>
            <p>
              Roadwork scheduler will take into account buildings of interest such as Schools, Colleges, Fire departments, and other importent buildings, and prevent overusing roads for detours.
            </p>
          </div>
          <Image src={previewImg} className={style.img} width={600} alt="image of editor" />
        </div>
        <div className={style.imgAndTextGroup}>
          <Image src={previewImg} className={style.img} width={600} alt="image of editor" />
          <div className={style.textGroup}>
            <h2>Effectively Communicate Detours</h2>
            <p>
              Locate where signs are needed and notify drivers of any dead ends due to construction.
            </p>
          </div>
        </div>
      </main>
      <footer>
        <div className={style.footerLeft}>
          <p>Created By Thomas</p>
          <p>Copyright © 2024 CWTWebsites, <a href='cwtwebsites.com'>cwtwebsites.com</a> All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}
