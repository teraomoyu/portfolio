import Image from 'next/image'
import Link from 'next/link'
import Header from './components/header'
import { Italiana } from "next/font/google";

const ItalianaFont = Italiana({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <Header title='タイトル'></Header>
      <Image src='/background-icon.PNG' width='800' height='800' alt='背景イメージ' className='bg-img'></Image>
      <h2 className={ItalianaFont.className}>yu.me1762</h2>
      <h3 className={ItalianaFont.className}>Logo Designer, Music Composer</h3>
    </div>
  )
}