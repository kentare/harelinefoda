import Head from "next/head"
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
        <meta
          name="og:description"
          content="Har Eline føda enda? Finn det ut her"
        />
        <meta name="og:locale" content="nb_NO" />
        <meta property="og:url" content="https://harelinef%C3%B8da.no" />
        <meta property="og:title" content="https://harelinef%C3%B8da.no" />
        <meta
          property="og:image"
          content="https://harelinef%C3%B8da.no/android-chrome-512x512.png"
        />
        <link rel="canonical" href="https://harelinef%C3%B8da.no" />
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
