import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter()
  const connect = async (event: any) => {
    event.preventDefault()
    console.log('Get token from backend')
    
    const response = await fetch(process.env.SERVICE_URL as string) 
    const data = await response.json()
    console.log(data)

    router.push('/dashboard')
    // console.log('Conect with Alexa')
  }

  return (
    <>
      <Head>
        <title>SmartHome</title>
        <meta name="description" content="Smart home hub" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
      <button onClick={connect}>Conect</button>
      </main>
    </>
  );
}
