import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"

export default function Home() {
  const hasGivenBirth = false
  const emoji = (
    <span className={styles.emoji}>{!hasGivenBirth ? "🤰🏼" : "👶"} </span>
  )
  return (
    <div className={styles.container}>
      <Head>
        <title>Har Eline føda?</title>
        <meta name="description" content="Finn ut om Eline har føda" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {!hasGivenBirth ? <>{emoji} Har ikkje føda</> : <>{emoji} Har føda</>}
        </h1>
      </main>
    </div>
  )
}
