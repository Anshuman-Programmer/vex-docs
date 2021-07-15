import 'tailwindcss/tailwind.css'
import "@material-tailwind/react/tailwind.css";
import Head from 'next/head'
import { Provider } from 'next-auth/client';


function MyApp({ Component, pageProps }) {
  return (
  <>
    <Head>
    <link
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet"
    />
    <link rel="icon" href="/logo.png" />
    <title>Vexcode Docs</title>
    </Head>
    <Provider session={pageProps.session}>
      <Component {...pageProps} /> 
    </Provider>
    
  </>)
}

export default MyApp

