import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>SmartHome</title>
        <meta name="description" content="Smart home hub" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.center}>
          <h1>Dashboard</h1>
        </div>
      </main>
    </>
  );
}
