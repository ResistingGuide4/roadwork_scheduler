import Image from 'next/image';
import previewImg from '../public/editorPreview.png'

export default function Home() {
  return (
    <>
      <header>
        <h1>Roadwork Scheduler</h1>
      </header>
      <main>
        <div>
          <Image src={previewImg} width={500} alt="image of editor" />
          <h2>Quickly and Effectively Schedule Roadwork</h2>
        </div>
      </main>
    </>
  );
}
