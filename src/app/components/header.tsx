import React from 'react'
import Link from 'next/link'
import styles from './Header.module.css'
import { JacquesFrancoisFont } from "../fonts";

const Header = () => {
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