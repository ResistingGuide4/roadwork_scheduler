import Image from 'next/image';
import previewImg from '../public/editorPreview.png';
import style from './homepage.module.css';

export default function Home() {
  return (
    <>
      <header>
        <h1>Roadwork Scheduler</h1>
      </header>
      <main>
        <div className={style.imgAndTextGroup}>
          <Image src={previewImg} width={600} className={style.img} alt="image of editor" />
          <div className={style.textGroup}>
            <h2>Quickly and Effectively Schedule Roadwork</h2>
            <p>Using data from google maps and input from the user, Roadwork Scheduler can arrange and schedule optimal times to work on and close down roads.</p>
          </div>
        </div>
        <div className={style.imgAndTextGroup}>
          <div className={style.textGroup}>
            <h2>Avoid Problems in Traffic</h2>
            <p>Roadwork scheduler will take into account buildings of interest such as Schools, Colleges, Fire departments, and other importent buildings, and prevent overusing roads for detours.
            </p>
          </div>
          <Image src={previewImg} className={style.img} width={600} alt="image of editor" />
        </div>
      </main>
    </>
  );
}
