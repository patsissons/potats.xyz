import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/potats.png"
          alt="This is a potats"
          width={456}
          height={482}
          priority
        />
      </div>
    </main>
  )
}
