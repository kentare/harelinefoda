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
        <meta property="og:url" content="https://harelineføda.no" />
        <meta
          property="og:image"
          content="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/313/baby_1f476.png"
        />
        <link rel="canonical" href="https://harelineføda.no" />
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
