import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vexcode Docs</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <Header/>

      <section>
        <div className="max-w-3xl mx-auto">

        </div>
      </section>

    </div>
  )
}
