import React from 'react'
import Link from 'next/link'
import styles from './Header.module.css'
import { Jacques_Francois } from "next/font/google";

const JacquesFrancoisFont = Jacques_Francois({
  weight: "400",
  subsets: ["latin"],
});

type HeaderProps = {
  title: string
}

const Header = ({ title }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={JacquesFrancoisFont.className}>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/works">
              Works
            </Link>
          </li>
          <li>
            <Link href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header